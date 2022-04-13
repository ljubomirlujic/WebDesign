var firebaseUrl = 'https://library-c28f1-default-rtdb.firebaseio.com';

var loginContainer = document.getElementById('login-container');
var loginBtn = document.getElementById('loginBTN');
var registerBtn = document.getElementById('registerBTN');
var loginForm = document.getElementById('login-form');
var logged =  document.getElementById('log-info');

loginForm.addEventListener('submit', function(e){
   e.preventDefault();
    var username = document.getElementById('uname').value.trim();
    var password = document.getElementById('pass').value.trim();

    if(username == '' || password == ''){
        alert('Empty fields');
    }

    else{
        var request = new XMLHttpRequest();
        request.onreadystatechange = function(){
            if(this.readyState == 4){
                if(this.status == 200){
                    var users = JSON.parse(this.responseText);
                    var ulogovan = '';
                    for(var i = 0;i < users.length; i++){
                        var user = users[i];

                        if(user.username == username && user.password == password){
                            ulogovan = username;
                            break;
                        }
                    }
                    if(ulogovan == ''){
                        alert('Wrong login info');
                    }
                    else{
                        registerBtn.style.display = 'none';
                        loginBtn.style.display = 'none';
                        window.location = 'index.html?user=' + user.username;
                        // logged.style.display = 'block';
                        // logged.innerText = 'Logged: ' + username;
                        console.log('You have successfully logged in');
                        alert('You have successfully logged in');
                        loginContainer.style.display = 'none';
                        
                    }
                }
            }
        }  
        request.open('GET', firebaseUrl + '/korisnici.json');
        request.send();  
    }
});





loginBtn.addEventListener('click', function(e){
            e.stopPropagation();
            loginContainer.style.display = 'block';
});
    
loginContainer.addEventListener('click', function(e){
    e.stopPropagation();
});
document.body.addEventListener('click', function(e){
    e.stopPropagation();
        loginContainer.style.display = 'none';
    });