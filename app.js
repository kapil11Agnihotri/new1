/*var item=document.getElementsByClassName('list-group-item');
console.log(item);
//item[0].style.background='pink'

item[0].style.fontWeight='bold';
item[0].style.color='green'; 

item[1].style.fontWeight='bold';
item[1].style.color='green'; 

item[2].style.fontWeight='bold';
item[2].style.color='green'; 

item[3].style.fontWeight='bold';
item[3].style.color='green'; 


var title=document.getElementsByClassName('title')
title[0].style.color='red';
title[0].style.fontWeight='bold';
title[1].style.color='red';
title[1].style.fontWeight='bold';*/

//by tag name -

/*var li=document.getElementsByTagName('li');
var liByClass=document.getElementsByClassName('new-list-group');
li[4].style.color='red';
li[4].style.fontWeight='bold';

liByClass[1].style.color='red';
liByClass[1].style.fontWeight='bold';*/


//QUERYSELECTOR
//var item2=document.querySelector('.list-group-item2');
//item2.style.background='green';

//var item3=document.querySelector('.list-group-item3');
//item3.style.color='white';

//queryselecterall//

//var item2=document.querySelectorAll('.list-group-item2');
//item2[0].style.color='green';

//var odd=document.querySelectorAll('li:nth-child(odd)');
//for(var i=0;i<odd.length;i++){
  //  odd[i].style.backgroundColor='green'

  //nodes//

var itemList=document.querySelector('#items');
console.log(itemList.parentNode);

itemList.parentNode.style.backgroudcolor='#f4f4f4';

console.log(itemList.parentNode.parentNode.parentNode);
console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroudcolor='green';

console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='Hello 1';


console.log(itemList.lastChild);
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Hello 4';

console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);

console.log(itemList.previousElementSibling);
console.log(itemList.previousSibling);

var newDiv=document.createElement('div');
newDiv.id='hello1';
newDiv.class='hello';
newDiv.setAttribute('title','Hello div');
console.log(newDiv);

var newDivText=document.createTextNode('Hello World');

newDiv.appendChild(newDivText);

var container=document.querySelector('header.container');
var h1=document.querySelector('body h1');

console.log(newDiv);
console.log(h1);

container.insertBefore(newDiv,h1);
var h2=document.querySelector('ul li');

console.log(h2);
container.insertBefore(newDiv,h2);









