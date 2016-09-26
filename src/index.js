import defaultModule, { otherModule,foo,time } from './exampleModule';

const newDiv = document.createElement('h1');
const newContent = document.createTextNode(defaultModule.name);
newDiv.appendChild(newContent);

const newDiv2 = document.createElement('h2');
const newContent2 = document.createTextNode(otherModule.name);
newDiv2.appendChild(newContent2);

const newDiv3 = document.createElement('h2');
const newContent3 = document.createTextNode(foo(1,2));
newDiv3.appendChild(newContent3);

const newDiv4 = document.createElement('h2');
const newContent4 = document.createTextNode(time());
newDiv4.appendChild(newContent4);

var btn = document.createElement("BUTTON");
var t = document.createTextNode("Click");
btn.appendChild(t);

document.body.appendChild(btn);
document.body.appendChild(newDiv);
document.body.appendChild(newDiv2);
document.body.appendChild(newDiv3);
document.body.appendChild(newDiv4);

document.body.appendChild(btn);
