const registerForm = document.getElementById("register-form");
registerForm.addEventListener("sumbit",(event)=>{
    event.preventDefault();

    const data = {
        email: registerForm.email.value.trim(),
        password: registerForm.email.value,
    }
    console.log(data)

})