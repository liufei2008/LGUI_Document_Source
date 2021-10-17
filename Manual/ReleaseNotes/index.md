## 2.15.2
#### NewFeature:
LGUISpriteData add *padding* property, which is compatible for *TexturePacker*'s trim mode.  
StandaloneInputModule now support multiple mouse input in one frame.  
#### Modify:
Use ILGUICultureChangeInterface to implement culture change.  
#### Fix:
UISprite render wrong when fill mode set to radial360.  
Crash when use LGUITools/CopyActor.  
## 2.15.1
#### NewFeature:
LGUIDrawableEvent now support FText and FName.  
Add LGUIDrawableEvent_Name and LGUIDrawableEvent_Text.  
## 2.15.0
#### Fix:
Crash caused by UIItemEditorHelperComp.  
Fix a potential crash in LGUIRenderer.  
Wrong layout after SetIsUIActive in some case.  
#### NewFeature:
UIText now use FText to support **localization**. Check *TheDivision* demo of [LGUI Tutorial](https://github.com/liufei2008/LGUI_Tutorial.git) Projects.    
New render mode: **World Space - LGUI Renderer**. Render 3D UI in world space by LGUI's renderer, so it will not affect by UE's post process, and LGUI's post process will work(eg. UIBackgroundBlur).  
Editor: Add a toggle **Show LGUI column in SceneOutliner** in *LGUI Tools*, which can show or hide LGUI's functions column in SceneOutliner.  
#### Modify:
LTween: LTweener's outer use binded UObject.  
Editor: Show a message if there are multiple ScreenSpaceUI, which is not allowed.  
UIStaticMesh more stable.  
LGUIPrefab: Now use "ActorGUID" property as actor's key, so UE4.25 will not support anymore.  
LGUIPrefab: When click "CreatePrefab" or "Apply" button, other prefabs won't saved to current prefab.  
LGUIPrefab: When click "Revert" button, LGUI will keep created actors and apply values to the them, the old method is just delete and recreate them all.  
LGUIPrefab: Automaticlly cleanup useless LGUIPrefabActor.  
Remove "ComboBox" and "FlyoutMenu".  
Remove "ViewportUITexture" and "UITextureBox".  
Show UIBaseActor's "Actor" and "Rendering" category.  
Add *PriorityInScenViewExtension* to renderer. Because LGUI's renderer use UE's view extension, so this value can help LGUI's renderer to sort with other view extensions, higher comes first.  
UIItem: Rename *SetUIActive* to *SetIsUIActive*, *IsUIActiveSelf* to *GetIsUIActiveSelf*, *IsUIActiveInHierarchy* to *GetIsUIActiveInHierarchy*.  
Rename LGUI_XXXRayEmiter to LGUI_XXXRayemitter.  
## 2.14.3
#### Fix:
SetCustomUIMaterial not working.  
Render order issue.  
RectClip not working in children canvas.  
#### Modify:
ClipType behaviour: If not use OverrideClipType, then child canvas will use parent's clip parameter.  
## 2.14.2
#### Fix:
SetWidth/SetHeight/SetAnchorOffsetX/SetAnchorOffsetY error when not in preferred anchor mode. eg: SetWidth when HorizontalAnchor is Stretch.  
Crash if UIGeometryModifier not attached to a UIBatchGeometryRenderable.  
UITextInputComponent now can input negative number.  
Errors in compiled engine version.  
## 2.14.1
#### Fix:
Shader error in particle material.  
Editor: UIItem's detail panel not valid in blueprint editor.  
## 2.14.0
#### Modify:
Rename UIRenderable to UIBatchGeometryRenderable.  
Rename UIPostProcess to UIPostProcessRenderable.  
**Remove** *AutoManageDepth*, because it's not working well but take a lot effort to maintain it.  
#### NewFeature:
Add new class UIDirectMeshRenderable, for directly modify mesh data for render. Currently it has been used for [Niagara ParticleSystem Renderer for LGUI](https://github.com/liufei2008/LGUI_ParticleSystem).  
#### Fix:
MultiSample not working without post process.  
#### Improve:
Optimize drawcall management, improve performance, reduce memory usage, minimize drawcall rebuild times.  
## 2.13.2
#### Modify:
Optimize UIGridLayout.  
#### Fix:
*DynamicPixelsPerUnit* not working in world space UI.  
UISprite and UIText display wrong uv when atlas texture change.  
LGUICanvas: Drawcall sort incorrect in some case.  
## 2.13.1
#### NewFeature:
LGUIFont support UE4 build-in font, and support font's subface.  
Support 32-bit indexbuffer, default is off, turn it on by modify LGUI.Build.cs.  
Show tip text when indexbuffer out of range.  
Add *SetScrollDelta* and *SetScrollValue* for UIScrollView, so we can mannually scroll it.  
**UICustomDepthMask** component provide us the ability to mask out screen-space-UI with custom depth stencil. So that a character can stand *before* UI elements.  
#### Modify:
Improve UIText render and memory.  
#### Fix:
UIScrollView: Default created scrollview's scrollbar cannot interact.  
ThumbnailRenderer: Pure virtual call caused crash.  
## 2.13.0
#### Notes:
There maybe compile errors when update to this version, just follow [this page](../HowTos/UpdateTo2.13.0/index.md) to fix it.  
#### NewFeature:
Add tip text for LGUICanvas's *SortOrder* property.  
UITextInput can use a function to verify input.  
Add tip text if anchor is controlled by multiple layout, which is not allowed.  
Add *KillAllTweens* function for LTween.  
Improve performance when packing atlas texture for LGUIFont.  
Add **LGUIFontData_BaseObject** and **LGUISpriteData_BaseObject**, so we can implement our own font or sprite.  
Add hit text if there are multiple screen-space-UI in a world.  
Layout animation now support size and position animation, check *DragDrop* exsample.  
Improve LGUIPrefab editor.  
#### Modify:
Layout update will execute late then LGUIBehaviours.  
Change canvas icon's transparency in LGUIColumn.  
#### Fix:
LGUICanvas: *RenderTarget* mode renders wrong area.  
UITextInput: Register submit event but called in changed condition.  
Dropdown: Default dropdown's scrollbar not interactable.  
LGUICanvas: *AutoManageDepth* not sort correct when use custom material.  
UIItem: UI render not update when change pivot in editor.  
## 2.12.7
#### NewFeature:
**Auto Manage Depth!**(Experimental) Automatically manage UI element's depth and drawcall, so we don't need to set *depth* property. Just check *autoManageDepth* property in LGUICanvas to make it work. This property will be made to true by default in future release.  
Change anchor now can preserve relative UI position.  
#### Modify:
Add *Outer* parameter for *CreateLGUISpriteData* function.  
Add *SetMinValue* *SetMaxValue* for UISlider.  
LGUICanvas now can pool material when rebuild drawcall.  
Add *Fix it* and *Fix all* button for LGUIPrefab if the prefab's version is older than current.  
Add *Fix it* button for UIItem if the UIItem's *displayName* not equal to actor label.  
Add *Preview* property for UISpriteSequencePlayer and UISpriteSheetTexturePlayer, so we can preview the sequence in editor.  
Add *Project3DToScreen* function for LGUICanvasScaler, so we can project a screen-space 3D UI element's position to screen-space 2D.   
Add hint text if there are multiple LGUIBaseRaycaster with similar parameter.  
#### Fix:
UIItem: Anchor calculation wrong.  
UIDropdown: Update selections after *SetValue*.  
LGUICanvas: *PixelPerfect* not update properly.  
UITexture: If *SetTexture* with nullptr parameter then use default white texture.  
Editor: *Focus to Screen-Space-UI* now take consider the UI's fov angle.  
UIText: Render size now fit with screen size when LGUICanvasScaler scales canvas.  
## 2.12.6
#### Modify:
**PrefabSystem Update!** Now prefab can cook automatically. We don't need to *Recreate* the prefab if property field changed or version change, or any other reason.  
Adjust LGUIComponentReference's *Get* node in blueprint.  
#### Fix:
Correct calculate the Clip-Rect-Offset property in LGUICanvas.  
UIDropdown's automatic pisition will take consider canvas's rect clip property.  
Enter/Exit event bubble not execute as expected when there is an empty UI-element(no enter/exit interface component) between the hierarchy.  
## 2.12.5
#### NewFeature:
Level editor camera focus and align to Screen-Space-UI by *LGUI Tools* or keyboard shotcut.  
#### Modify:
Remake anchor calculation, now we can use SetRelativeLocation/Rotation instead of SetUIRelativeLocation/Rotation, and anchor will be calculated automatically.  
#### Fix:
Crash caused by layout calculation(new calculation method in version 2.12.4).  
Fix compile error in source-build-engine version.  
## 2.12.4
#### NewFeature:
Add *IncludeChildren* parameter in FindChildByDisplayName and FindChildArrayByDisplayName function.  
Add *Use8Direction* property in UIEffectOutline.  
Add *OwnerNoSee* and *OnlyOwnerSee* property in LGUICanvas.  
Optimize anchor calculation in UIItem. Remove SetUIRelativeLocation(and similar SetUIXXX) function, instead use native SetRelativeLocation.  
#### Modify:
Access dropdown in blueprint.  
Remove *ClearEvent* when switch left/right mouse button input.  
UIToggleGroupComponent callback use index instead of UIToggleComponent.  
Add version number for LGUIPrefab.  
Add more check when create atlas.  
Lock move if UIItem's anchor is locked by layout in editor.  
#### Fix:
Crash if change *enable* property in LGUIBehaviour.  
Shader error when package in android.  
Crash caused by UIScrollViewWithScrollbarComponent, when change Horizontal or Vertical after delete scrollbar.  
StaticMesh render issue when spawn from prefab.  
LGUIPrefab set initial transform fail.  
Crash caused by LGUIDrawableEvent, if assign different type of actor.  
## 2.12.3
#### NewFeature:
Add **DisplayName** property for UIItem, so we can use **FindChildByDisplayName** to find a child of provided name, and **FindChildArrayByDisplayName** to find child collection of same name.  
UIBackgroundBlur and UIBackgroundPixelate now support rect-clip and texture-clip.  
Add *CanScollInSmallSize* property in UIScollView, controls: when content size is smaller than it's parent size, can scoll it or not.  
Add callback event to UIToggleGroup.  
Add *UnlinkPrefab* function for *LGUI Tools*.  
Add **Dropdown** control, deprecate **FlyoutMenu** and **ComboBox**.  
#### Modify:
Split out clip function from material.  
Texture clip use red channel as clip input.  
Editor: Confirm before delete prefab instance.  
#### Fix:
UIBackgroundBlur not work in condition: upper actor have LGUICanvas (not root canvas), if turn the canvas off and on, then UIBackgroundBlur will not work.  
Directly set UIItem's position.z not work.  
Copy actor mark the actors not valid.  
Missing component when create from LGUI's prefab system. Turns out I put the component in wrong place.  
Text render with a tiny black edge when in small size.  
Nested canvas with rect clip, but sub canvas's clip value not update when position change.  
--Thanks to "陈靖中", he helped on debug/test/new-feature.  
## 2.12.2
#### NewFeature:
Add tween function MeshMaterialScalarPrameterTo/ MeshMaterialVectorParameterTo, directly set tween animation for MeshComponent's material.  
If *selfRender* set to true for UIRenderable elements, then set depth can change Translucent Sort Priority.  
Add editor button:Set depth forward or backward with children.  
UITexture now support *Filled* type, just like UISprite.  
Expose blueprint function for LTween: DisableTick, EnableTick, CustomTick, so we can control our tween's tick behaviour in blueprint.  
Add Layout menu in *LGUI Tools*.  
#### Fix:
SetUIActive(false) in Awake, but OnEnable still be called.  
Awake called in editor.  
Editor: Lock scale ratio can work with UI elements.  
ScrollView won't work if deactive at start, and later active again.  
#### Modify:
Editor: Confirm before delete actor.  
Hide UIItemEditorHelperComp, and make it editor only.
## 2.12.1
#### NewFeature:
Add tween function: AnchorOffsetTo.  
#### Fix:
Fix screen space UI flicking issue.  
Fix post process update issue.  
#### Modify:
SetDepth can propagate to children.  
Preserver hierarchy state data stored in a hidden actor.  
## 2.12.0
#### NewFeature:
Editor: Cross level copy/paste actor with hierarchy.  
Editor: Revert prefab will not modify root ui item's anchor.  
Editor: If create UIItem in sublevel, then automatic make the sub level as current level.  
Split UIRenderable to UIBaseRenderable, UIRenderable, UIPostProcess.  
UIRenderable can do self render, means it can create-drawcall/ render/ sort by it self.  
Split out RenderProxy from PostProcess, render thread more stable.  
ScreenSpaceUI material now support wireframe.  
#### Modify:
Remove LGUIBehaviourExecuteOrder.  
#### Fix:
Reconstruct LGUIBehaviour lifecycle functions.  
## 2.11.7
#### Fix:
Fix bug: Click LGUI scene outliner menu cause deselect actor.  
Fix bug: Drag root UIItem result in wrong AnchorOffset value.  
Fix LTween ease animation error: InOutElastic, InOutBack, InBounce, InOutBounce.  
#### Modify:
Remove LGUIEditHelper.  
Add more blueprint function for LGUIPlayTween.  
Editor detail appearance change: display thumbnail = false.  
Rename text animation related objects. Previours names are easily missunderstanding.  
These class move to namespace "LGUIPrefabSystem": ActorSerializer, ActorCopier, ActorReplaceTool.  
Make LTween blueprint functions easier: FloatTo, IntTo, VectorTo, ColorTo...  
Cleanup editor code. Check [this doc](../LTween/Custom/index.md).  
#### NewFeature:
Auto refresh UI when: reimport sprite texture; change border value.  
Support "Num Customized UVs" in hud material.  
Add image sequence player for easily play image sequence, 2 new component: UISpriteSequencePlayer, UISpriteSheetTexturePlayer.  
Add copy/paste on custom editor. Now we can copy/paste anchor of LGUITransform.  
## 2.11.6
#### Fix:
Fix a crash caused by RangeSelector and RichTextTagSelector when check flipDirection.
Fix custom tag unfunctional when the tag mark followed by empty character.
Fix bug: text pixelperfect mode affect character width, result in different layout.
#### Modify:
Replace CreateLambda with CreateWeakLambda, because CreateWeakLambda is more reliable for UObject.
Improve paragraph alignment editor for UIText.
RichText color name use html/markdown standard color, before is ue4's color, tiny different.
Add more color name in RichText, check [document](../Rendering/RichTextReference/index.md).
## 2.11.5
#### NewFeature:
RichText support custom tag.  
TextAnimation selector get a new selector: RichTextTag, for easily select char by custom tag.  
#### Fix:
LTween: Fix OnComplete callback for Incremental looptype.  
TextAnimation more stable.  
#### Modify:
MSAA disabled by default(not compatible with UIBackgroundXXX in DX12).  
Cleanup LTween Register/UnregisterUpdateEvent.  
Adjust detail panels display.  
## 2.11.4
#### NewFeature:
Add new Incremental loop type for LTween.  
Add loop count limit for LTween.  
Add OnCycleComplete callback function for LTween, called when every loop cycle complete.  
#### Fix:
Fix a potential crash when sort priority in canvas.  
#### Modify:
Modify some editor appearance.  
Shared depth count info now split to Renderable and RaycastTarget.  
## 2.11.3
#### Fix:
Fix update layout issue when IsUIActive=false.  
Fix memory leak caused by LGUIEditorManagerObject referencing UIItem.  
Fix a crash: Crash when use navigation input but there is no UISelectable.  
#### Modify:
Add right and middle mouse button trigger event to PresetEventSystemActor.  
Menu "Create UI Extension Elements" remove post process actors.  
Add lambda function for RegisterEvent of interaction components.  
Add more blueprint function for LGUIXXXInteraction.  
## 2.11.2
#### NewFeature:
Add controller input support.  
Custom mouse position input.  
#### Fix:
Fix useNativeParameter issue when copy event in LGUIDrawableEvent.  
## 2.11.1
#### Fix:
Fix a shader compiler error X3504 caused by LGUIHudShader.usf.  
Fix buildin prefab not loaded in packaged game.  
Fix UITexture's UVRect issue.  
#### NewFeature:
**Support MultiSampleAntiAliasing!!!(MSAA)** Turn on MSAA in ProjectSettins/LGUI/Renderging/AntiAliasing.  
UIBackgroundBlur and UIBackgroundPixelate now support on mobile.  
## 2.11.0
#### NewFeature:
Layout support animation when change item position.  
Add more blueprint functions in UIItem: GetRenderCanvas GetRootCanvas GetCanvasScaler IsScreenSpaceOverlayUI IsRenderTargetUI IsWorldSpaceUI.  
OnPointerEnter/Exit event more reasonable: parent enter/exit will execute only once if pointer enter/exit any child.  
LGUIEventFireType add new enum: OnlyTargetActor.  
Play/Stop mark as UFUNCTION in LGUIPlayTween.  
#### Modify:
Remove OnPointerDragEnter/Exit interface because it is not needed, we can instead use isDragging and enterComponent from LGUIPointerEventData.  
Rename DeleteActor to DestroyActorWithHierarchy.  
Simplify LGUIPointerInputModule's event handle.  
#### Fix:
Select canvas on SceneOutliner may change selection.  
UIItem depth info wrong.  
RichText may display "<" if end with symbol.  
Fix sort issue when use LGUI hierarchy sort.  
Fix bug: delay not working in some LTweenBPLibrary.  
Fix bug: If sprite have none packingTag, then uv get wrong.  
Fix bug: if LTween's duration = 0, then nothing happen.  
## 2.10.1
#### Fix:
Fix bug: UIEventTrigger parameter become (Actor) type.  
## 2.10.0
#### Modify:
Rename UISector to UIPolygon, remake it so it is much handy now. (You may need UE's "redirect" if you use UISector before, but some properties may need to manually setup).  
Remake UIRing, based on UI2DLineRenderer. Now UIRing and UI2DLine is more powerfull. (You may need UE's "redirect" if you use UIMesh before).  
Rename UIMesh to UIStaticMesh. (You may need UE's "redirect" if you use UIMesh before).  
LGUIPrefab will not crash editor, but give an error message if something wrong happen.  
#### NewFeature:
Add UIPolygonLine(a line/frame version of UIPolygon).  
Material now support WorldPositionOffset.  
#### Fix:
Click to select UI elements, now is much stable.  
Fix drawcall collection info display error.  
Lot of bugs fixed.  
## 2.9.10
#### Fix:
UIBackgroundPixelate flipped.  
#### Modify:
UIBackgroundBlur and UIBackgroundPixelate now become stable, but not support mobile.  
Simplify post process shader.  
## 2.9.9
#### Fix:
Fix a crash caused by LGUI's scene outliner extension.  
Fix a crash when package android platform.  
#### NewFeature:
New type of UI element: UIMesh, allow to use a UStaticMesh to render in screen space UI.  
#### Modify:
Simplify post process shader.  
## 2.9.8
#### Fix:
Fix a crash when click RecreateThis in prefab.  
Fix a issue in UIScrollViewWithScrollbar, add more hints.  
## 2.9.7
#### Fix:
Fix a crash when destroy UIBackgroundBlur and UIBackgroundPixelate.  
Fix bug: UITexture not update when click snap size.  
#### Change:
When select a actor and copy/paste use LGUI's method, the new actors will use selected actor as parent.  
--Thanks to "四青", he helped testing this plugin.  
#### NewFeature:
Support material masked blend mode for screen space UI's custom material.  
## 2.9.6
#### Fix:
Fix ScrollViewWithScrollbar issue.  
Fix Start call issue in LGUIBehaviour.  
#### NewFeature:
Add a blueprint function for runtime create LGUISpriteData.  
## 2.9.5  
#### Fix:  
Fix a crash caused by Raycaster.  
Fix problems with undo system.  
--Thanks to "刘量", he helped testing this plugin.  
## 2.9.4  
#### Fix:  
Duplicated screen space UI on viewport, when PIE with multiplayer(player count more than 1).  
## 2.9.3  
#### Fix:  
Avoid GWorld for LTweenActor creation, so LTween related code should provide a object to get world.  
## 2.9.2  
#### NewFeature:  
Android platform ready!  
## 2.9.1  
#### NewFeature:  
LGUIDrawableEvent now have preset parameter struct, like LGUIDrawableEvent_Float/ LGUIDrawableEvent_Int32...  
#### Fix;  
Fix UIPlayTween's loop issue.  
Fix LGUIDrawableEvent's editor issue when use Vector2/Vector3/Vector4/Color/LinearColor/Rotator as parameter.  
## 2.9  
#### NewFeature:  
TextAnimation, WOW!!! You can use UIEffectTextAnimation to customize it.  
LGUIDrawableEvent now support multiple component of same type on actor, use component name to identify.  
LGUIDrawableEvent now get a very clean and clear editor interface.  
LGUIPlayTween, for quick setup tween animation.  
LGUIComponentReference now get a specific blueprint node, that you can get component directly.  
#### Fix:  
Fix LGUICanvasScaler scale and size issue.  
Fix Layout update issue, when there is hierarchy nested LGUICanvas exist.  
## 2.8.6  
#### Fix:  
Fix ScreenSpaceUI preview in editor viewport.  
Other fix: crash caused by LGUICanvas, pixel perfect render of UIText.  
## 2.8.5  
#### Fix:  
Fix a crash when delete LGUICanvas.  
Fix pixel perfect calculation issue caused by 2.8.2 version.  
Fix: add or remove canvas not update correctly.  
#### Change:  
Change LGUICanvas's update methold. Basicall the old methold will update hierarchy multiple times in one frame, new method will update in multiple frames, this is more stable.  
## 2.8.4  
#### Fix:  
Fix alpha not update correctly issue, caused by 2.8.3 version.  
Fix a crash when unload current level after use "Copy Component Values".  
Fix drawcall count error.  
Fix a crash when deserialize actor from prefab.  
Fix hierarchyIndex sort error.  
#### NewFeature:  
Add SCOPE_CYCLE_COUNTER to LGUIBehaviour's update function.  
## 2.8.3  
#### Improve:  
Increase performance.  
#### NewFeature:  
Now we can preview screen space UI in edit mode, just choose a viewport(which you can find in "Window/Viewports/") and click the button "LGUI Tools/Active Viewport as LGUI Preview".  
#### Fix:  
Duplicate actor or generate a prefab in edit mode will also create a LGUIManagerActor, this is incorrect, fixed.  
Click and select UI element in viewport more stable now.  
## 2.8.2  
#### NewFeature:  
LGUICanvas support render to custom RenderTarget2D.(Experimental)  
#### Improve:  
Performance improve.  
#### Fix:  
UISprite's fill type in pixel perfect mode.  
## 2.8.1  
#### Change:  
Remove UIPanel.  
#### NewFeature:  
Add Canvas and drawcall count tip info in scene outliner.  
#### Fix:  
Fix basic setup not interactable issue.  
Fix UIText disappear when second time input from UITextInputComponent in some special case.  
## 2.8  
#### Change:  
LGUIEventSystem's RegisterGlobalListener now use FLGUIBaseEventDelegate/FLGUIBaseEventDynamicDelegate. After your delegate is called, you can cast ULGUIBaseEventData to ULGUIPointerEventData if you need.  
LGUI_Saved_Data.json file now save to project intermediate folder.  
Move LGUISettings to DefaultEngine.ini.  
LGUIPointerXXXInterface.h file move to Event/Interface/ folder.  
#### NewFeature:  
EventSystem now user InputModule to handle input events, this should be more extensible for us to make different input for different platform, such as mobile.  
Add dragToHold parameter to LGUIXXXRayemitter.  
LGUIXXXInputMobule and LGUIXXXRaycaster now can use ActorComponent's Activate/Deactivate.  
#### Fix:  
Fix a crash caused by UIText's OverflowType=ClampContent.  
Fix UITexture's UVRect issue.  
Fix LGUIBehaviour execute order error.  
## 2.7.2  
#### Change:  
Change FLGUIPointerEventData to ULGUIPointerEventData.  
Deprecate LGUIPointerEventData's currentComponent, use enterComponent instead.  
#### Improve:  
Auto UIItem's hierarchyIndex management.  
## 2.7.1  
#### New feature:  
UISprite add fill type: Horizontal/ Vertical/ Radial90/ Radial180/ Radial360, all these type can flip fill direction and support several origin type.  
Editor can preview canvas resolution scale of LGUICanvasScaler.  
UISizeControlByAspectRatio now support FitInParent/ EnvelopeParent.  
#### Improve:  
Improve UISelectableTransitionComponent.  
Improve layout editor.  
#### Fix:  
Fix virtual cameram draw issue of LGUICanvasScaler.  
Fix a build warning of bind none const function.  
## 2.7  
#### Modify:  
Change UIComponentBase to LGUIBehaviour. If you already use UIComponentBase, follow these steps:  
```  
a.Find config file in your (UE4Project)/Config/DefaultEngine.ini  
b.Find or add line [/Script/Engine.Engine]  
c.Add these lines under [/Script/Engine.Engine]:  
    +ActiveClassRedirects=(OldClassName="/Script/LGUI.UIComponentBase",NewClassName="/Script/LGUI.  
    LGUIBehaviour")  
```  
UIBackgroundBlur now use maskTexture to acturally mask out blur area. add strengthTexture to control blur strength.  
#### New feature:  
LGUIBehaviour is a totally remaked class, all I want is trying to make it more like Unity's MonoBehaviour. Because I think Unity's interfaces are more normative.  
LGUIBehaviour can control event execute order by changing LGUIBehaviourExecuteOrder in LGUISettings.  
#### Fix:  
UISlider's handle's position issue when DirectionType=RightToLeft/TopToBottom.  
## 2.6.3  
#### New feature:  
Now we can pass UMaterialInstanceDynamic to LGUIRenderable's custom material.  
## 2.6.2  
#### Improve:  
Improve italic style text render.  
#### New feature:  
Now we can click to select UI direct inside level editor.  
## 2.6.1  
#### Improve:  
Improve visual effect and performance of UIBackgroundBlur.  
## 2.6  
#### New feature:  
Add UIPostProcess UI element type, now we can extend our own post process on UI.  
Add UIBackgroundBlur effect, which is based on UIPostProcess.  
#### Fix:  
Fix a compile error in some specific condition(inline function xxx not defined)  
Improve pixel perfect and dynamic pixel scale of UIText render  
Fix a bug: If a UProperty is SceneComponent and AttachParent property have value, then endless loop will occur.  
#### Modify:  
Recreate UIFlyoutMenu and UIComboBox.  
Change LGUIPointerEventData's property "hitComponent" to "currentComponent".  
## 2.5  
#### New feature:  
Add rich text support in UIText. Check "Rich Text" property to see more.  
LGUICanvasScaler now provides more options for users to control UI'adaptive behaviour.  
#### Fix:  
Fix a crash on LGUIPrefab when hit revert button.  
Fix a crash when change level, caused by UIItem.  
Fix a UIText texture display error.  
## 2.4.1  
#### Modify:  
Delete actor will also check delete prefab.  
Add engine version to prefab, so prefab made by different engine version will show a warning.  
#### Fix:  
Fix a crash when use UIText in blueprint actor editor, although work in blueprint actor is not recommaded for LGUI.  
## 2.4  
#### Fix:  
Fix a crash when compile blueprint that inherit from UIItem.  
Fix a compile warning in UIItem.  
#### New feature:  
Add UISpriteBase_BP and UITextureBase_BP for blueprint extend custom UI element.  
LTween add blueprint tween for some basic types, eg. FloatTo/IntTo/Vector2To/Vector3To...  
## 2.3.4  
#### Modify:  
Increase performance.  
#### New feature:  
Add UIRenderable_BP for blueprint can extend custom UI element.  
## 2.3.3  
#### Fix:  
Fix a fatal error after shutdown, caused by LGUIFontData.  
Fix a pontential link error caused by UI2DLineRendererBase.  
## 2.3.2  
#### Fix:  
Recreate default plugin's prefab assets.  
Fix a bug for LGUIDrawableEvent when recompile blueprint.  
Add more check to LGUIDrawableEvent to prevent crash.  
#### New feature:  
Add lambda function to LTween's RegisterUpdateEvent, it's just a quick entry and not for blueprint.  
## 2.3.1  
#### Fix:  
Fix crash when redo from Prefab instance.  
#### New feature:  
Add "Browser to Prefab asset" to prefab edit.  
## 2.3:  
#### Fix:  
Fix crash when add LGUICanvas in blueprint actor. But blueprint actor for LGUI is still not recommended.  
#### Modify:  
Rename LTween's XXXGetterFunction to LTweenXXXGetterFunction, and same change to XXXSettterFunction.  
#### New feature:  
LGUIFont now can pack font texture into UISprite's atlas texture! This can be very helpful to reduce drawcall. All we need to do is to change LGUIFont's packingTag property to a UISprite's packingTag.  
Create folder for LGUIPrefab actor in SceneOutliner.  
## 2.2：  
#### Fix:  
Fix a bug of UITextInputComponent multi line edit.  
Screen space UI render issue.  
#### New feature:  
Navigation support, eg: use tab key to navigate to next UISelectableComponent. Call NavigationXXX function in LGUIEventSystem.  
UITextInputComponent support ignore keys, canbe useful for navigation.   
LGUIComponentReference now support multiple component of same type on same actor, all we need to do is just click and select a component.  
## 2.1:  
#### Fix:  
Screen space UI sort order problem.  
UITextInputComponent more stable.  
#### Update:  
Change default rotate from (-90, 0, 90) to (-90, 0, 0).  
Replace LGUIEventSystemActor with LGUIEventSystem component.  
Modify for 2DLineRendererBase, remove CurrentPointArray property, add UseGrowValue to determin whether or not use grow value.  
#### New feature:  
Add uiScale property to LGUICanvas, maybe useful in future.  
## 2.0:  
Screen space UI (Or HUD) not get a huge performance update. The 1.x version use SceneCapture2D, which is vary bad on performance. But now the new 2.x version of LGUI's HUD, is render direct on screen, no additional performance cost!  
Remove UIPanel, use LGUICanvas to render all UI elements.  
Remove UIRoot, LGUICanvas and LGUICanvasScaler will do the job.  




## 1.14:  
#### Fix:  
button "Create Prefab" not create content.  
some crash fixed.  
#### Update:  
change UIItem's base class UPrimitiveComponent to USceneComponent, this can save a lot of disk space and memory. But!!!!! You Need To Recreate Your Prefab Which Contains LGUI Elemnt.  
add RenderTargetSizeMultiply for UIRoot, increase this value can perform a supersampleing thing.  
#### New feature:  
(still under develop)Add a button to UIRoot component named "Open Screen Space UI Viewer", which can open a window to preview Screen Space UI.  
Save scene outliner's hierarchy state now support save and open map. 
## 1.13:  
#### Fix:  
material's IsFontTexture property not set correctly.  
#### New feature:  
save scene outliner's hierarchy state(actor's folder) before play, and restore it after end play.  
## 1.12:  
#### Fix:  
screen space UI alpha blend problem.  
#### Upgrade:  
prefab: when select a actor, drag to create prefab will attach to that actor.  
editor: ReplaceUIElement now can keep and replace object reference.  
#### Modify:  
Avoid using GWorld, so LoadPrefab must provide a object to get world.  
#### New feature:  
A new column on SceneOutliner, provide ability to create/modify UI direct in SceneOutliner.  
## 1.11:  
Fix some bugs.  
Fix bug: crash caused by UITextInputComponent, when select text content.  
Fix LTween's InOutBack ease type error.  
Add preset interaction components, LGUIScreenSpaceInteraction/LGUIWorldSpaceInteraction, for quick setup.  
Add "Screen Space UI" and "World Space UI" preset setup at editor "LGUI Tools/Basic Setup".  
Add "Replace UI Elements" at editor "LGUI Tools/Replace UI Elements".  
## 1.10:  
Fix some bugs.  
Modify layout and editor.  
## 1.9:  
Fix a crash caused by ActorSerializer.  
Add UENUM support for LGUIDrawableEvent.  
UI2DLine add "grow" feature, can grow line from start to end.  
Change LGUIEditor's rule of duplicate object's name.  
## 1.8:  
Fix LTween crash issue.  
ActorSerializer(PrefabSystem) and ActorCopier now support instanced object property.  
LGUIComponentReference add blueprint support.  
## 1.7:  
Fix some bugs.  
Improve performance of UITexture's tiled mode and UISprite's tiled mode.  
## 1.6:  
Fix a bug that cause an error and stop cook process.  
Add more alignment options for layout control. 
## 1.5:  
Expose more interface to blueprint(most is layout component).  
Add UVRect property to UITexture, so UITexture can choose a rect area to show texture. If any prefab contains the UITexture component, then you should recreate that prefab.  
Modify UIRoot for editor simulation mode. When you use overlay UI by SceneCapture2D, you can eject player and hide UI.  
Show drawcall count on UIPanel's details panel.  
Fix edit mode update issue.  
Fix a crash caused by UISprite tiled mode.  
## 1.4:  
Fix some bugs  
Replace editor update with FTickableObject.  
## 1.3:  
Change some editor icon.  
Add new editor enter on toolbar, with LGUI icon button.  
Add new editor helper function "Change Trace Channel", this can quickly change UI element's trace channel with hierarchy.  
Add new function "SetTraceChannel" and "GetTraceChannel" to UIItem.  
## 1.2:  
Thanks to <jeff@lockerman.org>, I modified some class names from 2DLineXXX to UI2DLineXXX, because digits as first char of class name is not good.  
If you already use some of these classes, follow these steps:  
```  
        a.Find config file in your (UE4Project)/Config/DefaultEngine.ini  
        b.Find or add line [/Script/Engine.Engine]  
        c.Add these lines under [/Script/Engine.Engine]:  
            +ActiveClassRedirects=(OldClassName="/Script/LGUI.2DLineChildrenAsPoints",NewClassName="/Script/LGUI.UI2DLineChildrenAsPoints")  
            +ActiveClassRedirects=(OldClassName="/Script/LGUI.2DLineChildrenAsPointsActor",NewClassName="/Script/LGUI.UI2DLineChildrenAsPointsActor")  
            +ActiveClassRedirects=(OldClassName="/Script/LGUI.2DLineRaw",NewClassName="/Script/LGUI.UI2DLineRaw")  
            +ActiveClassRedirects=(OldClassName="/Script/LGUI.2DLineActor",NewClassName="/Script/LGUI.UI2DLineActor")  
            +ActiveClassRedirects=(OldClassName="/Script/LGUI.2DLineRendererBase",NewClassName="/Script/LGUI.UI2DLineRendererBase")  
            +ActiveClassRedirects=(OldClassName="/Script/LGUI.2DLineRing",NewClassName="/Script/LGUI.UI2DLineRing")  
            +ActiveClassRedirects=(OldClassName="/Script/LGUI.2DLineRingActor",NewClassName="/Script/LGUI.UI2DLineRingActor")  
            +ActiveClassRedirects=(OldClassName="/Script/LGUI.2DLineRingFrame",NewClassName="/Script/LGUI.UI2DLineRingFrame")  
            +ActiveClassRedirects=(OldClassName="/Script/LGUI.2DLineRingFrameActor",NewClassName="/Script/LGUI.UI2DLineRingFrameActor")  
```  
After these steps, the engine should should recognize these new classes.  
## 1.0:  
First submit  