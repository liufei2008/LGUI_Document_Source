## Prefab workflow
In this section, we will learn how to use LGUIPrefab to reuse our UI content.

#### 1. Prepare a LGUI ScreenSpaceUI.
Follow the [HelloWorld](../HelloWorld/index.md) section to create a base ScreenSpaceUI.

#### 2. Create a button as prefab source.
Select "ScreenSpaceUIRoot" actor, right click on the down arrow button, and choose "Create UI Element"->"Button":
![step1](step1.png)

Rename the button actor to "MyPrefabButton", set "AnchorOffsetY" to -100, "Color" to green:
![step2](step2.png)

#### 3. Create prefab.
Select "MyPrefabButton" actor, right click on the down arrow button, and choose "Create Prefab":
![step3](step3.png)

Now a save file window will showup:
![step4](step4.png)

Click "Save" or "保存" button, then a prefab asset will appear in "Content" folder:
![step5](step5.png)

And notice the "MyPrefabButton" actor in the "World Outliner", the down arrow button icon become a prefab icon, and a temp prefab actor will appear in "--LGUIPrefabActor--" folder:
![step6](step6.png)

Select "MyPrefabButton" actor, right click on the prefab icon and choose "Destroy Actors":
![step7](step7.png)

Notice the "MyPrefabButton" actor and it's children are all destroyed, and the "--LGUIPrefabActor--" folder become empty:
![step8](step8.png)

#### 4. Reuse prefab in editor.
Select "ScreenSpaceUIRoot" actor, drag "MyPrefabButton_Prefab" asset and drop to anywhre on viewport:
![step9](step9.png)

See a "MyPrefabButton" actor is created in viewport and world outliner:
![step10](step10.png)

Select "Info" actor, drag "MyPrefabButton_Prefab" asset and drop to anywhre on viewport, then a new "MyPrefabButton" will be created (you may need to move it off to see in viewport):
![step11](step11.png)

Notice different prefab have different color on prefab icon:
![step12](step12.png)

Select both "MyPrefabButton" actor by hold "Ctrl" key and click it:
![step13](step13.png)

Choose "LGUI Tools"->"Destroy Actors" to destroy both actors and all it's children:
![step14](step14.png)

#### 5. Reuse prefab in runtime.
Right click in empty area of "Content" and choose "Blueprints"->"BlueprintClass":
![step15](step15.png)

Select "Actor Component":
![step16](step16.png)

Name the created ActorComponent class to "PrefabLoader":
![step17](step17.png)

Double click "PrefabLoader" to open blueprint editor:
![step18](step18.png)

Drag out "Event Begin Play" and add a "Load Prefab" node:
![step19](step19.png)

Drag "MyPrefabButton_Prefab" to "In Prefab" of "Load Prefab" node:
![step20](step20.png)

Connect "Get Owner" and "Root Component" node to "In Parent" of "Load Prefab" node:
![step21](step21.png)

Click "Compile" and then close the blueprint editor:
![step22](step22.png)

Select "ScreenSpaceUIRoot" actor in "World Outliner", and drag "PrefabLoader" to it's component stack:
![step23](step23.png)

Hit play, notice a prefab button is created:
![step24](step24.png)

Notice the button's color become white, because it is override by UIButton component, now let's modify the prefab to fix it.

#### 6. Modify prefab.
Exit play mode by click stop button. Select "ScreenSpaceUIRoot" actor, drag "MyPrefabButton_Prefab" to viewport, so that will create the prefab instance.
![step25](step25.png)

Select "MyPrefabButton" actor, select "UIButton" component. UIButton use "ColorTint" on "Transition" property, it will override the TransitionActor's color with "Normal Color":
![step26](step26.png)

Change the "Normal Color" to red, notice the button in viewport become red too:
![step27](step27.png)

Right click on the prefab icon, and choose "Apply Prefab", so that the prefab asset is modified:
![step28](step28.png)

Right click on the prefab icon, and choose "Delete This Prefab Instance", that will delete the prefab instance:
![step29](step29.png)

Now hit play, see the loaded button have a red color:
![step30](step30.png)


*See Prev [LGUIFont](../Font/index.md)* | *[MainPage](../../index.md)*