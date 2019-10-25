#!/usr/bin/python3

from PIL import Image, ImageDraw, ImageFont
import os
import sys

folders = ["/res/drawable-mdpi/", "/res/drawable-hdpi/", "/res/drawable-xhdpi/", "/res/drawable-xxhdpi/"]
sizes = ["24x24", "36x36", "48x48", "72x72" ]

fontFile = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"

if not os.path.isfile( fontFile ):
    sys.stderr.write( "Font file {} does not exist\n".format( fontFile ) )
    sys.exit( 1 )

fontSize = 24
imageWidth = 24

while True:
    font = ImageFont.truetype( fontFile, size=fontSize )
    textWidth, textHeight = font.getsize( "foo" )

    if textWidth < imageWidth and textHeight < imageWidth:
        break

    fontSize -= 1

print( "font: {}, w: {}, h: {}".format( fontSize, textWidth, textHeight ) )

img = Image.new('RGBA', (100, 30), color=( 0, 0, 0, 0 ) )

d = ImageDraw.Draw( img )
d.text((10, 10), "Hello World", fill=(255, 255, 0))

img.save('pil_text.png')