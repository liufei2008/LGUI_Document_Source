# Get actor or component inside prefab

This is for someone who may not famaliar with prefab workflow.  

We create a UI prefab with name "TestPrefab", inside the prefab should be like this:  
![](./1.png)  
"Root" is a UIContainer actor, "Button" is attached to "Root" and "Text" is attached to "Button".
If we want to modify "Text" object, how to get a reference of it?
There are two ways to do it, lets do it step by step.

First we should load it with a ActorComponent, so create a ActorComponent with name "PrefabLoader", then link "LoadPrefab" node to "BeginPlay", and assign our prefab "TestPrefab" to it, this means prefab will be loaded when hit play:  
![](./2.png)

## Use ActorComponent as mediator
Create another ActorComponent, this time we use LGUILifeCycleBehaviour as base class, name the component "Mediator":  
(it is recommanded to use LGUILifeCycleBehaviour in prefab)  
![](./3.png)

Add a variable with type "UITextActor", name "Text", and check on "Instance Editable":  
![](./4.png)

Open "TestPrefab" and drag "Mediator" to "Root" actor:  
![](./5.png)

Select "Mediator" component on "Root" actor, check on the lock button on "Details" panel, then drag "Text" actor to the variable "Text":  
![](./6.png)

After apply the prefab, the variable "Text" should successfully save the actor reference.

Open "PrefabLoader" component, drag out "Return Value" from "Load Prefab" node and select "Get Component by Class" node, and select "Mediator" in "Component Class":  
![](./7.png)

Drag out "Return Value" from "Get Component by Class" node, then you will find the "Text" variable, this is the "Text" actor reference, just do what you need with it:  
![](./8.png)

## FindChildByDisplayName

In your "PrefabLoader", drag out "Return Value" from "Load Prefab" node and cast it to "UIBaseActor":  
![](./9.png)

Drag out "As UIBase Actor" and select "Get UIItem" node:  
![](./10.png)

Drag out "Return Value" from "Get UIItem" node and select "Find Child by Display Name" node, typein "Button/Text" in "In Name" parameter:  
![](./11.png)

Drag out "Return Value" from "Find Child by Display Name" node and cast it to "UIText":  
![](./12.png)

The "As UIText" is the object you need.
**NOTE** "FindChildByDisplayName" can only work with LGUI's UI element.  