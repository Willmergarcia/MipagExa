function loguear(){
   let  username =  document.getElementById('user').value;
   let  clave =  document.getElementById('password').value;

    if(username == 'admin' && clave == '12345'){
        window.location = "../index.html"
        localStorage.setItem('islog',"true");
    }else{
        alert('Usuario o Password Incorrectos');
        localStorage.setItem('islog',"false");
    }

}



