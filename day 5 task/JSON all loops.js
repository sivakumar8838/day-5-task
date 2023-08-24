// JSON...for loop

let XMLHttpRequest = require('xhr2');
let a = new XMLHttpRequest();
a.open('GET', 'https://restcountries.com/v3.1/all');
a.onload = function () {
    let results = JSON.parse(a.responseText);
    for (let i=0; i<results.length; i++) {
        console.log(results[i].flag);
    }
}
a.send();


// JSON...for of loop

let XMLHttpRequest = require('xhr2');
let a = new XMLHttpRequest();
a.open('GET', 'https://restcountries.com/v3.1/all');
a.onload = function () {
    let sk = JSON.parse(a.responseText);
    for (let result of sk) {
        console.log(result.flag);

    }
}
a.send();

// JSON...for in loop

let XMLHttpRequest = require('xhr2');
let a = new XMLHttpRequest();
a.open('GET', 'https://restcountries.com/v3.1/all');
a.onload = function () {
    let sk = JSON.parse(a.responseText);
    for (let x in sk) {
        console.log(sk[x].flag);

    }
}
a.send();

//JSON...forEach loop

let XMLHttpRequest = require('xhr2');
let a = new XMLHttpRequest();
a.open('GET', 'https://restcountries.com/v3.1/all');
a.onload = function () {
    let sk = JSON.parse(a.responseText);
   sk.forEach(x => console.log(x.flag))
}
a.send();
