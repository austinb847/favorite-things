$(document).ready(function() {
  $("form#favThings").submit(function (event) {
    var color = $("#color").val();
    var num = parseInt($("#num").val());
    var season = $("#season").val();
    var car = $("#car").val();
    var favoriteThings = [color, num, season, car];

    var newThings = [];
    var secondElem = favoriteThings[1];
    var firstElem = favoriteThings[0];
    var thirdElem = favoriteThings[2]; 
    newThings.push(secondElem);
    newThings.push(firstElem);
    newThings.push(thirdElem);
    console.log(newThings);
    
    
    
    
    
    event.preventDefault();
  });
});