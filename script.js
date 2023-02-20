const numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
  count:numberOfFilms,
  movies:{},
  actors:{},
  genres:[],
  privat:false
};

const lastFilm = prompt("Один из последних просмотренных фильмов?","");
const ratingFilm = prompt ("На сколкьо оцените его?", "");
const lastFilm2 = prompt("Один из последних просмотренных фильмов?","");
const ratingFilm2 = prompt ("На сколкьо оцените его?", "");

personalMovieDB.movies[lastFilm] = ratingFilm;
personalMovieDB.movies[lastFilm2] = ratingFilm2;
console.log(personalMovieDB);