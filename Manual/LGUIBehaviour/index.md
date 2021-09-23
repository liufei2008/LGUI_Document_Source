## LGUIBehaviour life cycle

### Ch
LGUIBehaviour 的生命周期函数由 LGUIManager 统一管理，执行顺序如下：  
**Awake -> OnEnable -> Start -> Update -> OnDisable -> OnDestroy**  
**Awake** : LGUIBehaviour 在加载到场景中并且 UIItem 的 IsUIActive 是 true 的情况下执行一次。  
**OnEnable** : LGUIBehaviour 的 GetIsActiveAndEnable 由 false 变为 true 的时候执行。  
**Start** : 在第一个 Update 执行之前执行 Start。  
**Update** : 当 GetIsActiveAndEnable 是 true 的时候每一帧执行一次。  
**OnDisable** : LGUIBehaviour 的 GetIsActiveAndEnable 由 true 变为 false 的时候执行，或在 OnDestroy 之前并且 OnEnable 执行过的情况下执行一次。  
**OnDestroy** : LGUIBehaviour 被销毁(EndPlay)的时候并且 Awake 执行过的情况下执行一次。  
Awake/Start/OnDestroy 在全生命周期中最多执行一次，OnEnable/OnDisalbe/Update 可能执行多次。  
GetIsActiveAndEnable : UIItem 的 IsUIActive 是 true 并且 LGUIBehaviour 的 enable 是 true 的情况下返回 true。  

与 UE 生命周期函数：BeginPlay -> Awake ... OnDestroy -> EndPlay , Tick 函数与 Update 函数无关。  

LGUI 的 Prefab 工具支持: 如果 LGUIBehaviour 是从 Prefab 中创建的，那么**初始化工作需要放到 Awake 中（而不是 BeginPlay）**，因为 Awake 会在 Prefab 的所有反序列化工作完成之后再执行。  



### En
The life cycle functions of LGUIBehaviour are managed uniformly by LGUIManager, and the execution sequence is as follows:  
**Awake -> OnEnable -> Start -> Update -> OnDisable -> OnDestroy**  
**Awake**: LGUIBehaviour is executed once when it is loaded into the scene and the IsUIActive of UIItem is true.  
**OnEnable**: Execute when GetIsActiveAndEnable of LGUIBehaviour changes from false to true.  
**Start**: Execute Start before the first Update is executed.  
**Update**: When GetIsActiveAndEnable is true, it will be executed once every frame.  
**OnDisable**: Execute when GetIsActiveAndEnable of LGUIBehaviour changes from true to false, or execute once before OnDestroy and OnEnable has been executed.  
**OnDestroy**: Execute once when LGUIBehaviour is destroyed (EndPlay) and Awake has been executed.  
Awake/Start/OnDestroy can be executed at most once in the whole life cycle, and OnEnable/OnDisalbe/Update may be executed multiple times.  
GetIsActiveAndEnable: Returns true when IsUIActive of UIItem is true and enable of LGUIBehaviour is true.  

With the UE life cycle function: BeginPlay -> Awake ... OnDestroy -> EndPlay, the Tick function has nothing to do with the Update function.  

LGUI's Prefab tool supports: If LGUIBehaviour is created from Prefab, then **initialization work needs to be placed in Awake (not BeginPlay)**, because Awake will execute after all prefab deserialization work is completed.  