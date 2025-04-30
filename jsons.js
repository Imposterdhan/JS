let form=document.querySelector('form');
form.addEventListener('submit',(e)=>{

    let un=document.getElementById('username').value;
    let pass=document.getElementById('pass').value;

    let gmail=document.getElementById('email').value;
    let date=document.getElementById('date').value;

e.  preventDefault();
    let gender=document.querySelectorAll('input[type="radio"]')
    gender.forEach(radio=>{

        if(radio.checked)
        {
            console.log(radio.value);
            
        }

    })


     let obj={
        un,
        pass,
        gender,
        gmail,
        date
     }

    localStorage.setItem('loginData',JSON.stringify(obj));
     alert("the data is stored successfully");


    //  get data

         let getdata=localStorage.getItem('loginData')
         if(getdata)
         {
            let data=JSON.parse(getdata);
  
            console.log(getdata.un,getdata.pass,getdata.gmail);

         }
         
         
      
     




})