## Update project from LGUI2 to LGUI3
Follow this page to upgrade your LGUI2 project to LGUI3.  

**CAUTION!!!** LGUI3 is not fully compatible with LGUI2, follow this video to upgrade your project to LGUI3: [Youtube](https://youtu.be/PSFG3nAJRHE) [Bilibili](https://www.bilibili.com/video/BV1sa411y7Zf?share_source=copy_web) , but I can't guarantee this convertion is good for every project.

####Changes in LGUI3:

* **Coornidate system**: from Unity-like (x-right, y-up, z-forward) to UE-like (x-forward, y-right, z-up) coordinate system.
* **Color property**: UIItem.Widget.Color moved to UIBaseRenderable.Color.
* **UICanvasGroup**: Handle children UI element's opacity and interactable.
* **Anchor system**: LGUI3 use AnchorMin/AnchorMax/AnchoredPosition/SizeDelta anchor system, just like Unity's, clean and predictable.
* **Name redirect**: eg. LGUIDrawableEvent to LGUIEventDelegate, AwakeBP to ReceiveAwake, StartBP to ReceiveStart, XXXBP to ReceiveXXX. Blueprint can automatic convert with no extral work, C++ can check LGUI/Config/DefaultLGUI.ini to see all these changes.
