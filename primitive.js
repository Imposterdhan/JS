//  BigInt()
// 
//  BigInt is a primitive datatype which is used to store big numbers beyond the range of 
// 2pow(53)-1
// BigInt is denoted with a notation called n
// eg:  let a=1n;
//      let a=1n;
//      log(a,typeOf(a));
//      output:1n,bigInt

// By using BigInt fctn or method we can convert any datatype to BigInt except string



// 2.Boolean

// Boolean is a Primitive Datatype which holds true and false
// true=1 false=0
// By using Boolean fcnt we can convert one datatype to Boolean datatype
// let x=true;
// log(x.typeOf(x))
// let y=false
// log(y.typeOf(y))


//3.Null
// Null is a primitive datatype where the value doesnt exist
// The type of value is Object 
// eg: let z=null;
// log(z,typeof z)


//   Why null is bug or error in the program

//  Null behaves as primitive datatype but type of null is object non-primitive-datatype

// 4.undefined
// when the variable has absense of value ressult it as undefined 
// type of  undefined is undefined


//    null                                   undefined
// 
// absebse of object                         Object is existed
// type of null is object                    type of undefined is undefined
// Doesnt occupy space in the memomry        It has some space in the memory          

let no=Number(true);
console.log(no)


let will=Number(false);
console.log(will);

console.log(Boolean("hello"));
console.log(Boolean(0));

 
console.log(Boolean("0"));
console.log(Boolean(-100));

console.log(2==2);
console.log(5+"3" ==="5"+3)

console.log(Boolean(100)==true);
console.log(Boolean(''));

console.log(Boolean(1n))

console.log(Boolean(null))

console.log(null==1)

let num=BigInt(false);
console.log(num,typeof num);

let num2=Number(100n);
console.log(num2,typeof num2)

let num3=null;
console.log(num3,typeof num3);


let x;
console.log(x,typeof x);
