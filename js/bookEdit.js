var firebaseUrl = 'https://library-c28f1-default-rtdb.firebaseio.com';
var userContainer = document.getElementById('user-container');


var paramString = window.location.href.split('?')[1]; 
var queryString = new URLSearchParams(paramString); 
  
var index = '';
for (var pair of queryString.entries()) { 
    index = pair[1];
} 

var form = document.getElementById('form1');

var inpTitle = document.getElementById('inpTitle');
var inpIsbn = document.getElementById('inpIsbn');
var inpAutor = document.getElementById('inpAutor');
var inpPublisher = document.getElementById('inpPublisher');
var inpAbout = document.getElementById('inpAbout');
var inpPrice = document.getElementById('inpPrice');
var inpPages = document.getElementById('inpPages');
var inpWritting = document.getElementById('inpWritting');
var inpLanguage = document.getElementById('inpLanguage');
var inpRating = document.getElementById('inpRating');
var inpYear = document.getElementById('inpYear');
var select = document.getElementById('select')

var request = new XMLHttpRequest();

request.onreadystatechange = function(){
    if(this.readyState == 4){
        if(this.status == 200){
            var books = JSON.parse(this.responseText);

            var book = books[index];

            inpTitle.value = book.naziv;
            inpIsbn.value = book.isbn;
            inpAutor.value = book.autor;
            inpPublisher.value = book.izdavackaKuca;
            inpAbout.value = book.opis;
            inpPrice.value = book.cena;
            inpPages.value = book.brojStranica;
            inpWritting.value = book.pismo;
            inpLanguage.value = book.jezik;
            inpRating.value = book.ocena;
            inpYear.value = book.godinaIzdavanja;
            select.value = book.tipPoveza;
            
        }
    }
}

var form = document.getElementById('form1');
form.addEventListener('submit', function(e){
    e.preventDefault();

    var valid = true;

    if(inpTitle.value == ''){ 
        console.log("Title can't be empty");
        valid = false;
    }
    if(inpIsbn.value == ''){ 
        console.log("Isbn can't be empty");
        valid = false;
    }  
    if(inpAutor.value == ''){ 
        console.log("Autor can't be empty");
        valid = false;
    }  
    if(inpPublisher.value == ''){ 
        console.log("Publisher can't be empty");
        valid = false;
    }  
    if(inpAbout.value == ''){ 
        console.log("About can't be empty");
        valid = false;
    }  
    if(inpPrice.value == ''){ 
        console.log("Price can't be empty");
        valid = false;
    }
    if(inpPages.value == ''){ 
        console.log("Pages can't be empty");
        valid = false;
    }   
    if(inpWritting.value == ''){ 
        console.log("Writting can't be empty");
        valid = false;
    }   
    if(inpLanguage.value == ''){ 
        console.log("Language can't be empty");
        valid = false;
    }    
    if(inpRating.value == ''){ 
        console.log("Rating can't be empty");
        valid = false;
    }       

    if(inpYear.value == ''){ 
        console.log("Year can't be empty");
        valid = false;
    }       


    if(valid){
        console.log('You have successfully made changes')
    }
});

request.open('GET', firebaseUrl + '/knjige.json');
request.send();

var deleteBtn = document.getElementById('deleteBtn');
deleteBtn.addEventListener('click', function(){
    var rezultat = confirm('Do you want to delete book?');
    if(rezultat){
        console.log('You have deleted users')
    }
});

var cancelBtn = document.getElementById('cancel');
cancelBtn.addEventListener('click', function(){
 window.location = 'book.html?index=' + index;
});


