# Find Child by DisplayName
#### 1. UIItem's DisplayName
UE4's actor don't have a persistent name, the name displayed in *World Outliner* is editor only. But sometimes we need a persistent name to find a UI item. LGUI's UIItem component provide a run-time valid property **DisplayName**, which is the same value as the actor displayed in *World Outliner*:  
![](./1.png)

#### 2. Functions to use the *DisplayName*:
![](./2.png)
|Function:|Description:  
|:-|:-
|Find Child by Display Name (In Name)|Search in children and return the first UIItem that the displayName match input name. Support hierarchy nested search, eg: InName = "Content/ListItem/NameLabel". Parameter *In Name* is case sensitive.
|Find Child Array by Display Name (In Name)|Like "FindChildByDisplayName", but return all children that match the case.

#### 3. Change UIItem's DisplayName
Like descripted before, UIItem's *DisplayName* is the same as actor's label displayed in *World Outliner*, so just change the actor label in editor.  
And in runtime, call function *SetDisplayName* to change it.
