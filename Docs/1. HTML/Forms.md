# Forms in HTML

* HTML forms are used to collect information from the user. Forms are defined using the <form> element, with its opening and closing tags:
  
``` html
  <body>
    <form></form>
  </body>
```
<br/>
  
* Use the action attribute to point to a webpage that will load after the user submits the form. 
  
``` html
  <form action="http://www.google.com">
  </form>
```
  
<br/>
  
* The method attribute specifies the method (GET or POST) to be used when forms are submitted. When we use GET, the form data will be visible in the page address. We use POST if the form is updating data, or includes sensitive information, the submitted data is not visible in page address.

``` html
  <form action="url" method="GET">
  <form action="url" method="POST">
```
    
<br/>
    
* To take in user input, you need the corresponding form elements, such as text fields. The <input> element has many variations, depending on the type attribute. It can be a text, password, color, checkbox, radio, file, date, submit, etc.

``` html
    <form>
      <label>Your Name: </label>
      <input type="text" name="yourName" />
      <br/>
      <label>Password: </label>
      <input type="password" name="password" />
    </form>
```
<br/>
    
* The submit button submits a form to its action attribute:

``` html
    <input type="submit" value="Submit" />
```

 
