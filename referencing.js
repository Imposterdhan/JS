

// PRIMITIVE DATA-TYPE
// immutable or object deferencing
// associated with values

// Why Non primitive data-type is called primitive or object de-reference??  //de refer

//  In primitive datatype if one variable valuer assign to another variable there it is just copying the value
// from one to another  means if we change one variable value it doesnt affect the other
// Eg:-   
            let boy=10;
            let girl=20;
                boy=girl;
                console.log("after copying")

                console.log(boy);
                console.log(girl)

                console.log("changing one variable value ")
                girl=50;

                console.log("updated value")

                console.log(boy);
                console.log(girl)

                let MyFriend="Kiran";
                console.log(MyFriend[0]="x")
                console.log(MyFriend);



// NON-PRIMITIVE DATA-TYPE


// muttable or refferencing
// associated with the address

// Why Non primitive data-type is called non-primitive or object reference

// Because when variable is assigned to another variable there copying the address from one variable to 
// another variable both variable pointing to same memory address if we change one variable 
//  it will effect the other variable


    let obj={

           name:"dhanuuu",
           Number:3498589
    }

    let obj2={

        name:"dhaniiii",
        Number:475634
    }

    console.log(obj)
    console.log(obj2)

    obj=obj2;
    console.log("after copying")


    console.log(obj)
    console.log(obj2)

    console.log(obj.name="saluu")

    console.log("after name assigning")

    console.log(obj)
    console.log(obj2)

//------------------------------------------------------------------------

// Number datatype

    let actno=9845894.10/10;
    let actno2=9845584.10/10;
    console.log(actno,typeof actno)
    console.log(actno2,typeof actno2)

    console.log(Number.MAX_SAFE_INTEGER);
    console.log(Number.MIN_SAFE_INTEGER);


  //----  number methods  ------

  // 1.--------------------------------------1. ParseInt MEthod ---------------------------------------
  // return the Integer value

        let a=100.2
        console.log(Number.parseInt(a)) 

// // output: 100


//  --------------------------------------2. parse Float--------------------------------------------

//  parse float returns flpoating point numbers alog with integer 
//  eg:
  b=100.743
 console.log(Number.parseFloat(b)) 
//  output: 100.743



//  3. ------------------------------------- 3. is NaN ------------------------------------------------

//   true-when result is Nan
//    false-when Not a Nan

//   Example:- 
let num1=Number("RCB");
console.log(num1);
console.log(Number.isNaN())

// ------------------------------------------4. valueOf------------------------------------------------
//  returns the value of the variable
let z=834.48

console.log(z.valueOf());
//output :834.48

// ------------------------------------------5. toString-----------------------------------------------
// converts number type into the string format
let y=90;
console.log(y.toString());

//------------------------------------------6.  Fixed-------------------------------------------------
// To fixed returns the value after the decimal point   
    let x=200.450896;
    console.log(x.toFixed(5));

// ------------------------------------------7. IsInteger -------------------------------------------
// IsInteger gives a boolean value true when the value is integer otherwise is false

console.log(Number.isInteger(x))


// ------------------------------------------8. precision  -------------------------------------------

// Gives value from the start
console.log(x.toPrecision(4))
