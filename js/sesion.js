let sesion =  localStorage.getItem('islog');


if(sesion ==  'true'){
    document.getElementById('loginopc').style.display = "none";
    document.getElementById('logoutopc').style.display = "true";
    document.getElementById('opcadminp').style.display = "true";
    document.getElementById('opcadminc').style.display = "true";
}else{
    document.getElementById('loginopc').style.display = "true";
    document.getElementById('logoutopc').style.display = "none";
    document.getElementById('opcadminp').style.display = "none";
    document.getElementById('opcadminc').style.display = "none";
}



function  cerrarSesion(){
    localStorage.setItem('islog',"false");
    if(window.location.pathname == './index.js'){
        window.location.reload();
    }else{
        window.location = "../index.html";
    }
    
}

