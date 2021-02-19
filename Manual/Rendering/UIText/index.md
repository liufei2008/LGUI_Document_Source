## UIText

UIText can render UE4's text/string with LGUIFont.
**Properties**
![](1.png)
|Property:|Functions:|
|:-|:-|
|Font|The Font used to display the text.|
|Text|The text displayed by the control.|
|Size|The size of the displayed text.|
|Space|The horizontal and vertical separation between characters.
|H Align|The horizontal alignment of the text.
|V Align|The vertical alignment of the text.
|Overflow Type|The method used to handle the situation where the text is too wide or too tall to fit in rectangle. The options are *Horizontal Overflow* and *Vertical Overflow* and *Clamp Content*.
|Adjust Width|Valid when *Overflow Type* is *Horizontal Overflow*. Set the rectangle's width to real with of text content.
|Adjust Height|Valid when "Overflow Type* is *Vertical Overflow*. Set the rectangle's height to real height of text content.
|Font Style|The style applied to the text. The options are *None*, *Bold*, *Italic*, *Bold and Italic*.
|Rich Text|Should markup elements in the text be interpreted as Rich Text styling? See [Rich Text Reference](../RichTextReference/index.md).
|
|Other Properties|See [UIItem](../UIItem/index.md).
