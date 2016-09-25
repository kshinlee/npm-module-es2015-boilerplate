import defaultModule, { otherModule } from './exampleModule';

const newDiv = document.createElement('h1');
const newContent = document.createTextNode(defaultModule.name);
newDiv.appendChild(newContent);

const newDiv2 = document.createElement('h2');
const newContent2 = document.createTextNode(otherModule.name);
newDiv2.appendChild(newContent2);

document.body.appendChild(newDiv);
document.body.appendChild(newDiv2);
