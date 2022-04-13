var firebaseUrl = 'https://library-c28f1-default-rtdb.firebaseio.com';


var paramString = window.location.href.split('?')[1]; 
var queryString = new URLSearchParams(paramString); 
  
var index = '';
for (var pair of queryString.entries()) { 
    index = pair[1];
} 

var title = document.getElementById('title');
var autor = document.getElementById('autor');
var isbn = document.getElementById('isbn');
var publisher = document.getElementById('publisher');
var price = document.getElementById('price');
var pages = document.getElementById('pages');
var year = document.getElementById('year');
var writting = document.getElementById('writting');
var language = document.getElementById('language');
var cover = document.getElementById('cover');
var rating = document.getElementById('rating');

var image = document.getElementById('image');



var request = new XMLHttpRequest();

request.onreadystatechange = function(){
    if(this.readyState == 4){
        if(this.status == 200){
            var books = JSON.parse(this.responseText);

            book = books[index];

            image.setAttribute('src', book.slika);
            title.innerText = book.naziv;
            autor.innerText = book.autor;
            isbn.innerText = book.isbn;
            publisher.innerText = book.izdavackaKuca;
            price.innerText = book.cena;
            pages.innerText = book.brojStranica;
            year.innerText = book.godinaIzdavanja;
            writting.innerText = book.pismo;
            language.innerText = book.jezik;
            cover.innerText = book.tipPoveza;
            rating.innerText = book.ocena;

           
            addBtn.myParam = book;
            wishlist.myParam = book;
        }
    }
}



request.open('GET', firebaseUrl + '/knjige.json');
request.send();

wishlist = document.getElementById('addWishlistBtn');
addBtn = document.getElementById('addCartBtn');
editBtn = document.getElementById('editBtn');

editBtn.addEventListener('click', function(){
    window.location = 'editBook.html?index=' + index;
});

addBtn.addEventListener('click', funcCart);
wishlist.addEventListener('click', funcWishlist);


function funcCart(evt){
    var result = confirm("Add to cart");
    if(result == true){
    var lista = JSON.parse(localStorage.getItem('lista'));
    if(lista == null){
        lista = [];
        lista.push(evt.currentTarget.myParam);
        localStorage.setItem('lista', JSON.stringify(lista));
    }
    else{
    lista.push(evt.currentTarget.myParam);
    localStorage.setItem('lista', JSON.stringify(lista));
    }

    console.log(localStorage);
    }
}

function funcWishlist(evt){
    var result = confirm("Add to wishlist");
    if(result == true){
    var lista = JSON.parse(localStorage.getItem('lista'));
    if(lista == null){
        lista = [];
        lista.push(evt.currentTarget.myParam);
        localStorage.setItem('lista', JSON.stringify(lista));
    }
    else{
    lista.push(evt.currentTarget.myParam);
    localStorage.setItem('lista', JSON.stringify(lista));
    }

    console.log(localStorage);
    }
}

   