# CSS Positioning
<div>
  In order to position elements on screen the way we want them to go instead of going with the default layout. Some of the ways to change position property- static, relative. absolute and fixed.
</div>
 
* Static: All HTML elements are static by default and they go along with the HTML rules.

<br/>

* Relative: It positions the element that we have selected relative to how it should be positioned if it was static. Eg.

``` css
img{
  position: relative;
  left: 30px:               /* push image 30px left from previous one */
}
```
<br/>

* Absolute: By using absolute positioning, we're taking element out of flow of document and is no longer considered a part of natural flow of document, that's why rest of the elements are shifted in place of that elememt we've positioned absolutely.

``` css
div{
  position: relative;
 }
 
 img{
   position: absolute;
   right: 30px;           /* we've added space of 30px between image and div */
 }
 ```
 
 * Fixed: The element will remain fixed on screen in its position even if we scroll.

``` css
img{
  position: fixed;
  top:0;
}
```
