---
sidebarDepth: 4
---

# LGUI 3.x

## 3.3

### 3.3.5
#### NewFeature:
Add *ControlChildWidth* and *ControlChildHeight* property for UIHorizontalLayout and UIVerticalLayout.  
#### Fix:
Crash: When CurveEditor is opened and then close PrefabEditor, this will crash editor.  
Crash: Prefab trying to serialize transient actor.  
Bug: SDF font not display in UE5.2 on platform android with vulkan backend.  
Bug: UIProceduralRect when *RadialFill* angle is 360, there is a thin line remained.  
Bug: UIProceduralRect when *BorderWidth* is 0, there is a thin line rect remained.  
Bug: UIProceduralRect when *SoftEdge* is checked, mesh is not updated correctly.  
Bug: UIVerticalLayout calculate *WidthFitToChildren* wrong.  
Bug: UE5.2 prefab editor cannot select or multi select actor after select a component.  
Bug: If use prefab editor, when close UE editor, the UE editor will crash because subsystem nullptr.  
Bug: If enable *PreserveHierarchyState* in UE5.1 and UE5.2, editor will crash when save new level.  
#### Change:
Add DEPRECATED_MACRO for LTween's modifications in version 3.3.4.  
When do LGUI's base setup (Create screen space or world space UI root), LGUI will check trace channel, and will give a hint if there is no valid trace channel for LGUI.  
Add a simple *VirtualCall* function for LTweenBPLibrary.  
Change some enum's name with prefix "E".  
Rename LGUIIndexType to LGUIMeshIndexBufferType.  
Skip *EditorOnly* actor and object.  

### 3.3.4
#### NewFeature:
New custom clip object LGUICanvasCustomClip_RoundedRect, allow us to clip by rectangle with rounded corner, just like UIProceduralRect.  
UIProceduralRect now support sprite as body's texture, this can give us better control on drawall.  
UIProceduralRect now support rounded corner raycast.
#### Change:
UIProceduralRect adjust inner-shader and outer-shadow's angle parameter to fit photoshop's.  
#### Fix:
Bug: Material error in UE5.0.  
Bug: ScreenSpaceUI verticle flipped on platform android with gles backend.  

