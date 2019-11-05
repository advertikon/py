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

suffix = '_thumb'
thumbSize = 50, 50

# for imagePath in glob.glob( "*" ):
#     imageFile = os.path.basename( imagePath )
#
#     if ( imageFile.startswith( 'light_' ) or imageFile.startswith( 'dark_' ) or imageFile.startswith( 'transparent_' ) )\
#         and imageFile.endswith( suffix) :
#
#         os.remove( imageFile )
#
# sys.exit( 0 )

for imagePath in glob.glob( "./*.png" ):
    imageFile = os.path.basename( imagePath )

    if ( imageFile.startswith( 'light_' ) or imageFile.startswith( 'dark_' ) or imageFile.startswith( 'transparent_' ) ) \
            and not imageFile.endswith( suffix + '.png' ):

        file, ext = os.path.splitext( imageFile )
        thumbnailName = '{}{}{}'.format( file, suffix, ext )
        print(imageFile, '=>', thumbnailName )
        im = Image.open( imageFile )
        im.thumbnail( thumbSize )
        im.save( thumbnailName, "PNG" )

        # print( imageFile, '=>', file + suffix )


