angular.module('boot')
  .service('dataService', function () {
    var movies = [{
        title: 'Dark Knight',
        rating: 4
      },
      {
        title: 'Wait Until Dark',
        rating: 5
      },
      {
        title: 'Inception',
        rating: 4
      }
    ]

    this.getMovies = function () {
      var existingMovies = JSON.parse(localStorage.getItem('myMovies'));
      if (!existingMovies) {
        localStorage.setItem('myMovies', JSON.stringify(movies));
        existingMovies = movies;
      }
      return existingMovies;
    }

    this.addMovie = function (movie) {
      var existingMovies = JSON.parse(localStorage.getItem('myMovies'));
      existingMovies.push(movie);
      localStorage.setItem('myMovies', JSON.stringify(existingMovies));
      return existingMovies;
    }
  })
