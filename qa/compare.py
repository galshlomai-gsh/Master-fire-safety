"""Build side-by-side comparisons: design PDF page (left) vs built page screenshot (right).
Usage: python3 qa/compare.py <pdf_pages_dir> <shots_dir> <out_dir>
pdf_pages_dir holds p-02.png … rendered at 110 dpi (1421px wide)."""
import sys, os
from PIL import Image, ImageDraw, ImageFont

pdf_dir, shots, out = sys.argv[1:4]
os.makedirs(out, exist_ok=True)
PAIRS = [
    ('p-02', 'home-1440', 'Homepage'),
    ('p-03', 'services__fire-risk-assessments-1440', 'Fire Risk Assessments'),
    ('p-04', 'services__fire-door-inspections-1440', 'Fire Door Inspections'),
    ('p-05', 'services__fire-alarm-servicing-installation-1440', 'Fire Alarm Servicing & Installation'),
    ('p-06', 'services__emergency-lighting-servicing-installation-1440', 'Emergency Lighting Servicing & Installation'),
    ('p-07', 'services__aov-smoke-control-servicing-1440', 'AOV & Smoke Control Servicing'),
    ('p-08', 'sectors__blocks-of-flats-1440', 'Blocks of Flats (sector)'),
]
COL = 820
LABEL_BAND = 97  # "Homepage · DESKTOP 1440" title band at the top of each PDF page
try:
    font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 22)
except Exception:
    font = ImageFont.load_default()

def fit(im):
    return im.resize((COL, int(im.height * COL / im.width)), Image.LANCZOS)

def pair(left, right, title, name, ltitle='Design (PDF)', rtitle='Built (1440px)'):
    h = max(left.height, right.height) + 50
    canvas = Image.new('RGB', (COL * 2 + 30, h), (238, 236, 232))
    d = ImageDraw.Draw(canvas)
    d.text((10, 12), f'{title}: {ltitle}', fill=(28, 32, 36), font=font)
    d.text((COL + 30, 12), rtitle, fill=(201, 35, 44), font=font)
    canvas.paste(left, (0, 50)); canvas.paste(right, (COL + 30, 50))
    canvas.save(os.path.join(out, name + '.jpg'), quality=72, optimize=True)
    return name + '.jpg'

made = []
for pdf, shot, title in PAIRS:
    pp, sp = os.path.join(pdf_dir, pdf + '.png'), os.path.join(shots, shot + '.png')
    if not (os.path.exists(pp) and os.path.exists(sp)):
        print('skip', title); continue
    L = Image.open(pp).convert('RGB'); L = L.crop((0, LABEL_BAND, L.width, L.height))
    R = Image.open(sp).convert('RGB')
    made.append(pair(fit(L), fit(R), title, shot.replace('-1440', '')))

# Mobile: design p-10 (contact sheet of 390px frames) vs our home + FRA mobile tops
p10 = os.path.join(pdf_dir, 'p-10.png')
if os.path.exists(p10):
    L = Image.open(p10).convert('RGB'); L = L.crop((0, LABEL_BAND, L.width, L.height))
    tops = []
    for s in ['home-390', 'services__fire-risk-assessments-390', 'services__fire-door-inspections-390', 'services__fire-alarm-servicing-installation-390', 'services__emergency-lighting-servicing-installation-390', 'services__aov-smoke-control-servicing-390', 'sectors__blocks-of-flats-390']:
        f = os.path.join(shots, s + '.png')
        if os.path.exists(f):
            tops.append(Image.open(f).convert('RGB').crop((0, 0, 390, 1500)))
    if tops:
        w = 390 * 4 + 30; rows = (len(tops) + 3) // 4
        grid = Image.new('RGB', (w, rows * 1510), (238, 236, 232))
        for i, t in enumerate(tops):
            grid.paste(t, ((i % 4) * 400, (i // 4) * 1510))
        made.append(pair(fit(L), fit(grid), 'Mobile 390px', 'mobile', rtitle='Built (390px, top of each page)'))
print('\n'.join(made))
