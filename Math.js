 let math=Math;
 console.log(math);
 
  console.log(math.min(100,10));
  console.log(math.max(100,10));
  console.log(math.PI);
  console.log(math.round(100.4));
  console.log(math.ceil(100.2));  //top value or next value 101
  console.log(math.floor(100.3));// base value- here 100
  console.log(math.random());
  
    let otp=(Math.ceil(Math.random()*100000).toString(30));
    console.log(otp);
    
//  alert(otp)

console.log(math.SQRT2);
console.log(math.sqrt(25));
console.log(math.cbrt(10));
console.log(math.pow(2,3));

  
  let n=new Boolean();
  console.log(n,typeof n)
  

  let arr=[]
  console.log(arr,typeof arr);
  
//    date

let date=new Date();
console.log(date,typeof date)

console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getMinutes());
console.log(date.getSeconds());

// set the date


let setDate=new Date(2025,3,25,8,25,40)
console.log(setDate);


// time object

// setTimeout(()=>{

//     console.log("i will execute after 5 seconds");
    
// },5000)


// setInterval(()=>{

//     console.log("interval");
//     console.log("after evry two seconds");
    
    
// },2000)


function genOtp()
{
    return  (math.floor(math.random()*10000))
}
let otp1=genOtp();
console.log(otp1);

  