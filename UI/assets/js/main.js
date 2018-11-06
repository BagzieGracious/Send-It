var lgn = document.getElementById("login-wrapper");
var sgn = document.getElementById("signup-wrapper");
lgn.style.display = "none";
sgn.style.display = "none";

function login(){
    lgn.style.display = "block";
}

function signin(){
    var username = document.getElementById("login-username");
    var password = document.getElementById("login-password");
    var error = document.getElementById("login-error");

    if( username.value == '' || password.value == ''){
        error.innerHTML = "<strong>Error! </strong> no empty field is allowed";
        error.style.display = "block";

        setTimeout(function(){
            error.style.display = "none";
        }, 3000)
    }else{
        if (username.value == 'admin' && password.value == 'admin'){
            window.location.href = "pages/admin/home.html";
        }else{
            window.location.href = "pages/user/order.html";
        }
    }
}

function signup(){
    sgn.style.display = "block";
}

function adduser(){
    var usr = document.getElementById("sign-username");
    var ful = document.getElementById("sign-fullname");
    var eml = document.getElementById("sign-email");
    var pas = document.getElementById("sign-password");
    var error = document.getElementById("sign-error");

    if(usr.value == '' && ful.value == '' && eml.value == '' && pas.value == ''){
        error.innerHTML = "<strong>Error! </strong> No empty field is allowed";
        error.style.display = "block";

        setTimeout(function(){
            error.style.display = "none";
        }, 3000)
    }else{
        error.innerHTML = "<strong>Info! </strong> Thank you for registering.";
        error.style.background = "#16a085";
        error.style.display = "block";

        setTimeout(function(){
            error.style.display = "none";
        }, 3000)
    }
}

function changedesination(){
    lgn.style.display = "block";
}

function changelocation(){
    sgn.style.display = "block";
}

function changed(){
    var dest = document.getElementById("destination");
    var area = document.getElementById("area")
    area.innerHTML = dest.value;
    lgn.style.display = "none";
}

function cls(){
    lgn.style.display = "none";
    sgn.style.display = "none";
}