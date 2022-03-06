## Other functions

LTween provide some handy functions for work:
**VirtualCall**- Register the start/update/complete events, set a duration time, so these events will execute:
![](step1.png)

**DelayCall**- Same as engine's native node "Delay". c++ version may be more valuable:
![](step2.png)

**DelayFrameCall**- Delay a specific frame count and call event:
![](step3.png)

**RegisterUpdateEvent | UnregisterUpdateEvent**- Register the "Update" event so it will be executed every frame, until unregistered.
![](step4.png)
