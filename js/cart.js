var firebaseUrl = 'https://library-c28f1-default-rtdb.firebaseio.com';

var itemsContainer = document.getElementById('items-container');
var sumPrice = document.getElementById('sumPrice');

var myStorage = window.localStorage;
var request = new XMLHttpRequest();

var lista = JSON.parse(myStorage.getItem('lista'));
var priceSum = 0;
if(lista != null){
    for(var i = 0; i < lista.length; i++) {
        var book = lista[i];

        var item = document.createElement('div');
        item.classList.add('item');
        var itemInfo = document.createElement('div');
        itemInfo.classList.add('item-info');
        var itemImg = document.createElement('div');
        itemImg.classList.add('item-img');

        var img = document.createElement('img');
        img.setAttribute('src', book.slika);

        itemImg.appendChild(img);
        itemInfo.appendChild(itemImg);

        var infoText = document.createElement('div');
        infoText.classList.add('info-text');
        var nameBook = document.createElement('h3');
        nameBook.innerText = book.naziv;
        var autor = document.createElement('p');
        autor.innerText = book.autor;
        var hr = document.createElement('hr');
        
        infoText.appendChild(nameBook);
        infoText.appendChild(autor);
        infoText.appendChild(hr);
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
        
    
        infoText.appendChild(forma);
        infoText.appendChild(mark);

        var price = document.createElement('div');
        price.classList.add('price');

        

        itemInfo.appendChild(infoText);
        item.appendChild(itemInfo);

        var checkout = document.createElement('div');
        checkout.classList.add('item-checkout');

        var price = document.createElement('h3');
        price.innerText = book.cena  + 'rsd';

        var remove = document.createElement('button');
        remove.classList.add('removeButton');
        remove.name = 'removeBtn';
        remove.innerText = 'remove';

        remove.addEventListener('click', deleteFunc);
        remove.myParam = book;

        checkout.appendChild(price);
        checkout.appendChild(remove);
        
        item.appendChild(checkout);
        itemsContainer.appendChild(item);
        itemsContainer.appendChild(hr);
        priceSum += book.cena;
    }
}
sumPrice.innerText = priceSum + ' rsd';

function deleteFunc(evt){
    var result = confirm('Do you want to remove book');
    if(result){
        var lista = JSON.parse(localStorage.getItem('lista'));
        var index = lista.findIndex(x => x.isbn ===evt.currentTarget.myParam.isbn);
        delete lista[index];
        lista = lista.filter(Boolean);
        localStorage.setItem('lista', JSON.stringify(lista));
        location.reload();
    }
}
