## ScreenSpaceUI

LGUI render ScreenSpaceUI directy to viewport after unreal engine render the world.

#### 1. Create ScreenSpaceUI
Select "LGUI Tools"->"Basic Setup"->"Screen Space UI":
![](1.png)

Then a "ScreenSpaceUIRoot" will be created:
![](2.png)

Select LGUICanvas component, you will see the "Render Mode" is "Screen Space Overlay":
![](3.png)

#### 2. LGUICanvasScaler
There is another important component on "ScreenSpaceUIRoot", is the "LGUICanvasScaler":
![](4.png)

You can change parameters in this area make UI fit to different resolutions:
![](5.png)

<!-- @toto: show us more about how to fit different resolutions -->

And this area can change camera parameters that render the ScreenSpaceUI:
![](6.png)

