// Password 
const eye = document.querySelector('.fa-eye');
const eyeSlash = document.querySelector('.fa-eye-slash');
const password = document.querySelector('.btn-password')

const clearBtn = document.querySelector('.fa-circle-xmark');
const input = document.getElementById("input");
clearBtn.addEventListener('click', function(c){
    let answer = input.value;
    input.value = "";
    clearBtn.style.display = 'none';
})

input.addEventListener("input", function() {
    clearBtn.style.display = 'inline-block';
  });


eyeSlash.addEventListener('click', function(e){
    eyeSlash.style.display = 'none'
    eye.style.display = "inline"
    password.type = 'password'
})

eye.addEventListener('click', function(e){
    eye.style.display = 'none'
    eyeSlash.style.display = "inline"
    password.type = 'text'
})
