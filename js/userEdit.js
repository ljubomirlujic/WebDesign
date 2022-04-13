var firebaseUrl = 'https://library-c28f1-default-rtdb.firebaseio.com';
var userContainer = document.getElementById('user-container');

var container = document.getElementById('container');

var paramString = window.location.href.split('?')[1]; 
var queryString = new URLSearchParams(paramString); 
  
var index = '';
for (var pair of queryString.entries()) { 
    index = pair[1];
} 

var inpName = document.getElementById('name');
var surname = document.getElementById('surname');
var email = document.getElementById('email');
var username = document.getElementById('username');
var date = document.getElementById('date');
var number = document.getElementById('number');
var adress = document.getElementById('adress');


var request = new XMLHttpRequest();

request.onreadystatechange = function(){
    if(this.readyState == 4){
        if(this.status == 200){
            var users = JSON.parse(this.responseText);

            var user = users[index];
            inpName.value = user.ime;
            surname.value = user.prezime;
            email.value = user.email;
            username.value = user.username;
            date.value = user.datumRodjenja;
            number.value = user.telefon;
            adress.value = user.adresa;

           
        
        }
        
    }
}
var form = document.getElementById('form1');
form.addEventListener('submit', function(e){
    e.preventDefault();

    var valid = true;

    if(inpName.value == ''){ 
        console.log("Name can't be empty");
        valid = false;
    }
    if(surname.value == ''){ 
        console.log("Surname can't be empty");
        valid = false;
    }  
    if(!isValid(email.value)){ 
        console.log("Invalid email format");
        valid = false;
    }  
    if(date.value == null){ 
        console.log("Date can't be empty");
        valid = false;
    }  
    if(number.value == ''){ 
        console.log("Number can't be empty");
        valid = false;
    }  
    if(adress.value == ''){ 
        console.log("Adress can't be empty");
        valid = false;
    }    

    if(valid){
        console.log('You have successfully made changes')
    }
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

var cancelBtn = document.getElementById('cancelBtn');
cancelBtn.addEventListener('click', function(){
 window.location = 'user.html?index=' + index;
});



request.open('GET', firebaseUrl + '/korisnici.json');
request.send();