"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start() {
        let {count} = personalMovieDB;
        count = +prompt('Сколько фильмов вы уже посмотрели?','');
    
        while (count == '' || count == null || isNaN(count)) {
            count = +prompt('Сколько фильмов вы уже посмотрели?','');
        }
        personalMovieDB.count = count;
    },
    showMyDB({'private': hidden} = personalMovieDB) {
        if  (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDb() {
        if (this.private) {
            this.private = false;
        } else {
            this.private = true;
        }
    },
    writeYourGenres() {
        for (let i = 1; i < 2; i++) {
            let genres = prompt('Введите ваши любимые жанры через запятую\n(Минимум четыре символа)', '').toLowerCase();
            if (genres == null || genres.trim() === '' || genres.length < 4 || genres.split(', ').length < 1) {
                console.log(`Введены некорректные данные`);
                i--;
            } else {
                personalMovieDB.genres = genres.trim().split(', ');
                personalMovieDB.genres.sort();
            }
        }

        // each genre new prompt 
        // let {genres} = personalMovieDB;
        // for (let i = 0; i < 3; i++) {
        //     genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}:`, '');
        //     if (genres[i] === null || genres[i] === undefined || genres[i].trim() === '' ) {
        //         i--;
        //     } 
        // }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i + 1} - это ${item} `);
        });
    },
    detectPersonalLevel () {
        let {count} = personalMovieDB;
        if (count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (count < 31) {
            console.log("Вы классический зритель");
        } else if (count > 30) {
            console.log("Пошёл нахуй с ревиева");
        } else {
            console.log("Произошла ошибка");
        }
    },
    rememberMyFilms () {
        for (let i = 0; i < 2; i++) {   
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
            if ( a === null || a.trim() === '' || a.length > 50 || b === null || b.trim() === '') {
                console.log('error');
                i--;
            } else {
                personalMovieDB.movies[a] = b;
                console.log('done');    
            }
        }
    }
};
// personalMovieDB.toggleVisibleMyDb();
// personalMovieDB.start();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.writeYourGenres();
// personalMovieDB.rememberMyFilms();
personalMovieDB.showMyDB();

