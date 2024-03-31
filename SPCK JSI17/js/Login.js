const login = () => {
    let tk = document.querySelector('.name').value;
    let pass = document.querySelector('.pass').value;
    fetch(" http://localhost:3000/user")
        .then((response) => response.json())
        .then((data) => {
            for (let user of data) {
                console.log(tk,pass);
                console.log(user.tk, user.password);
                if ((tk == user.tk) && (pass == user.password)) {
                    localStorage.setItem('user', JSON.stringify(user))
                    if (user.role == 1) {
                        window.location.href = `admin(tp).html`;
                    }
                    else {
                        window.location.href = `index.html`;
                    }
                    return;

                }
            }
            alert("User not found");
        })
}
const signup = () => {
    let acc = document.querySelector('.tk').value;
    let password = document.querySelector('.password').value;
    let email = document.querySelector('.email').value;
    console.log(password);
    fetch(" http://localhost:3000/user")
        .then((response) => response.json())
        .then((data) => {
            if (acc == '' || password == '' || email == '')
            {
                alert('vui lòng nhập đầy đủ thông tin')
            } else {
                for(let user of data ) {
               
                    if ( acc == user.tk) {
                        alert('Tài khoản đã tồn tại');
                        return;
                    }
                    else {
                       
                        alert('Thanh cong');
                        return;
                    }
                
                }
            }
        } )
    }

   