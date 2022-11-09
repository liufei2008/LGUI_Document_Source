## 3.2.15
#### NewFeature:
New parameter *FallbackFontArray* for LGUIFontData: If can't find character in current font, then will search it in *FallbackFontArray* and render it.  
New function *LoadPrefabWithReplacement* for LGUIPrefab, allow us to replace some assets of classes before load a prefab and keep parameter reference. eg: replace parent class with sub class so they can use same prefab.  
New type LGUIPrefabVarient for LGUIPrefab: Use existing prefab as base object, and do some parameter override; You can select existing prefab in content browser and right click it to open menu, and select Create.  
New parameter *RestrictNavigationArea* for UICanvasGroup: For navigation input select, restrict navigation select area so always cycle inside children of this UI node.  
#### Fix:
Fix bug: WorldSpace-LGUI-Renderer get wrong uv coordinate when sample depth texture.  
Fix bug: *Replace This With* break hierarchy index.  
Fix bug: PrefabEditor viewport, click to select now ignore inactive UI element.  
Fix bug: Delete sub prefab in PrefabEditor then undo it, will lose sub prefab reference.  
Fix bug: Select multiple UIItem then anchor editor will go wrong.  
Fix bug: Sub prefab not recognize some parameter change.  
Fix crash: Crash if LGUIComponentReference lose *TargetComp* reference.  
Fix bug: 3D UI rendering wrong when LGUICanvas's *PixelPerfect* mode is on.  
Fix bug: UIRecyclableScrollView not clear cells when data count is 0.  
Fix bug: LGUICanvas draw in wrong order when: Child canvas set inactive and after a while set to active.  
Fix bug: Wrong calculation on UISizeControlByAspectRatio and UITexture with UVRectControlMode.  
#### Improvement:
Add more function for UISelectableComponent.  
Click in PrefabEditor to select UI element, if mouse not moved, then next click will cycle select UI elements under mouse pointer.  
PrefabEditor's outliner can keep actor's unexpend state.  
Prefab-override-parameter now can do apply or revert parameter on sub prefab's single selected actor.  
Show a hint text if there are multiple layout control same anchor value.  
UICanvasGroup's alpha now can control RichText color's alpha value.  

## 3.2.14
#### NewFeature:
Support for Linux dedicated server build.  
Editor "eye" toggle now can control UI element's *IsUIActive* property.  
New parameter *UVRectControlMode* for UITexture, allow us to automatically set *UVRect* parameter to keep texture's aspect ratio and fit in UITexture element.  
New parameter *UseInteractionBlock* for UIDropdown, for decide if we need to create a interaction blocker when open option list.  
New function *SetItemCustomDataFunction* for UIDropdown, allow us to customize option-list item.  
New parameter *MultiLineSubmitFunctionKeys* for UITextInput, use the key combine with "Enter" key for multi-line mode submit.  
New function *RepeatCall* for LTween, allow us to call a function repeat repeatedly with an interval time.  
New input type *Alphanumeric* & *EmailAddress* for UITextInput.  
New parameter *DisplayType* for UITextInput, allow us to use password display. This parameter is split from *InputType*, so we can verify our input for password too.  
#### Improvement:
Prefab thumbnail rendering improvement.   
#### Fix:
Fix bug: Blueprint inherit LGUILifeCycleBehaviour not call Awake event.  

## 3.2.13
#### NewFeature:
New function *ScrollTo* for UIScrollView. This function can scroll the scrollview to specific child. Same function added on UIRecyclableScrollView with name "ScrollToByDataIndex".  
New parameter *AutoActivateInputWhenNavigateIn* for UITextInput. This can active input when navigate in UITextInput.  
New function *ActivateNavigationInput* for LGUIEventSystem, allow us to activate navigation input from c++ or blueprint.  
New function *SetPointerInputType* for LGUIEventSystem, allow us to change input type to Pointer or Navigation.  
#### Fix:
Fix bug: Get wrong actor label when use LGUI to duplicate or paste actor.  
Fix bug: UITextInput's *IgnoreKeys* property not working in UE5 and UE4.27.  
Fix bug: UITextInput's details panel have wrong order with navigation parameters.  
Fix bug: UITextInput can copy or cut password.  
Fix bug: If set LGUIComponentReference in code, then we can't get value from it.  
#### Change:
When turn off *PreserveHierarhyState* in LGUI-Tools menu, LGUIEditorLevelDataStorageActor will also be deleted.  
InputChangeDelegate move from LGUIPointerInputModule to LGUIEventSystem.  
#### Improvement:
Optimize LGUIPrefab's thumbnail, size property will also take effect on thumbnail.  
LGUIPrefabSequence: Click on actor in sequence can also select actor in outliner and level editor.  

