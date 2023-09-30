// document.getElementById('submit').addEventListener('click', loadElement);

// function loadElement() {

    
// let http = new XMLHttpRequest();

// http.open('GET', 'https://api.openweathermap.org/data/2.5/weather?lat=35&lon=36&appid=37092700bb2372d05494f05bcd0f10db', true);

// http.onload = function(){
//     if(this.status == 200){;
//         console.log(this.responseText);
//     }
// }

// http.send();
// }


document.getElementById('submit').addEventListener('click', loadElement);

function loadElement() {
    let http = new XMLHttpRequest();

    http.open('GET', 'https://igboapi.com/api/v1/words?keyword=hello&strict=false&dialects=true&examples=true&isStandardIgbo=true&pronunciation=false&nsibidi=false', true);

    http.setRequestHeader('X-API-Key', '465ef4c9-1935-42be-a5d7-5d7d3e299f3a');

    http.onload = function(){
        if(this.status == 200){;
            console.log(this.responseText);
        }
    }

    http.send();
}
