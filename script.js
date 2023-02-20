const numberOfFilms = prompt ("Сколько фильмов вы уже посмотрели?", "");

let PersonalMovieDB = {
  count:numberOfFilms,
  movies:{},
  actors:{},
  genres:[],
  privat:false
};

const lastFilm = prompt("Один из последних просмотренных фильмов?","");
const ratingFilm = prompt ("На сколкьо оцените его?", "");

PersonalMovieDB.movies.lastMovie = lastFilm;
PersonalMovieDB.movies.ratingMovie = ratingFilm;
console.log(PersonalMovieDB); 