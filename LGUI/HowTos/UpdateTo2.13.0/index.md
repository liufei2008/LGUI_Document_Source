## Update project to LGUI version 2.13.0
Follow this page to make your existing project to fit LGUI 2.13.0.

The main differences of version 2.13.0 are:  

1. *LGUISpriteData* now inherit from *LGUISpriteData_BaseObject*, *LGUISpriteData_BaseObject* represent a base class and interface for a sprite-atlas-data, so we can implement our own packing method(eg: offline packing with mipmap support).  Most of LGUI's default sprite-data variable now switch to *LGUISpriteData_BaseObject*, eg: UISprite and UISpriteSequencePlayer.  
So if there are compile errors related to *LGUISpriteData*, you may need to change variable type from *LGUISpriteData* to *LGUISpriteData_BaseObject*.  

2. *LGUIFontData* now inherit from *LGUIFontData_BaseObject*, *LGUIFontData_BaseObject* represent a base class and interface for a font-data, so we can implement our own character texture(eg: import font from [*Bitmap Font Generator*](https://www.angelcode.com/products/bmfont/)).  
UIText now use *LGUIFontData_BaseObject*.  
So if thare are compile errors related to *LGUIFontData*, you may need to change variable type from *LGUIFontData* to *LGUIFontData_BaseObject*.  
