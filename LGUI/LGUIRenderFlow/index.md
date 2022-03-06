## LGUI render flow

### Ch
#### 准备渲染资源阶段（游戏线程）
LGUIManagerActor 负责更新所有的 LGUICanvas -> LGUICanvas 更新所有的 UIItem 和 UIBaseRenderable（可渲染物体） -> UIBaseRenderable 创建和更新 UIGeometry、UIPostProcessRenderProxy -> LGUICanvas 收集并创建网格、贴图、材质，合并 drawcall -> LGUICanvas 对 drawcall 创建渲染资源。  
#### 渲染阶段（渲染线程）
##### LGUIRenderer渲染的屏幕空间UI与世界空间UI
LGUIRenderer 渲染器扩展自 UE 的 ViewExtension，在渲染线程的函数 XXX_RenderThread 中执行所有的渲染，直接渲染到屏幕的 RenderTarget，不支持 UE 本身的后期、光照、抗锯齿等。  
渲染过程与 Slate 类似，设置 ViewUniformBuffer -> 指定 RenderTarget -> 初始化 GraphicsPipelineState -> foreach Drawcall -> Shader/Material -> SetGraphicsPipelineState -> DrawIndexedPrimitive -> *foreach Drawcall*  
##### 世界空间UI
世界空间 UI 使用 UE 自身的渲染管线，默认使用半透明材质，支持 UE 本身的后期、光照、抗锯齿等。  

### En
#### Prepare to render resource stage (game thread)
LGUIManagerActor is responsible for updating all LGUICanvas -> LGUICanvas to update all UIItem and UIBaseRenderable (renderable objects) -> UIBaseRenderable to create and update UIGeometry, UIPostProcessRenderProxy -> LGUICanvas to collect and create grids, textures, materials, merge drawcall -> LGUICanvas to create drawcall Rendering resources.  
#### Rendering stage (rendering thread)
##### Screen space UI and world space UI rendered by LGUIRenderer
The LGUIRenderer renderer is extended from the ViewExtension of UE. It performs all rendering in the function XXX_RenderThread of the rendering thread and directly renders to the RenderTarget of the screen. It does not support UE's own post-production, lighting, anti-aliasing, etc.  
The rendering process is similar to Slate. Set ViewUniformBuffer -> Specify RenderTarget -> Initialize GraphicsPipelineState -> foreach Drawcall -> Shader/Material -> SetGraphicsPipelineState -> DrawIndexedPrimitive -> *foreach Drawcall*  
##### World Space UI
The world space UI uses UE's own rendering pipeline, and uses translucent materials by default to support UE's own post-production, lighting, anti-aliasing, etc.  