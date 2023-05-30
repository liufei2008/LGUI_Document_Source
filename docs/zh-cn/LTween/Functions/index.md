# 其他一些方法

LTween 提供了一些好用的方法:

**VirtualCall**- 注册 start/update/complete 事件, 设置时长, 然后这些事件就会执行:

![](./step1.png)

**DelayCall**- 延迟一段时间再执行，与引擎自带的 "Delay" 节点作用一样, 不过这个方法是用回调事件的方式. 可能在c++里这个方法会更有用:

![](./step2.png)

**DelayFrameCall**- 延迟几帧再执行:

![](./step3.png)

**RegisterUpdateEvent | UnregisterUpdateEvent**- 注册 "Update" 事件，此事件会每一帧都执行知道取消注册.

![](./step4.png)

**RepeatCall**- 按照给你的时间间隔重复执行多次:

![](./step5.png)
