#!/usr/bin/env python3
"""Render resources/Akaash_Garg_Resume.md to the public résumé PDF.

Python rather than Node, unlike the other scripts here, because ReportLab is
the one PDF toolchain already available on this machine. The previous PDF was
built with WeasyPrint, which is no longer installed; nothing about the output
depends on which of the two produced it.

    python ./scripts/generate-resume.py

The markdown is the source of truth. Edit that, re-run this, and commit both.

ReportLab's built-in fonts are WinAnsi-encoded, so a character outside that set
renders as a solid black box rather than failing loudly. GLYPH_FALLBACKS maps
the ones this document uses; anything else unmappable stops the build instead
of shipping a box into a résumé.
"""

import html
import re
import sys
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_JUSTIFY
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import (
    HRFlowable,
    ListFlowable,
    ListItem,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
)

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "resources" / "Akaash_Garg_Resume.md"
OUT = ROOT / "public" / "Akaash-Garg-Systems-Architect-Resume.pdf"

TITLE = "Akaash Garg — Full-Stack Systems Architect"
AUTHOR = "Akaash Garg"

# A4: the target market is majority metric (UK, EU, India). Narrow margins
# because the content is dense and two pages is the brief.
MARGIN = 14 * mm

GLYPH_FALLBACKS = {"→": "·"}  # rightwards arrow -> middle dot

INK = colors.HexColor("#111111")
MUTED = colors.HexColor("#555555")
RULE = colors.HexColor("#BBBBBB")


def sanitize(text: str) -> str:
    """Replace glyphs the built-in fonts cannot draw; refuse anything left."""
    for bad, good in GLYPH_FALLBACKS.items():
        text = text.replace(bad, good)
    for char in set(text):
        if ord(char) < 128:
            continue
        try:
            char.encode("cp1252")
        except UnicodeEncodeError:
            sys.exit(
                f"U+{ord(char):04X} ({char!r}) has no glyph in the built-in fonts "
                "and no entry in GLYPH_FALLBACKS. Add one, or change the markdown."
            )
    return text


def inline(text: str) -> str:
    """Markdown inline -> ReportLab's mini-XML. Escape first, then add tags."""
    text = html.escape(sanitize(text), quote=False)
    text = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", r'<link href="\2" color="#1a4f8a">\1</link>', text)
    text = re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", text)
    text = re.sub(r"(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)", r"<i>\1</i>", text)
    text = re.sub(r"`([^`]+)`", r'<font face="Courier" size="8">\1</font>', text)
    return text


S = {
    "name": ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=19, leading=22, textColor=INK, spaceAfter=3),
    "title": ParagraphStyle("title", fontName="Helvetica", fontSize=9.2, leading=12.5, textColor=INK, spaceAfter=2),
    "contact": ParagraphStyle("contact", fontName="Helvetica", fontSize=8.6, leading=11.5, textColor=MUTED),
    "section": ParagraphStyle("section", fontName="Helvetica-Bold", fontSize=9.6, leading=11, textColor=INK, spaceBefore=9, spaceAfter=2),
    "role": ParagraphStyle("role", fontName="Helvetica-Bold", fontSize=10, leading=12.5, textColor=INK, spaceBefore=7, spaceAfter=1),
    "meta": ParagraphStyle("meta", fontName="Helvetica-Oblique", fontSize=8.4, leading=10.8, textColor=MUTED),
    "body": ParagraphStyle("body", fontName="Helvetica", fontSize=8.7, leading=11.6, textColor=INK, alignment=TA_JUSTIFY),
    "bullet": ParagraphStyle("bullet", fontName="Helvetica", fontSize=8.7, leading=11.6, textColor=INK, alignment=TA_JUSTIFY),
    "row": ParagraphStyle("row", fontName="Helvetica", fontSize=8.7, leading=11.6, textColor=INK, spaceAfter=2.5),
}


def build_story(lines):
    story, bullets = [], []
    # Everything before the first rule is the header: name, then the title
    # line, then contact details. After it, a line opening in bold is a
    # skills or products row rather than prose.
    in_header = True
    header_lines = 0

    def flush():
        """Bullets collect so one ListFlowable keeps their indent consistent."""
        if not bullets:
            return
        story.append(
            ListFlowable(
                [ListItem(Paragraph(b, S["bullet"]), leftIndent=9) for b in bullets],
                bulletType="bullet",
                bulletFontSize=5,
                bulletOffsetY=-1.5,
                leftIndent=9,
                spaceBefore=2,
                spaceAfter=1,
            )
        )
        bullets.clear()

    for raw in lines:
        line = raw.rstrip()
        stripped = line.strip()

        if stripped == "---":
            flush()
            in_header = False
            continue
        if not stripped:
            flush()
            continue

        if stripped.startswith("# "):
            flush()
            story.append(Paragraph(inline(stripped[2:]), S["name"]))
        elif stripped.startswith("## "):
            flush()
            story.append(Paragraph(inline(stripped[3:]), S["section"]))
            story.append(HRFlowable(width="100%", thickness=0.6, color=RULE, spaceBefore=1, spaceAfter=4))
        elif stripped.startswith("### "):
            flush()
            story.append(Paragraph(inline(stripped[4:]), S["role"]))
        elif stripped.startswith("- "):
            bullets.append(inline(stripped[2:]))
        elif stripped.startswith("*") and stripped.endswith("*") and not stripped.startswith("**"):
            flush()
            story.append(Paragraph(inline(stripped), S["meta"]))
        else:
            flush()
            if in_header:
                header_lines += 1
                style = "title" if header_lines == 1 else "contact"
            elif stripped.startswith("**"):
                style = "row"
            else:
                style = "body"
            story.append(Paragraph(inline(stripped), S[style]))

    flush()
    return story


def main():
    text = SOURCE.read_text(encoding="utf-8")
    doc = SimpleDocTemplate(
        str(OUT),
        pagesize=A4,
        leftMargin=MARGIN,
        rightMargin=MARGIN,
        topMargin=MARGIN,
        bottomMargin=MARGIN,
        title=TITLE,
        author=AUTHOR,
        subject="Résumé",
        creator="scripts/generate-resume.py",
    )
    doc.build(build_story(text.splitlines()))

    from pypdf import PdfReader

    pages = len(PdfReader(str(OUT)).pages)
    print(f"Wrote {OUT} ({pages} page{'s' if pages != 1 else ''}, {OUT.stat().st_size / 1024:.0f} KB)")
    if pages > 2:
        print(f"WARNING: {pages} pages. A résumé over two is usually a trim, not a layout problem.")


if __name__ == "__main__":
    main()
