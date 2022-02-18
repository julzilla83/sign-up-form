function validatePasswords(event){
    const password1 = document.getElementById('password');
    const password2 = document.getElementById('password2');
    const pw_error = document.querySelector('.error');
    if(password1.value !== password2.value){
        pw_error.setAttribute('data-content', '* Passwords do not match');
        event.preventDefault();
        return false;
    } else {
        pw_error.setAttribute('data-content', '');
    }
}

const form = document.getElementById('registration');
form.addEventListener('submit', (e)=>{
    validatePasswords(e);
})

// form.addEventListener('input', (e)=>{
//     validatePasswords(e);
// })