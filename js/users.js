var firebaseUrl = 'https://library-c28f1-default-rtdb.firebaseio.com';

var table = document.getElementById('table-body');

var request = new XMLHttpRequest();

request.onreadystatechange = function(){
    if(this.readyState == 4){
        if(this.status == 200){
            var users = JSON.parse(this.responseText);
            for(var i = 0;i < users.length; i++){
                var user = users[i];


                var row = document.createElement('tr');
                var celNum = document.createElement('td');
                celNum.innerText = i+1;
                var celName = document.createElement('td');
                celName.innerText = user.ime;
                var celSurname = document.createElement('td');
                celSurname.innerText = user.prezime;

                var anchor = document.createElement('a');
                anchor.innerText = user.username;

                anchor.setAttribute('href', 'user.html?index=' + i);

                var celUsername = document.createElement('td');
                celUsername.appendChild(anchor);
               
                var celEmail = document.createElement('td');
                celEmail.innerText = user.email;

                row.appendChild(celNum);
                row.appendChild(celName);
                row.appendChild(celSurname);
                row.appendChild(celUsername);
                row.appendChild(celEmail);

                table.append(row);
            }
        }
    }
}

request.open('GET', firebaseUrl + '/korisnici.json');
request.send();