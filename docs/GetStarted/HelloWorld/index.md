# Hello LGUI
In this section, we will create a simple UI that show "Hello LGUI" step by step.  
![icon](./icon.png)

## Create Screen Space UI
Create a new default level, click "LGUI Editor Tools"->"Basic Setup"->"Screen Space UI":  
![step1](./hello_world1.png)

Then a preset screen space UI should appear:  
![step2](./hello_world2.png)

## Create a button
Select ScreenSpaceUIRoot, right click on the down arrow in the "LGUI" column:  
![step3](./hello_world3.png)

Click "Create UI Element"->"UIButton":  
![step4](./hello_world4.png) 

Then a button will appear in viewport and outliner:  
![step5](./hello_world5.png)

## Adjust button
Select "Button" in Outliner, change the "PosZ" to -120, this will move the button a little off the center in vertical direction:  
![step6](./hello_world6.png)

## Add OnClick event
Select "UIButton" component on "Button" actor, find "On Click()" property and click the "+" button:  
![step7](./hello_world7.png)

The "On Click" is a LGUIEventDelegate (see [LGUIEventDelegate](./../LGUIEventDelegate/index.md) page), it has four parameters(Actor, Component, Function, Parameter):  
![step8](./hello_world8.png)

In "Actor" parameter, select "Info" object from World Outliner:  
![step9](./hello_world9.png)

Click "Component" area and select "UITextComponent":  
![step10](./hello_world10.png)

Click "Function" area and select "SetText(Text)":  
![step11](./hello_world11.png)

Now the "Parameter" area become a text input block, type in "Hello LGUI":  
![step12](./hello_world12.png)

Hit Play, then move you mouse to the button, you will see it highlighted:  
![step13](./hello_world13.png)
Then click the button, you will see the text change:  
    ![step14](./hello_world14.png)
