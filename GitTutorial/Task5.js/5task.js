var li=document.getElementsByTagName('li')
console.log(li)
console.log(li[1])
li[1].textContent='Hello2'
li[1].style.fontweight='bold';
li[1].style.backgroundcolor='yellow';

for(var i=0;i<li.length;i++)
li[i].style.background = '#f4f4f4';
