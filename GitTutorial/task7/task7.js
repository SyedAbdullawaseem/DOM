var itemList=document.querySelector('#items')
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement)
itemList.children[1].style.backgroundColor='yellow';
itemList.firstElementChild.textContent='yellow';
itemList.lastElementChild.textContent='purple';

itemList.previousElementSibling.style.color='blue';
var newDiv=document.createElement('did')
newDiv.className='hello'
newDiv.id='hello1';
newDiv.setAttribute('title','Hello div')
var newDivText=document.createTextNode('Hello World')
newDiv.appendChild(newDivText)
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1')
console.log(newDiv);
container.insertBefore(newDiv,h1);