// String in JS

// Three ways
// 1.double quotes(" ")
// 2.Single quotes(' ')
// 3.Backtick(``)


let empID=11;
let empsal=100000
let empName="uma"

console.log(" employeeID "+ empID + "" +" employee Name "+empName +" employee salary "+empsal)

console.log(`theemployeeid-${empID} empsalary-${empsal} empName-${empName} `);


// BackTick also called as Template String which is used to implement the
//  interpolation -> ${}

// InterPolation Fetches the Value of the Variable     
// By using string method we can convert any datatype                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        to string

//how to  convert datatype to string

let str=String(100);
console.log(str,typeof str)

// String Methods
let str2="Hello"
console.log(str2)

// check the length

console.log(str2.length);

console.log(str2.toUpperCase())
console.log(str2.toLowerCase())

// How to reverse a string

console.log(str2.split("").reverse().join(""));

console.log(str2.replace("l","k"))

console.log(str2.replaceAll("l","k"))

console.log(str2.includes("k"))

console.log(str2.indexOf('e'));
console.log(str2.lastIndexOf('l'));

console.log(str.at(-2));
console.log(str2.charAt(2))
// charAt(-2)  No negative values

console.log(str2.startsWith('e'))
console.log(str2.endsWith('o'))

let num="5"
console.log(num.padEnd('2','8'))

console.log(num.padStart('3','6'))


let name=prompt("enter the name")
let ans=name.split("").reverse().join("");
document.writeln(ans);

 


