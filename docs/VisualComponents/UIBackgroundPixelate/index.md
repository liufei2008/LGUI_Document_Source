# UIBackgroundPixelate

**Use it on ScreenSpaceUI or World Space LGUI Renderer.**
**May have some issue when MSAA is on.**
This component can make pixelate effect the background view's image.
![](./icon.png)

Create it by select "Create UI Post Process"->"UIBackgroundPixelate":
![](./1.png)
![](./2.png)
|Property:|Function:|
|:-|:-|
|Pixelate Strength|Pixelate effect strength.
|Apply Alpha to Strength|Will alpha affect blur strength? If true, then 0 alpha means 0 blur strength, and 1 alpha means full blur strength. So if you need animation on *Pixelate Strength*, just use "Alpha To" node on blueprint.
*Custem UIMaterial* is not supported.