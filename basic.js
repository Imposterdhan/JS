var a=10;
console.log('bagrii boys');


//1.------  let    ----------

// only redeclaration is not possible

let beer;
beer="100ml"
console.log(beer)

// 2.  ----  var ----


//everything is possible

var corona;
corona="200ml"
console.log(corona)

var corona="300";
console.log(corona)

// 3.  ------- const  --------

// u cannot change ones fixed

// for const compulsary initialize and declare

const pi=3.14;
console.log(pi)

// var a=10;
// var a=20;
// console.log(a)  20

// const b=20   ----once give to const now b is only for const  
//     b=30      ----here bydefault var
//    console.log(b)   error

// let d=10;
// var d=100;
// console.log(d)  error

// var b
// let b=10
// console.log(d)

// const c=100
// const d=100+c
// console.log(d,c)  200,100


// we can reinitialize variables but not redeclare
// good practice is use let and const
// why we wont use var bczit waste space allocates diff diff memory for same space