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
