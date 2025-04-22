// Stack and heap Memory
// variables are being stored in stack memory 
// objects are being stored in heap memory
//   
// SPLICE

//  let mycart=["samsung","hp","dell","lenovo"]
//  console.log(mycart)

//  console.log(mycart.splice(1,1,"hii"));
//  console.log(mycart);


//   Some 

// let someArray=[200,250,10,550];
// let some1=someArray.some((x)=>{

// //        return x>200;
// // })
// //  console.log(some1);
 

// //  let every1=someArray.every((x)=>{
// //     return x>20;
// //  } )
// // console.log(every1);

// let shopItems=[50000,10000,3000,2000];

// // let mapItems =shopItems.map((x)=>{

// //     return x*0.18+x;
// // })
// // console.log(mapItems);

// // let filterItems=shopItems.filter((y)=>{

// //        return y>30000;
// // })
// // console.log(filterItems);


// // let reduceItems=mapItems.reduce((accu,value)=>{

// //     return accu+value;
// // })
// // console.log(reduceItems);

// for(let index in shopItems)
// {
//      console.log(index);
// }
// //                              values ,indexes
// let forEach1=shopItems.forEach((value2,index) => {

//                 // indexes,values
//     console.log(index,value2);
    
    
// });


// Array destructuring

let array=["kgrg","rkk",699]

let [x,y,z]=array;

console.log(x)
console.log(y)
console.log(z)

console.log(`the name ${x} has the is ${y} olor ${z}`);




// object destructuring
let obj={

    id:1,
    name:"dabbi",
    relationship:{
        girlfriends:10
    }
}

// using interpolation
console.log(`${obj.id} has the id ${obj.name} ${obj.relationship.girlfriends}`);


let {id,name,relationship:{girlfriends}}=obj;
console.log(id);
console.log(name);
console.log(girlfriends);
console.log(`the name ${name} has id ${id} having ${girlfriends}`);

