const displayMovieContainer = () => {
  const movies = document.getElementsByClassName("movie-container");
  Array.from(movies).forEach(function(element,index){
    if(index <= 4){
      element.className = "movie-show-container"
    }
  })
}
