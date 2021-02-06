## Custom Button
In this section, we will learn how to customize our button using UISprite.
Before this, you should follow [HelloWorld](../HelloWorld/index.md) section to create a default button.
The default button is a little ugly, we can use a nicer looking texture instead. 

#### 1. Prepare a sprite texture.
Use photoshop or any other app to create a image, or use this image:
![step1](Button.png)

Drag the image to UE4 content folder, name it to "Button":
![step2](step2.png)

#### 2. Create UISpriteData.
Select "Button" asset, right click on it and choose "LGUISprite"->"Create Sprite":
![step3](step3.png)

Then a LGUISpriteData asset named "Button_Sprite" will be created:
![step4](step4.png)

Double click on "Button_Sprite" and open a UISpriteDataEditor:
![step4_1](step4_1.png)

Change "Border Left" and "Border Top" to 14, "Border Right" and "Border Bottom" to 15:
![step4_2](step4_2.png)
Close the UISpriteDataEditor.

#### 3. Prepare a LGUI ScreenSpaceUI.
Follow the [HelloWorld](../HelloWorld/index.md) section to create a base ScreenSpaceUI:
![step5](step5.png)

#### 4. Create UISprite and UIText.
Select "ScreenSpaceUIRoot" actor, right click on the arrow button and choose "Create UI Element"->"UISprite", this will create a UISprite actor:
![step6](step6.png)

Rename the created UISprite actor to "MyButton":
![step7](step7.png)

Select "MyButton" actor, drag "Button_Sprite" asset to "Sprite" property, see the change in viewport:
![step8](step8.png)

Select "MyButton" actor, right click on the arrow and choose "Create UI Element"->"UIText", this will create a UIText actor:
![step9](step9.png)

Rename the created UIText actor to "MyButtonText", and change "Depth" to 1, "Color" to black, "Text" to "I'm a button", "Size" to 24, "Font Style" to "Bold":
![step10](step10.png)

#### 5. Adjust button size.
Select "MyButton" actor, change "Width" to 240, "Height" to 60:
![step11](step11.png)

Select "MyButtonText" actor, click on the down arrow in "Anchors", then a AnchorSelector will popup:
![step12](step12.png)

Hold "Ctrl" button on keyboard and click the right bottom button in AchorSelector, see change in viewport:
![step13](step13.png)

#### 6. Add UIButton component.
Select "MyButton" actor, click "+Add Component" and add a "UIButton" component:
![step14](step14.png)

Select "UIButton" component you just created, change the "Transition" to "ColorTint":
![step15](step15.png)

Click on the left arrow of "Transition", this will expand the transition area:
![step16](step16.png)

Drag "MyButton" actor to "Transition Actor":
![step17](step17.png)

#### 7. Enable RaycastTarget.
Select "MyButton" actor, select "UISprite(Inherited)" component, click "Show Advanced" arrow button:
![step18](step18.png)

Check "Raycast Target" property:
![step19](step19.png)

#### 8. Add button event:
Select "MyButton" actor, select "UIButton" component, find the "On Click()" property and click the "+" button:
![step20](step20.png)

Set the event like this:
![step21](step21.png)

#### 9. Play and click the button
Now hit play and move your mouse over the button, then click the button, see the change in viewport:
![step22](step22.png)



*See Prev [HelloWorld](../HelloWorld/index.md)* | *See Next [LGUIFont](../Font/index.md)* | *[MainPage](../../index.md)*