## 3.2.6
#### Fix:
Fix crash when add LGUIRenderTargetGeometrySource component to a actor.  
#### Change:
Navigation input now relate to LGUIPointerEventData.  
Default UISelectable for navigation input now return most left-top one.  

## 3.2.5
#### PerformanceUpgrade:
Optimize raycast check on UIItem.  
#### Fix:
Fix object reference with PrepareDuplicateData node.  
Fix spawn UIItem take too much time in UE5 editor.  

## 3.2.4
#### NewFeature:
Add a optimized version of DuplicateActor when duplicate a same actor multiple times, check *LGUIBPLibrary::PrepareDuplicateData* node.   
Add some helper editor button for LGUIEventDelegate.  
#### Fix:
Fix a crash when prefab serialize a invalid actor.  
Fix SDF font rendering issue in different camera fov and projection type.  
Fix a crash when LGUIEventDelegate(float) in UE5.  
#### PerformanceUpgrade:
Optimize UIItem's intialization, save time when spawn any UI element.  

## 3.2.3
#### Fix:
Fix sub-prefab's root actor's data error.  
Fix crash when copy actor with sub-prefab.  
Fix wrong hierarchy index with sub-prefab's root actor.  

## 3.2.2
#### NewFeature:
Enable **DepthTest** for ScreenSpaceUI and RenderTargetUI!  
#### Fix:
Fix crash caused by UIStaticMesh.  
Fix update issue of UIStaticMesh.  
Fix crash of LTween when MaterialInstanceDynamic have no world.  
Fix crash when reset scrollbar parameter of UIScrollView.  
For UE5, fix sprite become transparent in editor sometimes, this is because UE5 use async texture compile.  

## 3.2.1
#### NewFeature:
ScreenSpaceUI now support normal and tangent property, this is very useful for UIStaticMesh.  
Add new depth-test mode for LGUICanvas's WorldSpace-LGUIRenderer mode, use depth buffer to direct test depth.  
#### Fix:
Fix android gles flipped face.  
LGUIRenderTargetGeometrySource not create geometry.  
Fix crash caused by UIStaticMesh.  
Fix crash caused by LGUIPrefabEditor when perform GC at BeginPlay.  
Fix package issue for UE5 because of old LGUIPrefab version.  
#### Modify:
For UE5, change UIScrollbar's event from float to double. Same on UISlider.   
#### PerformanceUpgrade:
Optimize LGUI's vertex data.  

## 3.2.0
#### NewFeature:
**SDF(SignedDistanceField) text rendering** now ready to use!  
LGUIPrefabSequence now support curve editor.  
#### Fix:
Fix crash when undo in LGUIPrefabEditor (with LGUIPrefabSequence editor window opened).  
#### PerformanceUpgrade:
Optimize data passed from game-thread to render-thread, mesh update become more efficient.  

## 3.1.9
#### NewFeature:
ScreenSpaceUI can draw selection helper frame, with a toggle box in *LGUI Tools* menu.  
Mobile can use external joystick input, just like standalone platform.  
Add visualization arrow for UISelectable navigation.  
#### Fix:
Fix crash when create custom font.  
Fix crash when delete LGUIPrefabHelperActor, add some hints.  
Remove extra wrong vertex data in UIEffect.  
Fix UIText font size change unnormally.  
Fix navigation input get wrong UISelectable.  
Fix *Active Viewport as LGUI Preview* not working.  
Fix UE5 LGUIEditor's outliner can't modify hierarchy or select multiple.  
Fix UE5 LGUIPrefabSequence crash when add new animation.  
#### Modify:
Remove *DefaltTraceChannel* in LGUI Settings.  

## 3.1.8
#### NewFeature:
**UIRecyclableScrollView** ready now.  
UIScrollView add new function *GetVelocity* *SetVelocity* *GetScrollProgress*, add new property *DecelerateRate* *OutOfRangeDamper*.  
#### Fix:
Fix LGUICanvas sorting error when render type is WorldSpace-LGUIRenderer.  
#### Modify:
Remove ILGUIPointerDownUpInterface from UIScrollView.  

## 3.1.7
#### NewFeature:
UIPostProcess can render *MaskTexture* as sliced.  
#### Fix:
Fix crash when create child LGUICanvas or UIPostProcess.  

## 3.1.6
#### Modify:
Cleanup code and fix some bugs for UE5.  
#### NewFeature:
PrefabEditor now can restore RootAgent actor's size and render mode.  
#### Fix:
Fix crash when add new ActorComponent to sub prefab's actor then apply, now popup a hint message.  

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
