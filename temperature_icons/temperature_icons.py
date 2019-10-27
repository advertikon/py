#!/usr/bin/python3

from PIL import Image, ImageDraw, ImageFont
import os
import sys
import glob

folders = {
    "res/drawable-mdpi/":    24,
    "res/drawable-hdpi/":    36,
    "res/drawable-xhdpi/":   48,
    "res/drawable-xxhdpi/":  72,
    "res/drawable/":  72,
    "res/drawable-xxxhdpi/": 96,
}

fontFile = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
fontDir = "/usr/share/fonts/truetype/*/*"

ratio = 0
tallestFont = ""

for f in glob.glob( fontDir ):
    if f in [
        "/usr/share/fonts/truetype/tlwg/Purisa-BoldOblique.ttf",
        "/usr/share/fonts/truetype/tlwg/TlwgTypist.ttf",
        "/usr/share/fonts/truetype/tlwg/Norasi-Bold.ttf",
        "/usr/share/fonts/truetype/tlwg/Laksaman-BoldItalic.ttf",
        "/usr/share/fonts/truetype/tlwg/Umpush-LightOblique.ttf",
        "/usr/share/fonts/truetype/tlwg/TlwgTypo-Oblique.ttf",
        "/usr/share/fonts/truetype/tlwg/Sawasdee-Oblique.ttf",
        "/usr/share/fonts/truetype/tlwg/TlwgMono-Bold.ttf", "it",
        "/usr/share/fonts/truetype/tlwg/Norasi-BoldOblique.ttf",
        "/usr/share/fonts/truetype/tlwg/Garuda.ttf", "it"
    ]:
        continue

    font = ImageFont.truetype(fontFile, size=10)
    w, h = font.getsize( "test" )

    if h / w > ratio:
        ratio = h / w
        tallestFont = f
        fontFile = f

print( tallestFont )

# fontFile = "/usr/share/fonts/truetype/tlwg/Garuda-Bold.ttf"

if not os.path.isfile( fontFile ):
    sys.stderr.write( "Font file {} does not exist\n".format( fontFile ) )
    sys.exit( 1 )

for temp in range( -30, 130 ):
    iconText = '{}\u00b0'.format( temp )

    for folder, iconSize in folders.items():
        if not os.path.isdir( folder ):
            sys.stderr.write( "Folder {} does not exist\n".format( folder ) )
            sys.exit(1)

        fontSize = iconSize * 2

        while True:
            font = ImageFont.truetype( fontFile, size=fontSize )
            textWidth, textHeight = font.getsize( iconText )
            ox, oy = font.getoffset( iconText )
            textWidth -= ox
            textHeight -= oy

            if textHeight < iconSize:
                break

            fontSize -= 1

        # print( "{}: font: {}, w: {}, h: {}, ox: {}, oh: {}".format( iconText, fontSize, textWidth, textHeight, ox, oy ) )
        if textWidth % 2 == 0:
            iconWidth = textWidth
        else:
            iconWidth = textWidth - 1

        img = Image.new('RGBA', ( iconWidth, iconSize), color=( 0, 0, 0, 0 ) )
        # img = Image.new('RGB', ( textWidth, textHeight ), color=( 255, 255, 255 ) )
        d = ImageDraw.Draw( img )
        # d.text(( ( iconSize - textWidth ) / 2, ( iconSize - textHeight ) / 2 ), iconText, fill=(0, 0, 0), font=font)
        d.text( ( 0 - ox, 0 - oy ), iconText, fill=( 256, 256, 256 ), font=font)

        img.save( folder + 'temp{}.png'.format( temp ).replace( '-', '_' ) )
        # sys.exit( 0 )