# ARISE-JS [![License MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/TheWitcher1991/arise-js/blob/master/LICENSE)

>## I warn you! Plugin in development. If you download it and use it, there may be errors in some functions or they will not work

> This is a plugin for creating various (customizable) pop-ups that can be added to a website or web application

All documentation is on this site - ...
## Including

Clone the repository in a suitable folder

```bash
$ git clone https://github.com/TheWitcher1991/arise-js.git
```

Then download the nodejs packages
And assemble the project

```bash
$ npm install
$ npm run build
```

The desired file in the build folder

> {PATH}/build/arise.min.js

### Webpack/ES6/ES5

You can use ES6 ES5 connection modules

ES6
```js
import arise from 'arise-js';
// or 
import { Arise } from 'arise-js';
```

ES5
```js
const arise = require('arise-js');
// or
const { Arise } = require('arise-js');
```

Then using wepback or other collectors to get the source file

### Example
```js
'use strict';

let bth = document.querySelector('#id');

bth.addEventListener('click', e => {
    e.preventDefault();

    // What are the windows:
    //  info/success/error/warning/(question/input)/(question/bth) Default - 'info'

    // Call the window of success
    Arise({
        type: 'success', 
        title: 'This is title!',
        content: 'Text content...',
        theme: 'dark' // light/dark Optional parameter. Default - 'light'
    });

    // Or call the window with the question the answer to which you must enter in the input,
    // User response can be put into a variable
    let userName = Arise({
        type: 'question/input',
        inpPlaceholder: 'Your name...', // optional parameter
        inpType: 'text', // optional parameter
        inpName: 'name', // optional parameter
        inpEmpty: 'Please enter your name', // optional parameter
        title: 'What is your name?',
        content: 'This name will be displayed in your messages.'
    });

    // userName = input.value

    // Or call a warning window
    Arise({
        type: 'warning',
        title: 'Are you sure?',
        content: 'You will not be able to recover this imaginary file!'
    })


}, false);
```

### Node

To include Arise-js in Node, first install with npm.

```bash
$ npm i arise-js
```

then

```html
<script src="./node_modules/gross-js/bin/arise-js.js"></script>
```




#### If you don't wish to clone, you can [download the source code](https://github.com/TheWitcher1991/arise-js/archive/master.zip).