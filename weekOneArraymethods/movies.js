/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
getTheMinutes =(duration) => {

  if (typeof duration === "number") return duration

  if (duration.indexOf("h") === -1) {
     return parseInt(duration.slice(0, duration.indexOf("min")))
 } else if (duration.indexOf("min") === -1) {
     return parseInt(duration.slice(0, duration.indexOf("h"))) * 60
 } else {
     let minutes = parseInt(duration.slice(0, duration.indexOf("h"))) * 60 + parseInt(duration.slice(duration.indexOf(" "), duration.indexOf("min")))
     return minutes
 }
}

turnHoursToMinutes = (moviesCollection) => {
  return moviesCollection.map(function (movie) {
      let movieCopy = { ...movie };
      movieCopy.duration = getTheMinutes(movie.duration);
      return movieCopy;
  })
}

// Get the average of all rates with 2 decimals 
ratesAverage = (movieArr) =>{
  let rates = movieArr.map(movie => {
    return parseFloat(movie.rate);
  })
  
  let rateSum = rates.reduce((a,b) => {
    if(isNaN(b)){
      return a;
    }
    return a + b;
  })

  return Math.round(100 * rateSum / rates.length, 2) / 100
}



// Get the average of Drama Movies

dramaMoviesRate = (movieArr) => {

  let dramaMovies =[];
  movieArr.map(movie => {
    if(movie.genre.includes("Drama")){
      dramaMovies.push(movie);
    }else{
      return undefined;
    }
  })
  if (dramaMovies.length === 0) return undefined;
 return ratesAverage(dramaMovies);
}

// Order by time duration, in growing order
orderByDuration = (movieArr) => {
  let updatedMovieArr = turnHoursToMinutes(movieArr);
  return updatedMovieArr.sort( (a,b) => {
    if(a.duration > b.duration){
      return 1;
    };
    if(a.duration < b.duration){
      return -1;
    }
    if(a.duration === b.duration){
      if(a.title > b.title){
        return 1;
      }else if( a.title < b.title){
        return -1;
      } else {
        return 0;
      }
    }
  })
}



// How many movies did STEVEN SPIELBERG

howManyMovies = (movieArr) => {
  let dramaMovies =[];
  movieArr.map(movie => {
    if(movie.genre.includes("Drama")){
      dramaMovies.push(movie);
    }else{
      return undefined;
    }
  })
  if (dramaMovies.length === 0) return undefined;

  let product = dramaMovies.filter(movie => {
    return movie.director.indexOf('Steven Spielberg') !== -1;
   });

  let amountDirected = product.length;
  if(amountDirected === 0) return  `Steven Spielberg directed ${amountDirected} drama movies!`
 

  return `Steven Spielberg directed ${amountDirected} drama movies!`


}