## 3.2.12
#### Fix:
Fix bug: BlendDepth get wrong uv coordinate when sample depth texture, when choose different graphic scalability.  
Fix bug: Can't use LGUIPrefab as blueprint variable.  
Fix bug: LGUILifeCycleBehaviour could miss calling Awake/OnEnable/Start if not IsUIActive at first time.  
#### Change:
Add some LTween animation function to UI element.  
LGUIScreenSpaceRaycaster *depth* parameter default is 1000, much bigger then LGUIWorldSpaceRaycaster.  
Default LGUIPrefab in LGUI's content folder will not package in game.  
SDFFont: Move ObjectScale parameter to shader code, incase the parameter not update when just scale UIText object.  
If we put LGUIPrefab asset in a folder named *EditorOnly*, then the prefabs will not be packaged in game.  
#### NewFeature:
UIRecyclableScrollView can use LGUIPrefab as CellTemplate.  
LTween now use GameInstanceSubsystem to manage all the tweeners, so cross level tween animation is good to go.  
UIPostProcess get new parameter *MaskTextureUVRect*, so we can have more control on mask texture.  

## 3.2.11
#### Fix:
Fix bug: Nested prefab may lose object reference due to actor deserialize order.  
Fix crash: Crash when duplicate sub prefab.  
Fix bug: UITextInput, when hold down a key and press other keys, then input value is always the first key's value.  
Fix bug: Reparent UI element could get wrong rotation and scale value.  
#### NewFeature:
UIRecyclableScrollView: New function *GetUserFriendlyCacheCellList* can return cell list with user-friendly order.  

## 3.2.10
#### Fix:
Fix crash: Crash when create prefab in UE5 OpenWorld.  
Fix bug: Duplicated actor disappear when hit play.  
Fix bug: Wrong render order caused by sub-prefab.  
#### NewFeature:
Add *MaxHeight* property for UIDropdownComponent, so we can set max height of the options list.  
PrefabEditor now can delete RootAgent's LGUICanvas component, LGUI will mark it after hit *Apply*. Next time open the PrefabEditor, the LGUICanvas component will not create for RootAgent. This is useful when make a root canvas as prefab.  
#### Change:
UIRecyclableScrollView now don't need to change element's pivot.  
UIRecyclableScrollView.GetCellItembyDataIndex function parameter change.  

## 3.2.9
#### NewFeature:
PrefabEditor now support drag-drop to create Actor and StaticMesh.  
UIRecyclableScrollView now support *Space* and *Padding* parameter, and some new functions.  
#### Fix:
Fix bug: When put a LGUILifeCycleBehaviour (not UI behaviour) on a UI object, the OnEnable and OnDisable will not work when UI's IsUIActive changes to true or false.  
#### Modify:
Replace some check(0) as PrintStackTrace, to prevent crash and get the error message.  
#### Change:
Sub prefab's default overrided parameter now only contains hierarchy index, ActorLabel and AnchorData is removed.  

## 3.2.8
#### Fix:
Fix UIText wrong rendering caused by layout.  
#### PerformanceUpgrade:
UIText will not build all geometry if only color change.  
#### Change:
Add LGUINavigationInterface as replacement of UISelectable's OnNavigate.  

## 3.2.7
#### Fix:
Fix bug that cannot drag prefab to level and create actor.  

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
Coordinate system: from Unity-like (x-right, y-up, z-forward) to UE-like (x-forward, y-right, z-up) coordinate system.  
Color property: UIItem.Widget.Color moved to UIBaseRenderable.Color.
UICanvasGroup: Handle children UI element's opacity and interactable.
Anchor system: LGUI3 use AnchorMin/AnchorMax/AnchoredPosition/SizeDelta anchor system, just like Unity's, clean and predictable.  
Name redirect: eg. LGUIDrawableEvent to LGUIEventDelegate, AwakeBP to ReceiveAwake, StartBP to ReceiveStart, XXXBP to ReceiveXXX. Blueprint can automatic convert with no extral work, C++ can check LGUI/Config/DefaultLGUI.ini to see all these changes.  
