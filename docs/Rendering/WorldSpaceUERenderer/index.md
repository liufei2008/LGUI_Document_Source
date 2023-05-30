# World Space - UE Renderer

**World Space - UE Renderer** use engine's default render pipeline to render UI elements. By default UI elements will be treated as transparent meshes, so the UI will be affected by post-process.  

## Create
Select "LGUI Editor Tools"->"Basic Setup"->"World Space - UE Renderer":
![](./1.png)

Then a "WorldSpaceUIRoot_UERenderer" will be created:
![](./2.png)

## Use lighting and normalmap
Prepare a normal map:
![](./NormalMap.png)

Drag the normal map to content folder:
![](./3.png)

Delete "Frame" and "Info" actor, right click the down arrow button and choose "Create UI Element"->"UISprite", and name it "NormalMapUI":
![](./4.png)

Create a new material, name it "NormalMapUIMat", make it a very simple material like this:
![](./5.png)
**UISprite take texcoord0 as packed atlas uv**, so we use texcoord1 as uv input.  
**UISprite will use the atlas texture and set to MainTexture parameter in material**.

Select "NormalMapUI" actor, find "Custom Material" property, and drag the "NormalMapUIMat" to "Custom Material":
![](./6.png)

Create a light in the level if these is no one present:
![](./7.png)

The "NormalMapUI" looks not correct in the viewport. Because by default, LGUI only set the first texcoord and no normal or tangent data, so we need to tell LGUICanvas to provide more data, by check the "Additional Shader Channels" flags:
![](./8.png)

Now adjust light angle and position, see the bumped surface on UI:
![](./9.png)

Check [SampleProject](https://github.com/liufei2008/LGUISampleProject) on github, you will find more infomation about lighing on 3D UI:
![](./10.png)