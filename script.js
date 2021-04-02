const form = document.getElementById('form');
// const form = document.querySelector('#form');

// const firstName = document.getElementById('FirstName');
// const lastName = document.getElementById('LastName');
const inputs = document.querySelectorAll('.formBox input');

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('form submitted');

    inputs.forEach(function(input){
        console.log('input.value');
          if(!input.value){
            input.parentElement.classList.add('error');
            console.log('not all values inserted');
            
        }
        else
        {
            input.parentElement.classList.remove('error');
            console.log('all values inserted');
        }
    });
});

//taken from chromium
function validateEmail (email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}



