$(document).ready(function () {
    $("#news-slider").owlCarousel({
      items: 3,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [980, 2],
      itemsMobile: [600, 1],
      navigation: true,
      navigationText: ["", ""],
      pagination: true,
      autoPlay: true
    });
  });
  

  function sendRequest (){
    return fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => console.log(json));
  }