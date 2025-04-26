// let btn =document.querySelector('button')

btn.onclick=()=>{
    let id =document.getElementById('u').value;
    let pas = document.getElementById('p').value;
   let div = document.querySelector('div')
   div.innerHTML=`${id} and ${pas}`
}