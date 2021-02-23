'use strict';

const numberOfFilms = +prompt("Сколько фильмов посмотрели?", "");

const a = prompt("КАкой фильм смотрели?", "");
const b = prompt("Насколько оцените его?", "");
const c = prompt("КАкой фильм смотрели?", "");
const d = prompt("Насколько оцените его?", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);