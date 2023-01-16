## Deproject LGUI's screen position to world
Usecase: use a UIItem to control a object location on world.

The main point is to use two nodes: One is **Convert Position from LGUICanvas to Viewport**, which is proviced by LGUICanvasScaler:
![](1.png)
|Property:|Function:|
|:-|:-
|Target|A reference to LGUICanvasScaler object.
|Position|Input position in LGUICanvas's space. Note left bottom is zero position, so for UIItem who provide this value, should set *Anchors* to *Left Bottom*. 
|Return Value|Result screen space position, left top is zero position. Note left bottom is zero position.

Another is **Deproject Screen to World**, which is UnrealEngine's default node:
![](2.png)

We can link these nodes like the screen shot below: 
![](3.png)
We can use the result *World Position* and *World Direction* to generate line trace.