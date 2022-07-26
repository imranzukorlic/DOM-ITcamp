// console.dir(document)
// console.log(document.);
// console.log(document.head);
// console.log(document.all );

//getElementById//
// var headerTitle = document.getElementById('header-title')
// var header = document.getElementById('main-header')
// console.log(headerTitle);
// headerTitle.textContent = "hello"
// headerTitle.innerText= "goodbay"
// headerTitle.innerHTML = "<h3>hello</h3>"
// header.style.borderBottom = 'solid 3px #000'

//getElementByClassName//
// var items = document.getElementsByClassName('list-group-item')
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Hello2"
// items[1].style.backgroundColor = "yellow"

// // items.style.backgroundColor = "blue"  = dosen't work
// //we must like this
// for (let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = 'blue';
    
// }

//getEllementByTagName//

//querSelector//

// var header = document.querySelector ( '#main-header' );
// header.style.borderBottom = ' solid 4px #ccc '

// var input = document.querySelector ( 'input' )
// input.value = ' Hello World '

// var submit = document.querySelector ( 'input[type="submit"]' )
// submit.value = "SEND"

// var item = document.querySelector ( '.list-group-item' )
// item.style.color = 'red'

// var lastItem = document.querySelector ( '.list-group-item:last-child' )
// lastItem.style.color = 'blue' 

// var secondItem = document.querySelector ( '.list-group-item:nth-child(2)' )
// secondItem.style.color = 'blue' 

// //querySelectorAll
// var title = document.querySelectorAll('.title')
// console.log(title);

// title[0].textContent ="Hello world"

// var odd = document.querySelectorAll('li:nth-child(odd)')//svaki parni
// var even = document.querySelectorAll('li:nth-child(even)')//svaki neparan
// for (let i = 0; i < odd.length; i++) {
//     odd[i].style.background = "#f4f4f4"
//     even[i].style.background = "#ccc"
//}

//TRAVERSING THE DOM//
//var itemsList = document.querySelector('#items')
//parentNode//
// console.log(itemsList.parentNode);
// itemsList.parentNode.style.backgroundColor ='#f4f4f4'

//chailNode//
// console.log(itemsList.childNodes);
// console.log(itemsList.nextSibling);

//createElement
var newDiv = document.createElement('div')
newDiv.className = 'Heloo'
//create text node
var newDivText = document.createTextNode('haloooooooooo')
//apply text
newDiv.appendChild(newDivText)

var container = document.querySelector('header .conteiner')
var h1 = document.querySelector('header h1')


console.log(newDiv);

container.insertBefore(newDiv, h1)



