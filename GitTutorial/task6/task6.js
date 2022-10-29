var header=document.querySelector('#main-header');
header.style.borderBottom='solid 4px black';
var input=document.querySelector('input')
input.value='Hello World'
var submit=document.querySelector('input[type=submit]')
submit.value='send'
var item=document.querySelector('.list-group-item')
item.style.color='RED';
var lastItem=document.querySelector('.list-group-item:last-child');
lastItem.style.Color='blue';
var secondItem=document.querySelector('.list-group-item:nth-child(1)');
secondItem.style.Color='Green';

var titles=document.querySelectorAll('.title');
console.log(titles);

var odd=document.querySelectorAll('li:nth-child(odd)');
var even=document.querySelectorAll('li:nth-child(even)');

for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='green';
    even[i].style.backgroundColor='#ccc';
}
