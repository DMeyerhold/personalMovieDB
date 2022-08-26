// "use strict";

window.addEventListener('DOMContentLoaded', function() {
    let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?',''),
    watchedMovie = '',
    personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        'private': 'boolean',
    };

    
    for (let i = 0, f = prompt('Сколько фильмов вы хотите оценить?', ''); i < f; i++) {   
        watchedMovie = prompt('Один из последних просмотренных фильмов?', '');
        personalMovieDB.movies[watchedMovie] = prompt('На сколько оцените его?', '');        
    }

    console.log(personalMovieDB);
}); 

