# UIBackgroundBlur

**Use it on ScreenSpaceUI or World Space LGUI Renderer.**
**May have some issue when MSAA is on.**
This component can make blur effect on background view's image, it is just like UMG's BackgroundBlur.
![](./icon.png)

Create it by select "Create UI Post Process"->"UIBackgroundBlur":
![](./1.png)
![](./2.png)
|Property:|Function:|
|:-|:-|
|Blur Strength|Blur effect strength.
|Apply Alpha to Blur|Will alpha affect blur strength? If true, then 0 alpha means 0 blur strength, and 1 alpha means full blur strength. So if you need animation on *Blur Strength*, just use "Alpha To" node on blueprint.
|Strength Texture|Use strengthTexture's red channel to control blur strength, 0-no blur, 1-full blur.
|MaskTexture|Use maskTexture's red channel to mask out blur result.
*Custem UIMaterial* is not supported.