'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

for (let i = 0;i < 2; i++) {
	const quest1 = prompt("Какой последний фильм смотрели?", "");
	const quest2 = prompt("Какую оценку можете ему поставить?", "");
	if (quest1 != null && quest2 != null && quest1 != '' && quest2 != '') {
		personalMovieDB.movies[quest1] = quest2;
		alert('ok!');
	} else {
		alert("Error!");
		--i;
	}
}



