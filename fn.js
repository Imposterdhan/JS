// IIFE-Immediate invoking fn expression 
// used to call immediate

// (function()
// {
//      console.log("hii")
// })
// ();


// //call back funtion 
// // it is a functioin which is passed as an argument as another function,that passed function is called as callback function.
// // here y is an call back function and  x is a higher order function.          
// //the function which accepts another function  as an argument that function is called as higher order function.

// Higher order 
// function x(name,callback)
// {
//     console.log(`${name} has no shape`);
//     callback(name);
// }

// function y(name)
// {
//     console.log(`${name} has no taste`);

// }
// x("water",y) 

// function w(j,p)
// {
//    console.log(j);
// //    console.log(p);
//    p("hbihb")
   
   
// }

// function s(k)
// {
//    console.log(k);
   
// }

// w("xxx",s)



//first class function
// the function which is passed as an value to the variable that pased function called as  first class function.
// hear x is a first class function.

//Nested function.
//A function inside another function is called as nested function.
// in the nested function we can achive
//closure concept.
//lexical scoping.
//this concepts is nothing but the inner function can access the outer function variables.
// this concepts is used to protect the variables from outer function.


function parent() {
   
   let mom="love";
   console.log(mom);

   function child() {
      
      let chil="child love";
      console.log(chil);

   }
   
   child()
}
parent()
// child()



// the js engine executes the fn by creating the context called as fn execution context
// eg: diagram


let c=200
console.log(c);

const b=200;

function demo()
{
      var x=700;
      console.log(x);

      
}
console.log(c);

function test()
{
   const q=800;
   console.log(q); 
}
demo()
test()


console.log(c);


     