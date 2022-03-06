## Use custom material for UI elements
LGUI can use custom material to change the look of our UI elements.  
LGUI support *Surface* material domain.  

#### Examples 1, use a emissive material to make our text glow.  
Note: Glow is a world space post process effect, so only world space UI can do this, and post process setting must enable glow.  
1. First of all, copy material *LGUI_Standard* from *LGUI Content* folder (You may need to check *Show Plugin Content* if it is not visible). And paste it to your project content directory.  
2. Change the material node like the image below:  
![](1.1.png)
3. Select a UIText, and drag the material you just modified to *Custom Material* slot:  
![](1.2.png)
Now the text should look glow:
![](1.3.png)

#### Example 2, use texture to maskout our sprite.  
Note: UISprite render a UISpriteData. UISpriteData contains the info of a small area from a packed atlas texture.  
1. First of all, copy material *LGUI_Standard* from *LGUI Content* folder (You may need to check *Show Plugin Content* if it is not visible). And paste it to your project content directory.  
2. Change the material node like the image below (note the mask texture's *TexCoord[1]*, and don't forget to select a mask texture for *Texture Sample* node):  
![](2.1.png)
3. Select a UISprite, and drag the material you just modifyed to *Custom Material* slot:  
![](2.2.png)
4. Now the UISprite look not right, because we have not tell LGUI to setup the data for *TexCoord[1]*. Select LGUICanvas component from WorldSpaceUIRoot actor, in the *Additional Shader Channels* property, check on *UV1*.  
![](2.3.png) 
Now the result should be good:  
![](2.4.png)


#### Example 3, use rect-clip and texture-clip to clip our sprite.
Let's start with the result of *Example 2*.
1. Open the copied material, find *LGUIRectClip* node from *LGUI Content* folder, and drag it to material editor window:
![](3.1.png)
2. Break original Opacity link, and link like the image below:
![](3.2.png)
3. Select LGUICanvas component from WorldSpaceUIRoot actor, change *Clip Type* to *Rect*:
![](3.3.png)
4. Now drag the UISprite actor to the edge of WorldSpaceUIRoot, see it is clipped:
![](3.4.png)
5. texture-clip is the same thing, just repace the *LGUIRectClip* with node *LGUITextureClip*:
![](3.5.png)
