var firebaseUrl = 'https://library-c28f1-default-rtdb.firebaseio.com';

var booksContainer = document.getElementById('books-container');

var request = new XMLHttpRequest();

request.onreadystatechange = function(){
    if(this.readyState == 4){
        if(this.status == 200){
            var books = JSON.parse(this.responseText);

            for(var i = 0; i < books.length; i++) {
                var book = books[i];

                var bookDiv = document.createElement('div');
                bookDiv.classList.add('book');
                var anchor = document.createElement('a');
                anchor.href = "book.html?index=" + i;
                var img = document.createElement('img');

                img.setAttribute('src', book.slika);
                anchor.appendChild(img);
                bookDiv.appendChild(anchor);

                var bookRight = document.createElement('div');
                bookRight.classList.add('book-right');
                var bookHeader = document.createElement('div');
                bookHeader.classList.add('book-header');

                var title = document.createElement('h3');
                title.innerText = book.naziv;
                var autor = document.createElement('p');
                autor.innerText = book.autor;
                
                bookHeader.appendChild(title);
                bookHeader.appendChild(autor);
                bookRight.appendChild(bookHeader);
                var hr = document.createElement('hr');
                bookRight.appendChild(hr);


                var main = document.createElement('div');
                main.classList.add('book-main');
                
                var rate = document.createElement('div');
                rate.classList.add('radio-rate');
                var forma = document.createElement('form');
                var radio1 = document.createElement('input');
                radio1.type = 'radio';
                radio1.name = 'rate';
                radio1.value = '1';
                var radio2 = document.createElement('input');
                radio2.type = 'radio';
                radio2.name = 'rate';
                radio2.value = '2';
                var radio3 = document.createElement('input');
                radio3.type = 'radio';
                radio3.name = 'rate';
                radio3.value = '3';
                var radio4 = document.createElement('input');
                radio4.type = 'radio';
                radio4.name = 'rate';
                radio4.value = '4';
                var radio5 = document.createElement('input');
                radio5.type = 'radio';
                radio5.name = 'rate';
                radio5.value = '5';



                forma.appendChild(radio1);
                forma.appendChild(radio2);
                forma.appendChild(radio3);
                forma.appendChild(radio4);
                forma.appendChild(radio5);

                var mark = document.createElement('p');
                mark.innerText = book.ocena + '/5';
                
               
                rate.appendChild(forma);
                rate.appendChild(mark);
                main.appendChild(rate);

                var price = document.createElement('div');
                price.classList.add('price');

                var number = document.createElement('h2');
                number.innerText = book.cena;

                var valute = document.createElement('p');
                valute.innerText = 'rsd';

                price.appendChild(number);
                price.appendChild(valute);

                main.appendChild(price);

                

                var buttonsContainer = document.createElement('div');
                buttonsContainer.classList.add('bookBtn-container');

                var wishlist = document.createElement('button');
                wishlist.classList.add('blackButton');
                wishlist.name = 'addWishlist';
                wishlist.innerText = 'Add to wishlist';

                buttonsContainer.appendChild(wishlist);

                var add = document.createElement('button');
                add.classList.add('blueButton');
                add.name = 'addCartBtn';
                add.innerText = 'Add to cart';

                add.addEventListener('click', funcCart);
                add.myParam = book;

                wishlist.addEventListener('click', funcWishlist);
                wishlist.myParam = book;


                buttonsContainer.appendChild(add);
                
                
                main.appendChild(buttonsContainer);
                bookRight.appendChild(main);

                bookDiv.appendChild(bookRight);
                booksContainer.appendChild(bookDiv);
            }
        }
    }
}

request.open('GET', firebaseUrl + '/knjige.json');
request.send();

var userBtn = document.getElementById('users');
userBtn.addEventListener('click', function(){
    window.location = 'usersList.html';
});
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

