const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.titlesOfFilms = function () {
  return this.films.map( function(film) {
    return film.title;
  } )
};

Cinema.prototype.findByTitle = function (title) {
  let found = this.films.find( function(film) {
    return film.title === title;
  } )
  return found;
};

Cinema.prototype.genreFilter = function (genre) {
  let found = this.films.filter( film => film.genre === genre );
  return found;
};

Cinema.prototype.filmFromYear = function (year) {
let result = null;
let filmArray = [];
filmArray = this.films.filter(film => film.year === year);
if (filmArray.length > 0) {
  result = true;
} else {
  result = false;
}
return result;
};

Cinema.prototype.allFilmsOver = function (time) {
let result = null;
let filmArray = [];
filmArray = this.films.filter(film => film.length <= time);
if (filmArray.length > 0) {
  result = false;
} else {
  result = true;
}
return result;
};

Cinema.prototype.totalRunningTime = function () {
  let result = this.films.reduce((totalTime, film) => totalTime + film.length, 0);
  return result;
};
module.exports = Cinema;
