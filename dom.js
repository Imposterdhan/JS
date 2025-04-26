/* Dom stands for document object model - which is used to implement
//  a functionality on a html element 

// Explanation:  The html file consist of html elemnts 

// once it is executing inside the browser,browser creates a dom  in the form of tree structure
   where all elements convert to object

   BY using dom methods we can target the dom elements and makes the functionality

   Document represents-html document 
   Object means converting elements into objects(done by browser)
   Model - html document represents in form of tree structure


   Dom Methods:  
   1.getElementById
   2.getElemenetbyClassName
   3.getElementbyTagName
   4.getElementbyQuery
   5.queryselectorAll

*/

// let d=document;
// console.log(d);
// console.log(d.head);
// console.log(d.body);
// console.log(d.title="flipkart");
// console.log(d.URL);

// // getelementbyID

// let id=document.getElementById('demo');
// console.log(id);

// id.style.color="red";
// id.style.background="blue"

// // dom property
// id.innerHTML="<h1>RCB</h1>"
// // id.innerText="<h1>close win</h1>"


// // getElementsByClassName

// let myclass=document.getElementsByClassName('test2');
// myclass[2].style.color="red"


// // getElementsByTagName
// let tagname=document.getElementsByTagName('section');
// console.log(tagname);

// tagname[2].style.color="red"

let query=document.querySelector('.art');
console.log(query);

let a1=[1,2]
console.log(a1);

let queryALL=document.querySelectorAll('.art');
console.log(queryALL);

console.log(Array.isArray(a1));


// creating an element

let createlem=document.createElement('nav')
console.log(createlem);


createlem.innerHTML="nav created";

createlem.id="demo";
createlem.classList="test";

let createDiv=document.createElement('div')
console.log(createDiv);

createlem.innerHTML="div created";

createlem.append(createDiv)
document.body.append(createlem)

