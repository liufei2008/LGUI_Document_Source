# Why use prefab?
### Logic handled by script, data and information mouting handled by prefab
Borrowing a famous quote from MaxwellGeng's answer in [this post](https://www.zhihu.com/question/347571130/answer/836094555): **Prefab比起BP，最根本的关系在于：心里有点B数，知道自己是干啥的**. For a detailed comparison, you can read the post.   
Therefore, in the prefab workflow, scripts (c++ and blueprints) are only responsible for processing logic, and prefabs are responsible for mounting information.

### Execute order of Awake and Tick are predictable
LGUIPrefab creates Actors in this order when loading: they are created from top to bottom according to the Outliner sorting, so the root object is created first; the Outliner is sorted by the name of the ActorLabel by default (UI objects are sorted according to the HierarchyIndex). Because the order in which Actors are created is controllable, Awake and Tick are executed in the order in which they are created.
