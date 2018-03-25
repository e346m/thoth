const displayMovieContainer = () => {
  const movies = document.getElementsByClassName("movie-none-container");
  Array.from(movies).forEach(function(element,index){
    if(index <= 2){
      element.className = "movie-show-container"
    }
  })
}
