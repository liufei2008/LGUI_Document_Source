# LGUI render flow

## Prepare render resource (game thread)
LGUIManagerActor is responsible for updating all LGUICanvas -> LGUICanvas to update all UIItem and UIBaseRenderable (renderable objects) -> UIBaseRenderable to create and update UIGeometry, UIPostProcessRenderProxy -> LGUICanvas to collect and create grids, textures, materials, merge drawcall -> LGUICanvas to create drawcall Rendering resources.  
## Rendering (rendering thread)
### Screen space UI and world space UI rendered by LGUIRenderer
The LGUIRenderer renderer is extended from the ViewExtension of UE. It performs all rendering in the function XXX_RenderThread of the rendering thread and directly renders to the RenderTarget of the screen. It does not support UE's own post-production, lighting, anti-aliasing, etc.  
The rendering process is similar to Slate. Set ViewUniformBuffer -> Specify RenderTarget -> Initialize GraphicsPipelineState -> foreach Drawcall -> Shader/Material -> SetGraphicsPipelineState -> DrawIndexedPrimitive -> *foreach Drawcall*  
### World Space UI
The world space UI uses UE's own rendering pipeline, and uses translucent materials by default to support UE's own post-production, lighting, anti-aliasing, etc.  