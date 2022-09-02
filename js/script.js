"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    }
} 

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

// нельзя ответить пустой строкой, отменить ответ или ввести название длинее 50 символов


function rememberMyFilms () {
    for (let i = 0; i < 1; i++) {   
        let a = '',
            b = '';

        for (let j = a; j === ''  || j === null || j.length > 50; j = a) {
            a = prompt('Один из последних просмотренных фильмов?', '');
        } 
        for (let j = b; j === '' || j === null; j = b){
            b = prompt('На сколько оцените его?', '');
        }
        personalMovieDB.movies[a] = b;    
    }
}

// rememberMyFilms ();

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count < 31) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("Пошёл нахуй с ревиева");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel ();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}:`, '');
    }
}

writeYourGenres ();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB (personalMovieDB.private);
