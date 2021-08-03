# Iframes

* The "iframe" tag specifies an inline frame. An inline frame is used to embed another document within the current HTML document. The "iframe" tag defines a rectangular region within the document in which the browser can display a separate document, including scrollbars and borders.


* Syntax : 

``` html
<!--The "src" attribute is used to specify the URL of the document that occupies the iframe.-->

<iframe src="URL" title="description"></iframe>

<!--The title is used by screen readers to read out what the content of the iframe is.-->
```

## Attributes of iframe -

![iframe](https://user-images.githubusercontent.com/56999749/126905968-600d6556-b32f-48e7-aad6-53d6f7fcdfff.JPG)

<br>

### Iframe - Set Height and Width

<br>

We can use the height and width attributes to specify the size of the iframe: 
``` html
<iframe src="https://lgmsoc.co/"
            title="LGMSOC Website" width="400" height="300">
</iframe>
```
### Output
<br>

![output-iframe](https://user-images.githubusercontent.com/56999749/126906306-9ae5a303-eac0-4b5c-805e-9388e0edecc1.JPG)

<br>

Or we can add the style attribute and use the CSS height and width properties:


``` html
<iframe src="https://lgmsoc.co/"
            title="LGMSOC Website" style="height:200px;width:300px;">
</iframe>
```

### Iframe - Target for a Link

<br>

An iframe can be used as the target frame for a link.

The target attribute of the link must refer to the name attribute of the iframe:

``` html
<iframe src="https://lgmsoc.co/" name="iframe_a" height="300px" width="100%" title="LGMSOC Website"></iframe>

<p><a href="https://lgmsoc.co/" target="iframe_a">Let's Grow More Summer of Code Website</a></p>
```

### Output
<br>

When the target attribute of a link matches the name of an iframe, the link will open in the iframe.
<br>


![output-iframe2](https://user-images.githubusercontent.com/56999749/126906781-698afd88-3108-4ed1-8931-56bc1228e657.JPG)
