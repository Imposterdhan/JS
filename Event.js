// function demo(){

//     document.body.style.backgroundColor="red";

// }

// let a=document.getElementById('demo')

// a.onclick=()=>{

//     document.body.style.backgroundColor="yellow";

// }


// let b=document.querySelector('button')
// b.addEventListener('click',()=>{

//     document.body.style.backgroundColor="pink";
// })


// every time i click background color should change

let a=document.getElementById('demo')

a.onclick=()=>{

    // a.body.style.backgroundColor="red";
    a.style.backgroundColor = changecolor();
}

function changecolor(){

    let color=['blue','yellow','goldenrod',"hotpink"];

    return color[Math.floor(Math.random()*color.length)]
}

