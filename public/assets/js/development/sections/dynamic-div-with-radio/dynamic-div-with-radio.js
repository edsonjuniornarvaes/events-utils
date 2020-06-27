import { dynamicDivRadio } from '../../../utils.js';

let form1 = document.getElementById('fisica');
let form2 = document.getElementById('juridica');
let radio1 = document.getElementById('radio-1');
let radio2 = document.getElementById('radio-2');
let div1 = document.getElementsByClassName('fisica');
let div2 = document.getElementsByClassName('juridica');


dynamicDivRadio(form1, form2, radio1, radio2, div1, div2)