"use strict";

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    'private': 'boolean',
};

for (let i = numberOfFilms; i === '' || numberOfFilms === null; i = numberOfFilms) {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');
}

// нельзя ответить пустой строкой, отменить ответ или ввести название длинее 50 символов

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

// 

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count < 31) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    console.log("Пошёл нахуй с ревиева");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);