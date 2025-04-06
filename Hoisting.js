
//Hoisting is a normal mechanism or a behaviour of js,where all the variables 
// are declared inside the js file, will move to the top of the scope before executing 
// inside the browser

// Hoisting behaviour of let, var ,const

// 1. var -hoisting behaviour 

    //   if we acces the var variable after the declaration it is undefined .
    //   if we access var variable before the declaration the interpreter sets the value as undefined.

//   console.log(a)
//   var a
//   console.log(a)
  

// 2. Let-Hoisting behviour of let variable

// if we access a let variable after the declaration it is undefined.
// if we access the let variable before the declaration it is uncaught reference error.
// because the variable is falling into the dead zone, that is temporal zone.

// it is the zone before the declaration of variables where we cant access the value of the variable

// console.log(a)
// let a
// console.log(a)

// 3.const-Hoisting behaviour of const variable

// if we access the variable after the declaration it is undefined
// if we access const variable before the declaration it is uncaught reference error
// because the variable falling into the dead zone

// console.log(a)
//  const a
//  console.log(a)

 
