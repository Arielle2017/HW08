//const for the google map address, so we can append the api key and query
//const mapUri = "https://maps.googleapis.com/maps/api/geocode/json?latlng=47.6098048,-122.3348018999999&key=AIzaSyAvj9VvY2BwnE5WeKWKWYmzEhqtZnO5tCA"
let circle = document.querySelector('.circle');
circle.addEventListener("click", function(){
  circle.classList.toggle('activated')
})


function getWeather(lat, lon){
const location = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=cef02c615e447123fdc7bf049f7807a8`;

  //create the container ul here:

    let request = new XMLHttpRequest()
    request.open("GET", location, true);
    request.onload = onloadFunc;
    request.onerror = onerrorFunc;
    request.send();
  }

function onloadFunc(lat, lon){
  const location = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=cef02c615e447123fdc7bf049f7807a8`;
  const response = JSON.parse(this.response);
  console.log(response);
  let ul = document.createElement("ul");
  ul.id = "listContainer";
  document.getElementById("container").appendChild(ul);

  var li = document.createElement("li");
  //if results, print most specific results as li inside ul
  const container = document.getElementById("container");
    li.innerHTML =  "The humidity of the chosen city is " + response.main.humidity +"; pressure is " +response.main.pressure + "; temperature is " +response.main.temp
    document.getElementById("listContainer").appendChild(li);
    }

function onerrorFunc(){
  //print error message as li inside ul
var li = document.createElement("li");
li.innerHTML = "Sorry, an error occurred";
document.getElementById("listContainer").appendChild(li);
}
