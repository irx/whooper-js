# whooper-js
Animated HTML5 canvas icon inspired by Hamburger Menu found in Android Material Design

### Usage
```html
<canvas id="myicon" height="150" width="150"></canvas>
```
Notice canvas resolution should be 150x150. You may change icons size with CSS.

```javascript
var canvas = document.getElementById("myicon");
var icon = whooper.create(canvas);
icon.set(50);
```

You may change color of icon:
```javascript
icon.color = "#ff69b4";
```

For more see `example.js`




As of now code is quite messy
Any attempt to upgrade it is welcome
