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

#### Phases
Whooper has 2 phases divided into 100 frames of transition between them. Frame `0` is menu button, while frame `50` represents back button. Whole thing acts like periodic function, so `101` frame would be interpreted as `1`.
![example](https://raw.githubusercontent.com/Ewaryst/whooper-js/master/showcase/whex.png)

For more see [`example.html`](https://rawgit.com/Ewaryst/whooper-js/master/example.html)




As of now code is quite messy.
Any attempt to upgrade it is welcome.
