const displayMovieContainer = () => {
  const movies = document.getElementsByClassName("movie-none-container");
  Array.from(movies).forEach(function(element,index){
    console.log(index,element);
    if(index <= 2){
      element.className = "movie-show-container"
    }
  })
}
