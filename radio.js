
let form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    
    e.preventDefault();

    let genders = document.getElementsByName('gender');
                                        // genders[0]=male &genders[1]=female

         // gender[0]                           

    for (let gender of genders) {
        if (gender.checked) {        //true or false

            console.log(gender.value);
        }
    }


});
