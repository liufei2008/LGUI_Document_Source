## 3.1.6
#### Modify:
Cleanup code and fix some bugs for UE5.  
#### NewFeature:
PrefabEditor now can restore RootAgent actor's size and render mode.  

## 3.1.5
#### NewFeature:
ClipTexture now support UI's LineTrace.  
#### Fix:
Fix crash when multiple user editing on LGUIEventDelegate.  
SetSprite could have no effect in some condition.  
UIPolygon and UI2DLineRendererBase my not update as desired.  
UIRoundedLayout wrong coordinate.  
Nested LGUICanvas may result in soring issue.  

## 3.1.4
#### NewFeature:
Officially support MacOSX and IOS!  
Add *SetCanvas* blueprint function for LGUIRenderTargetGeometry.  
#### Fix:
Fix linux compile error.  
Fix black screen on android with vulkan, caused by wrong RenderTargetActions.  
Fix UIText and UISprite atlas packing error in some specific case, which can result in misplaced text character or sprite.  
Fix PostProcess clip error.  
#### Modify:
Strip K2Node from LGUIEditor to LGUIK2Nodes module.  

## 3.1.3
#### NewFeature:
LGUICanvas RenderTarget mode now production ready! With LGUIRenderTargetGeometrySource and LGUIRenderTargetInteraction components, we can make curved UI for VR!  
#### PerformanceUpgrade:
Directly render to backbuffer, so we can save two RenderTarget and two CopyRenderTarget. If android GLES3.1 and we need some LGUI's prostprocess effects (UIBackgroundBlur & UIBackgroundPixelate), we need to check "ProjectSettings/Platforms/Android/Build/Support Backbuffer Sampling on OpenGL".  

## 3.1.2
#### NewFeature:
LGUICanvas can prevent drawcall batch if reach max vertex count.  
LGUIPrefabSequence can fix missing bad track reference, based on actor label and actor hierarchy.  
#### Fix:
LGUIPrefab: Add more check and hint to prevent crash when missing some class reference.  
UIScrollbar: Wrong value when click UIScrollbar's background area.  
#### PerformanceUpgrade:
AutoBatch now take less cpu resource, check [this article](https://blog.csdn.net/lf2007hf/article/details/123529163).  

## 3.1.1
#### NewFeature:
LGUIPrefab compatible with UE5.  
Add *SelectorOffset* property for UIEffectTextAnimation, make it easier for LGUIPrefaSequence animation.  
#### Fix:
Crash if missing some class reference on LGUIPrefab, now a hint message-box will popup.  
Crash when rename LGUIPrefabSequence's animation.  
Missing track when rename LGUIPrefabSequence's animation.  
#### Modify:
**Remove MSAA**, because not work as intended.  
Change some blueprint function of PrefabSequenceComponent.  

## 3.1.0
#### Improvement:
Modify UI geometry generation, now the update process is simple & easy & fast. Easy for blueprint to extend custom UI element, easy for blueprint to implement custom GeometryModifier.  
#### NewFeature:
**LGUIPrefabSequence** is out! Easy to make animation with UE's sequence tool, not just for UI objects, all objects that can stay in LGUIPrefab are good to use.  
UISpriteData and UIFontData editor can pick and typein packingTag.  
Add "Enable" property for UIGeometryModifier (UIEffectShadow/ UIEffectOutliner/ UIEffectLongShadow...), so we can enable or disable the effect by set this value.  
Add blueprint event "ReceiveModifyUIGeometry" for UIGeometryModifier, so we can make our UIEffectXXX in blueprint.  
#### Fix:
Fix bug: ULGUICanvasScaler.ConvertPositionFromLGUICanvasToViewport calculation wrong.  
LGUIPrefab system, wrong attachment/detachment message.  

## 3.0.2
#### NewFeature:
If multiple LGUILifeCycleBehaviour in same prefab, then these scripts will execute by actor's hierarchy order; This can make the execution predictable.  
#### Fix:
Fix bug: When load nested prefab, sub prefab sometimes not attach to the correct parent.  

## 3.0.1
#### NewFeature:
WorldSpace-LGUI Renderer support UE5.  
PrefabSystem support nested sub-object.  
#### Fix:
Fix bug: LGUILifeCycleBehaviour.SetCanExecuteUpdate not wroking.  

## 3.0.0
#### NewFeature:
Use hierarchy order for UI element's render order, no noring "Depth" property anymore.  
Prefab workflow upgrade: Standalone prefab editor, support **Nested Prefab**, support property redirect, faster load speed. (Many thanks to "马志愿", great inspire)  
#### Change:
Coornidate system: from Unity-like (x-right, y-up, z-forward) to UE-like (x-forward, y-right, z-up) coordinate system.  
Color property: UIItem.Widget.Color moved to UIBaseRenderable.Color.
UICanvasGroup: Handle children UI element's opacity and interactable.
Anchor system: LGUI3 use AnchorMin/AnchorMax/AnchoredPosition/SizeDelta anchor system, just like Unity's, clean and predictable.  
Name redirect: eg. LGUIDrawableEvent to LGUIEventDelegate, AwakeBP to ReceiveAwake, StartBP to ReceiveStart, XXXBP to ReceiveXXX. Blueprint can automatic convert with no extral work, C++ can check LGUI/Config/DefaultLGUI.ini to see all these changes.  
