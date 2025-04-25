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

let d=document;
console.log(d);
console.log(d.head);
console.log(d.body);
console.log(d.title="flipkart");
console.log(d.URL);

// getelementbyID

let id=document.getElementById('demo');
console.log(id);

id.style.color="red";
id.style.background="blue"

// dom property
id.innerHTML="<h1>RCB</h1>"
// id.innerText="<h1>close win</h1>"


let myclass=document.getElementsByClassName('test2');
myclass[2].style.color="red"

let tagname=document.getElementsByTagName('section');
console.log(tagname);

tagname[2].style.color="red"


