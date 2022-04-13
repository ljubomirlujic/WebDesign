var registerCotainer = document.getElementById('register-container');
var formRegister = document.getElementById('form-register');
var registerBtn = document.getElementById('registerBTN');



formRegister.addEventListener('submit', function(e){
    e.preventDefault();
    var txtName = document.getElementById('name').value.trim();
    var surname = document.getElementById('surname').value.trim();
    var email = document.getElementById('email').value.trim();
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();
    var date = document.getElementById('date').value.trim();
    var number = document.getElementById('number').value.trim();
    var adress = document.getElementById('adress').value.trim();

    var valid = true;

    if(txtName == ''){ 
        console.log("Name can't be empty");
        valid = false;
    }    
    if(surname == ''){ 
        console.log("Surname can't be empty");
        valid = false;
    }  
    if(!isValid(email)){ 
        console.log("Invalid email format");
        valid = false;
    }  
    if(username == ''){ 
        console.log("Username can't be empty");
        valid = false;
    }
    else{
        var request = new XMLHttpRequest();
        request.onreadystatechange = function(){
            if(this.readyState == 4){
                if(this.status == 200){
                    var users = JSON.parse(this.responseText);
                    var exist = '';
                    for(var i = 0;i < users.length; i++){
                        var user = users[i];

                        if(user.username == username){
                            exist = username;
                            break;
                        }
                    }
                    if(exist != ''){
                        console.log('Username already exists');
                        valid = false;
                    }
                }
            }
        }  
        request.open('GET', firebaseUrl + '/korisnici.json');
        request.send();  
    }
    if(password == '' || password.length < 4){ 
        console.log("Password must be longer than 4");
        valid = false;
    }  
    if(date == ''){ 
        console.log("Date can't be empty");
        valid = false;
    }  
    if(number == ''){ 
        console.log("Number can't be empty");
        valid = false;
    }  
    if(adress == ''){ 
        console.log("Adress can't be empty");
        valid = false;
    }  
    if(valid){
        console.log('You have successfully registered')
        formRegister.reset(); 
    }

});




registerBtn.addEventListener('click', function(e){
    e.stopPropagation();
    registerCotainer.style.display = 'block';
    
});

registerCotainer.addEventListener('click', function(e){
    e.stopPropagation();
});

document.body.addEventListener('click', function(e){
    e.stopPropagation();
        registerCotainer.style.display = 'none';
});

function isValid(email){
    var valid = false;
    if(email.includes('@')){
        var splited = email.split('@');
        if(splited[1].includes('.')){
            valid = true;
        }
    }
    return valid;
}