# Use custom font
In this section, we will use a custom font file(ttf, ttc, otf) to create our UIText.
LGUI provides two type of fonts:
 - LGUI Font - Bitmap font, generate different char pixels on texture area when need to render different font size.
 - LGUI SDF Font - Default font type, use signed distance field technique to render, can render smooth character no matter how big the font scale is.

## Prepare a font file.
LGUI use [freetype](./https://www.freetype.org/) to render fonts, so we will use freetype supported format(ttf, ttc, otf). Download a font file or grab one from system fonts directory. I use "华文新魏" from C:/Windows/Fonts:  
![step1](./step1.png)

Copy the font file to your UnrealEngine project directory (same directory of the .uproject file).

## Create LGUI Font asset.
Right click on the empty area of your content folder, choose "LGUI"->"LGUI SDF Font", that will create a LGUI SDF Font asset:  
![step2](./step2.png)

Rename the asset to “MyLGUIFont”:
![step3](./step3.png)

Double click it to open font editor window, click the "..." after "FontSourceFile" property, and choose the font file you just prepared:  
![step4](./step4.png)

## Create UIText.
Follow the [HelloWorld](./../HelloWorld/index.md) section to create a base screen space UI.

Select "ScreenSpaceUIRoot", and right click the down arrow, choose "Create UI Element"->"UIText":  
![step5](./step5.png)

Rename the UIText you just created to "MyUIText":  
![step6](./step6.png)

## Change UIText property.
Select "MyUIText", change "PosZ" to -120, so it will move down a little bit in viewport:  
![step7](./step7.png)

Select "MyUIText", change "Size" to 40, "Color" to black, typein "中国智造" in the "Text":  
![step8](./step8.png)

## Use our own font.
**The important part**, select "MyUIText" and drag "MyLGUIFont" to the "Font" property, see the font change in viewport:  
![step9](./step9.png)
