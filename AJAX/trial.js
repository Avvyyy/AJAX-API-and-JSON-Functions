// document.getElementById('submit').addEventListener('click', loadFunction);

// function loadFunction(){
//     let xhttp = new XMLHttpRequest();

//     xhttp.open('GET', 'https://api.openweathermap.org/data/2.5/weather?lat=35&lon=36&appid=37092700bb2372d05494f05bcd0f10db', false);

//     xhttp.onload = function(){
//         if(this.status == 200){
//             console.log(this.responseText);
//         }
//     }

//     xhttp.onerror = function(){
//         console.log('Request Error');
//     }

//     xhttp.send();
// }






document.getElementById('submit').addEventListener('click', loadFunction);

function loadFunction(){
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'https://igboapi.com/api/v1/words?keyword=hello&strict=false&dialects=true&examples=true&isStandardIgbo=true&pronunciation=false&nsibidi=false', true);

    xhttp.onload = function(){
        if(this.status == 200){
            console.log(this.responseText);
        }
    }

    xhttp.onerror = function(){
        console.log('Request Error');
    }

    xhttp.send();
}