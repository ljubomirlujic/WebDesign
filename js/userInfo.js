var firebaseUrl = 'https://library-c28f1-default-rtdb.firebaseio.com';
var userContainer = document.getElementById('user-container');


var paramString = window.location.href.split('?')[1]; 
var queryString = new URLSearchParams(paramString); 
  
var index = '';
for (var pair of queryString.entries()) { 
    index = pair[1];
} 


var pSname = document.getElementById('pSname');
pFname.style.fontWeight = 'bold';

var pSsurname = document.getElementById('pSsurname');
pFsurname.style.fontWeight = 'bold';

var pSemail = document.getElementById('pSemail');
pFemail.style.fontWeight = 'bold';

var pSusername = document.getElementById('pSusername');
pFusername.style.fontWeight = 'bold';

var pSphone = document.getElementById('pSphone');
pFphone.style.fontWeight = 'bold';

var pSadress = document.getElementById('pSadress');
pFadress.style.fontWeight = 'bold';

var pSbirthDate = document.getElementById('pSbirthDate');
pFbirthDate.style.fontWeight = 'bold';



var request = new XMLHttpRequest();

request.onreadystatechange = function(){
    if(this.readyState == 4){
        if(this.status == 200){
            var users = JSON.parse(this.responseText);

            var user = users[index];

            pSname.innerText = user.ime;
            pSsurname.innerText = user.prezime;
            pSemail.innerText = user.email;
            pSusername.innerText = user.username;
            pSphone.innerText = user.telefon;
            pSadress.innerText = user.adresa;
            pSbirthDate.innerText = user.datumRodjenja;

            
        }
    }
}



request.open('GET', firebaseUrl + '/korisnici.json');
request.send();

var deleteBtn = document.getElementById('deleteBtn');
var cancelBtn = document.getElementById('cancelBtn');
var editBtn = document.getElementById('editBtn');

deleteBtn.addEventListener('click', function(){
    var rezultat = confirm('Do you want to delete user?');
    if(rezultat){
        console.log('You have deleted users')
    }
});

editBtn.addEventListener('click', function(){
    window.location = 'editUser.html?index=' + index;
});

cancelBtn.addEventListener('click', function(){
    window.location = 'usersList.html';
});



