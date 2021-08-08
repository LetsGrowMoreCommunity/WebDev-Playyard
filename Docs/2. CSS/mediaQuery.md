# Media Query Breakpoints
<div>
  We usually use media query breakpoints to make our website responsive,i.e. creating dynamic changes to the appearance of a website, depending on the screen size and orientation of the device being used to view it.
</div>

<br/>

We can impose different conditions under different circumstances using media queries. Examples.
  
* If media is screen and minimum width is 900px, change any style or property the way you want
  
``` css
@media screen(min-width:900px){
  /* change something */
}
```
  
* If maximum width is 900px, change the colour of heading to red and increase font size

``` css
@media (max-width:900px){
  h1{
   font-size: 60%;
   color: red;
 }
}
```

<br/>
We can use more than 1 parameter to narrow down the range where we want breakpoint to occur,

``` css
@media (min-width:900px) and (max-width: 1000px){
  /* change anything */
}
```
