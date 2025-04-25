/*  closure and lexical scope aree achived in nested function 

   Closure -is a function which holds the value of reference
   variable even  though that fn is exited from the callstack.


    lexical-scope is a scope which searches a variable in the current scope
    if not searches in outer scope

    

*/

function  counter()
{
   let count=0;
   return function()
   {
        count++;
        console.log(count);
   
   }   
}
let count=counter()
count()
count()
count()
count()
// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());


