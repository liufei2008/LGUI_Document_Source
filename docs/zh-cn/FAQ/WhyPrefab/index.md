# 为什么要用预制体？
### 逻辑处理归于脚本，数据连接归于预制体
借用[此贴](https://www.zhihu.com/question/347571130/answer/836094555)中MaxwellGeng回答中的名言：**Prefab比起BP，最根本的关系在于：心里有点B数，知道自己是干啥的**。具体对比大家可以看帖子。
所以在预制体工作流程中，脚本（c++和蓝图）只负责处理逻辑，预制体负责挂载信息。

### Awake和Tick的执行顺序可控
LGUIPrefab在加载的时候创建Actor是按照这样的顺序：按照Outliner排序从上往下依次创建，所以根物体最先创建；Outliner默认按照ActorLabel的名字排序(UI物体按照HierarchyIndex排序)。因为创建Actor的顺序是可控的，所以Awake和Tick都是按照创建的顺序来执行的。