### 3.3.3
#### NewFeature:
New UI element type **UIProceduralRect**, allow us to create procedural rect shape without any texture. Check video: [Bilibili](https://www.bilibili.com/video/BV168411D784/) [Youtube](https://youtu.be/d_qbTcnOxxA)  
#### Change:
Blueprint's variable will only serialize in prefab if *InstanceEditable* is checked.  
Change most UObject variable pointer to TObjectPtr.  
#### Fix:
Crash: PrefabEditor crash because invalid UObject in "AddOneShotTickFunction".  
Crash: Load prefab in OpenWorld.  
Crash: Override parameter in sub-prefab but the parameter not exist anymore (change name or removed).  
Bug: LGUIPrefabSequence is playing at twice the speed.  
Bug: Wrong lookat and orbit point in PrefabEditor.  
Bug: Apply or revert override parameter on prefab, but not executing PostConstructionScript.  
Bug: LTweenVector4Getter/Setter use Vector3 as parameter.  
Bug: UIScrollViewWithScrollbar, when *ScrollbarVisibility* is *Permanent*, Scrollbar not auto adjust size when content size change.  

### 3.3.2
#### NewFeature:
New rich-text style mode **LGUIRichTextCustomStyleData**, allow us to create custom style within sigle tag.  
"World Space LGUI Renderer" now support SceneCapture's *HiddenActors* and *ShowOnlyActors* property.  
Add *Double* parameter for LGUIPlayTween.  
#### Change:
Remove *SupportParameterType* serialization from LGUIEventDelegate. So when we use LGUIEventDelegate, we must set the parameter type by default or in constructor, and blueprint should use preset parameter of LGUIEventDelegateXXX (like LGUIEventDelegateFloat, LGUIEventDelegateInt ...).  
Enable LGUIEventDelegate_Double for UE5.  
#### Fix:
Crash: Drag material to StaticMesh of LGUIRenderTargetGeometrySource.  
Bug: When use LGUIPrefabSequence in level, if we delete a animation it actually still exist.  
Bug: LGUIRenderTargetGeometrySource material error.  
Bug: LGUIRenderTargetGeometrySource not update mesh in editor.  
Bug: LGUI with render mode of "World Space LGUI Renderer" and "Screen Space Overlay" also render to SceneCapture2D.  
Bug: "World Space LGUI Renderer" calculate matrix wrong, result in wrong UI render transform when orbit camera in editor.  
Bug: UI2DLineChildrenAsPoints wrong coordinate.  
Bug: Change LGUICanvas's RenderMode and undo it, result in wrong render order.  
Bug: Missing sub preafb when save prefab, caused by LGUI version 3.3.1.  

### 3.3.1
#### NewFeature:
UITextInputComponent now support *RichText*, so we can something like emoji input in text message.  
New parameter *FaceIndex* for LGUIPointerEventData, represent line-trace-hit face on static mesh in world space.  
#### Improvement:
UISpriteSheetTexturePlayer and UISpriteSequencePlayer now can preview in editor.  
#### Fix:
Crash: When there are multiple prefab instance in level editor, and one of them is referencing actor which is not belongs to the prefab, crash.  
Bug: UISelectable->FindDefaultSelectable can cause infinite loop.  
Bug: LGUIRenderTargetGeometrySource can't receive input event, because wrong collision data.  
Bug: Add layout component in editor not update layour immediately.  
Bug: With *PixelPerfect* is on, and scale UI element, the UI element's bounds calculation will go wrong, can cause wrong drawcall batch.  
Bug: Add Layout component in editor but not apply the layout effect immediately.  
Crash: When prefab system want to serialize or duplicate a actor, if the actor is a transient one, then crash.  

### 3.3.0
#### NewFeature:
New parameter *AutoUpdate* for LGUIPrefab, so prefab in level editor can auto update to latest version.  
LGUIPrefabSequence now support material parameter animation on *CustomUIMaterial*.  
UIItem now can adjust anchor parameter inside viewport.  
Add *Custom* type to *ELGUICanvasClipType* for LGUICanvas, so we can implement our own type of clip.  
New parameter *ReadOnly* for UITextInput, allow us to select and copy the text content and not edit on it.  
Add *Toggle Actors IsSpatiallyLoaded* function for *LGUI Editor Tools*, allow us to change *IsSpatiallyLoaded* property for selected actor and it's children. Only for UE5.  
Add *VisiblePixel* type to *EUIRenderableRaycastType* for UIBaseRenderer, so our mouse can click on UI element with the ability of ignore transparent pixel.  
New object type *LGUIStaticSpriteAtlasData* for static sprite atlas pack, support mipmap, support pixel hit test.  
Add *Custom* type to *ELGUITextInputType* and new object type *UUITextInputCustomValidation* for UITextInput component, allow us to do custom validation. This is meant to replace the old *CustomFunction*.  
Render mode of *RenderTarget* now can preview in editor.  
#### Fix:
Fix bug: When drag UIItem's anchor parameter, it will not immediately show the result.  
Fix bug: When add "Transform" track in LGUIPrefabSequence, the target's transform is reset to identity.  
Fix bug: Prefab in LevelEditor can't apply or revert property of object reference type.  
Fix bug: Can not replace object class by *LGUI Editor Tools*.  
Fix bug: *BlendDepth* not work in *WorldSpaceLGUIRenderer* mode with *Forward Shader* turn on.  
Fix bug: Change render mode to *WorldSpaceLGUIRenderer* in PrefabEditor not work.  
Fix bug: Render mode of *RenderTarget* color is wrong.  
Fix crash: Remove UIFlexibleGridLayoutElement cause crash.  
#### Change:
Remove some old LGUI2.x parameter, and *Convert from LGUI2.x to LGUI3.x* functions.  
Change LGUISDFFontData as LGUI's built-in feature, it was inside a seperate module before.  
LGUISceneOutlinerInfoColumn change name from "LGUIInfo" to "LGUI" in UE5.  
Rename LGUIAtlasData to LGUIDynamicSpriteAtlasData.  
Remove *PackingTag* property on Font.  
Cleanup, rename, combine some LGUI's built-in material assets, so some one could get *Failed to load '/LGUI/LGUI_Standard'* -like error, no worry because LGUI will find the object.  

## 3.2

### 3.2.22
#### Fix:
Fix crash: Play StandaloneGame in editor will crash because of GEditor is nullptr.  
Fix crash: When delete object in prefab editor, the prefab instance in level editor not clean up the object reference, and cause crash when create prefab next time.  
Fix crash: Create sub prefab in prefab editor, if not apply immediately then the parent prefab will not linked with sub prefab.  
Revert fix "WorldSpaceLGUIRender sometimes not render in editor", because it will make the render go unpredicatable (eg, newly created UI from prefab not render, change sprite and texture but still render old one).  

### 3.2.21
#### Fix:
Fix bug: UIText's rich text's begin tag disappear when turn off *RichTextTagFilterFlags*.  

### 3.2.20
#### NewFeature:
New parameter *RichTextTagFilterFlags* for UIText, allow us to switch on/off specific rich text tag.  
#### Fix:
Fix bug: UIRoundedLayout could cause update every frame.  
Fix bug: LGUICanvas may create a lot of useless LGUIMeshComponent.  
Fix bug: After delete LGUICanvas component from actor, child LGUICanvas not get new RootCanvas.  

### 3.2.19
#### NewFeature:
New object type **LGUIRichTextImageData**, allow us to use it in UIText, and render image and emoji in UIText. Check video: [bilibili](https://www.bilibili.com/video/BV1J84y1G7r7/?share_source=copy_web&vd_source=b22254760c9a0522c8caea62e5327c1d) [youtube](https://youtu.be/442vQkATYbU).  
#### Fix:
Fix bug: UIRoundedLayout calculate wrong position.  
Fix bug: LGUISDFFont could render with wrong size when first render a character.  
Fix crash: Select a none UI object and drag prefab to level, then the editor crash.  

### 3.2.18
#### NewFeature:
New tweener type **LTweenerSequence** for LTween, allow us to control a group of sequence as a single tweener. Check [doc here](../../LTween/Sequence/index.md).  
New function **Restart** for LTweener, allow us to restart a tween animation.  
New function **Goto** for LTweener, allow us to send the tween animation to specific time position.  
UISizeControlByAspectRatio and UISizeControlByOther now support animation.  
New parameter *UseChildrenScaleOnWidth* for UIHorizontalLayout, allow the layout to calculate children's size with it's scale value. But since I can't get callback or event when object's scale value change, I can't automatically make the layout dirty and update it, so we need to call layout's *MarkNeedRebuildLayout* function mannually.  
New parameter *UseChildrenScaleOnHeight* for UIVerticalLayout, same as UIHorizontalLayout.   
#### Improvement:
Add stop node for function *GetComponentInParent* *GetComponentInChildren* *GetComponentsInChildren*.  
#### Fix:
Fix bug: When turn on pixel-perfect mode, if UI object just change scale, then it will not render correctly.  
Fix bug: Set nullptr for LTweener's callback function will crash.  

### 3.2.17
#### Fix:
Fix bug: Custom material missing when drag UI element in editor.  
Fix bug: UITextInputComponent's composition input content not varified.  
Fix bug: Render order error caused by nested LGUICanvas.  
Fix bug: WorldSpaceLGUIRender sometimes not render in editor.  
Fix bug: UIScrollViewComponentWithScrollbarComponent, flip horizontal scroll value.  
#### Improvement:
Improve prefab in level editor.  
UILayout will not force change UIItem's anchor, unless the anchor is stretched.  
Improve editor performance caused by LGUIManagerActor trying to draw helper frame on UI elements.  
Allow multiple selection in PrefabEditor's viewport.  
#### NewFeature:
New overflow mode *HorizontalAndVerticalOverflow* for UIText, allow UIText to overflow horizontal until reach *MaxHorizontalWidth*, then overflow vertical.  
New parameter *OverflowType* for UITextInput, allow UITextInput to set input rect size in range.  
New parameter *KeepProgress* for UIScrollViewComponent, allow UIScrollView to keep progress value when size changed.  
New parameter *ConstantSizeType* for UILayoutElement, allow it to use UIItem's size as constant size.  
#### Change:
Remove *GetIgnoreLayout* interface function for ILGUILayoutElementInterface.  

### 3.2.16
#### Fix:
Fix bug: UI not render when enable ODSC (On Demand Shader Compiler).  
Fix bug: Wrong sort order in WorldSpaceUERender mode.  
Fix OnValueChange event type of UISlider and UIScrollbar in UE5.  
Fix bug: when change *IsUIActive* on sub prefab, parent prefab not update visibility of the sub prefab.  
#### Improvement:
Sub prefab will get different color in prefab editor's outliner, for easily identify.  
When drag-drop other prefab to create sub prefab in prefab editor, the newly created sub prefab actor will be fold in outliner.  

### 3.2.15
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

### 3.2.14
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

### 3.2.13
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
When turn off *PreserveHierarhyState* in *LGUI Editor Tools* menu, LGUIEditorLevelDataStorageActor will also be deleted.  
InputChangeDelegate move from LGUIPointerInputModule to LGUIEventSystem.  
#### Improvement:
Optimize LGUIPrefab's thumbnail, size property will also take effect on thumbnail.  
LGUIPrefabSequence: Click on actor in sequence can also select actor in outliner and level editor.  

### 3.2.12
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

### 3.2.11
#### Fix:
Fix bug: Nested prefab may lose object reference due to actor deserialize order.  
Fix crash: Crash when duplicate sub prefab.  
Fix bug: UITextInput, when hold down a key and press other keys, then input value is always the first key's value.  
Fix bug: Reparent UI element could get wrong rotation and scale value.  
#### NewFeature:
UIRecyclableScrollView: New function *GetUserFriendlyCacheCellList* can return cell list with user-friendly order.  

### 3.2.10
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

### 3.2.9
#### NewFeature:
PrefabEditor now support drag-drop to create Actor and StaticMesh.  
UIRecyclableScrollView now support *Space* and *Padding* parameter, and some new functions.  
#### Fix:
Fix bug: When put a LGUILifeCycleBehaviour (not UI behaviour) on a UI object, the OnEnable and OnDisable will not work when UI's IsUIActive changes to true or false.  
#### Modify:
Replace some check(0) as PrintStackTrace, to prevent crash and get the error message.  
#### Change:
Sub prefab's default overrided parameter now only contains hierarchy index, ActorLabel and AnchorData is removed.  

### 3.2.8
#### Fix:
Fix UIText wrong rendering caused by layout.  
#### PerformanceUpgrade:
UIText will not build all geometry if only color change.  
#### Change:
Add LGUINavigationInterface as replacement of UISelectable's OnNavigate.  

### 3.2.7
#### Fix:
Fix bug that cannot drag prefab to level and create actor.  

### 3.2.6
#### Fix:
Fix crash when add LGUIRenderTargetGeometrySource component to a actor.  
#### Change:
Navigation input now relate to LGUIPointerEventData.  
Default UISelectable for navigation input now return most left-top one.  

### 3.2.5
#### PerformanceUpgrade:
Optimize raycast check on UIItem.  
#### Fix:
Fix object reference with PrepareDuplicateData node.  
Fix spawn UIItem take too much time in UE5 editor.  

### 3.2.4
#### NewFeature:
Add a optimized version of DuplicateActor when duplicate a same actor multiple times, check *LGUIBPLibrary::PrepareDuplicateData* node.   
Add some helper editor button for LGUIEventDelegate.  
#### Fix:
Fix a crash when prefab serialize a invalid actor.  
Fix SDF font rendering issue in different camera fov and projection type.  
Fix a crash when LGUIEventDelegate(float) in UE5.  
#### PerformanceUpgrade:
Optimize UIItem's intialization, save time when spawn any UI element.  

### 3.2.3
#### Fix:
Fix sub-prefab's root actor's data error.  
Fix crash when copy actor with sub-prefab.  
Fix wrong hierarchy index with sub-prefab's root actor.  

### 3.2.2
#### NewFeature:
Enable **DepthTest** for ScreenSpaceUI and RenderTargetUI!  
#### Fix:
Fix crash caused by UIStaticMesh.  
Fix update issue of UIStaticMesh.  
Fix crash of LTween when MaterialInstanceDynamic have no world.  
Fix crash when reset scrollbar parameter of UIScrollView.  
For UE5, fix sprite become transparent in editor sometimes, this is because UE5 use async texture compile.  

### 3.2.1
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

### 3.2.0
#### NewFeature:
**SDF(SignedDistanceField) text rendering** now ready to use!  
LGUIPrefabSequence now support curve editor.  
#### Fix:
Fix crash when undo in LGUIPrefabEditor (with LGUIPrefabSequence editor window opened).  
#### PerformanceUpgrade:
Optimize data passed from game-thread to render-thread, mesh update become more efficient.  

## 3.1

### 3.1.9
#### NewFeature:
ScreenSpaceUI can draw selection helper frame, with a toggle box in *LGUI Editor Tools* menu.  
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

### 3.1.8
#### NewFeature:
**UIRecyclableScrollView** ready now.  
UIScrollView add new function *GetVelocity* *SetVelocity* *GetScrollProgress*, add new property *DecelerateRate* *OutOfRangeDamper*.  
#### Fix:
Fix LGUICanvas sorting error when render type is WorldSpace-LGUIRenderer.  
#### Modify:
Remove ILGUIPointerDownUpInterface from UIScrollView.  

### 3.1.7
#### NewFeature:
UIPostProcess can render *MaskTexture* as sliced.  
#### Fix:
Fix crash when create child LGUICanvas or UIPostProcess.  

### 3.1.6
#### Modify:
Cleanup code and fix some bugs for UE5.  
#### NewFeature:
PrefabEditor now can restore RootAgent actor's size and render mode.  
#### Fix:
Fix crash when add new ActorComponent to sub prefab's actor then apply, now popup a hint message.  

### 3.1.5
#### NewFeature:
ClipTexture now support UI's LineTrace.  
#### Fix:
Fix crash when multiple user editing on LGUIEventDelegate.  
SetSprite could have no effect in some condition.  
UIPolygon and UI2DLineRendererBase my not update as desired.  
UIRoundedLayout wrong coordinate.  
Nested LGUICanvas may result in soring issue.  

### 3.1.4
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

### 3.1.3
#### NewFeature:
LGUICanvas RenderTarget mode now production ready! With LGUIRenderTargetGeometrySource and LGUIRenderTargetInteraction components, we can make curved UI for VR!  
#### PerformanceUpgrade:
Directly render to backbuffer, so we can save two RenderTarget and two CopyRenderTarget. If android GLES3.1 and we need some LGUI's prostprocess effects (UIBackgroundBlur & UIBackgroundPixelate), we need to check "ProjectSettings/Platforms/Android/Build/Support Backbuffer Sampling on OpenGL".  

### 3.1.2
#### NewFeature:
LGUICanvas can prevent drawcall batch if reach max vertex count.  
LGUIPrefabSequence can fix missing bad track reference, based on actor label and actor hierarchy.  
#### Fix:
LGUIPrefab: Add more check and hint to prevent crash when missing some class reference.  
UIScrollbar: Wrong value when click UIScrollbar's background area.  
#### PerformanceUpgrade:
AutoBatch now take less cpu resource, check [this article](https://blog.csdn.net/lf2007hf/article/details/123529163).  

### 3.1.1
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

### 3.1.0
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

## 3.0

### 3.0.2
#### NewFeature:
If multiple LGUILifeCycleBehaviour in same prefab, then these scripts will execute by actor's hierarchy order; This can make the execution predictable.  
#### Fix:
Fix bug: When load nested prefab, sub prefab sometimes not attach to the correct parent.  

### 3.0.1
#### NewFeature:
WorldSpace-LGUI Renderer support UE5.  
PrefabSystem support nested sub-object.  
#### Fix:
Fix bug: LGUILifeCycleBehaviour.SetCanExecuteUpdate not wroking.  

### 3.0.0
#### NewFeature:
Use hierarchy order for UI element's render order, no noring "Depth" property anymore.  
Prefab workflow upgrade: Standalone prefab editor, support **Nested Prefab**, support property redirect, faster load speed. (Many thanks to "马志愿", great inspire)  
#### Change:
Coordinate system: from Unity-like (x-right, y-up, z-forward) to UE-like (x-forward, y-right, z-up) coordinate system.  
Color property: UIItem.Widget.Color moved to UIBaseRenderable.Color.
UICanvasGroup: Handle children UI element's opacity and interactable.
Anchor system: LGUI3 use AnchorMin/AnchorMax/AnchoredPosition/SizeDelta anchor system, just like Unity's, clean and predictable.  
Name redirect: eg. LGUIDrawableEvent to LGUIEventDelegate, AwakeBP to ReceiveAwake, StartBP to ReceiveStart, XXXBP to ReceiveXXX. Blueprint can automatic convert with no extral work, C++ can check LGUI/Config/DefaultLGUI.ini to see all these changes.  
