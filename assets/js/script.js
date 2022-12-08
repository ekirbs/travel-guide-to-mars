

//Alternative 
// const weatherApiKey = "3044316f6126db93462603440b6cd43c"
// fetch(``)
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data)
//     openWeatherFetch(data[0].lat, data[0].lon)
// })
// function openWeatherFetch(lat, lon) {
//     fetch(``)
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) => {
//         console.log(data)
//     })
// }





















var parkApiKey = 'amkrsfXuAU5bolqQY0bTMOV4h2mBIOTqrRvrJVsd';

var weatherApiKey = "3044316f6126db93462603440b6cd43c";


var parks = [
  {
    parkName: 'Yellowstone',
    parkCode: "YELL",
  },
  {
    parkName: 'Acadia',
    parkCode: 'ACAD',
  },
  {
    parkName: 'The Grand Canyon',
    parkCode: 'GLCA'
  },
  {
    
  }

]
// var selectEl;
// for(var i = 0; i<parks.length; i++) {
//   var optionEl = document.createElement('option');
//   var optionId = parks[i].parkCode;
//   optionEl.setAttribute('id', optionId);
//   optionEl.textContent = parks[i].parkName;
//   selectEl.appendChild(optionEl);
// }

var park;
var city;

function displayChosenPark() {
  
  // var parkCode = 'ACAD';

  var parkApiURL = `https://developer.nps.gov/api/v1/parks?parkCode=${park}&api_key=${parkApiKey}`;

  fetch(parkApiURL)
    .then(function (response) {
      return response.json();
    })
      .then(function (data) {
        console.log(data)

        // var activities = response.activities;
        $("#park-info").empty();

        var featureCard = $("<div>");

        var description = data.data[0].description;
        console.log(description);
        

        var streetName = data.data[0].addresses[0].line1;
        var city = data.data[0].addresses[0].city;
        var zip = data.data[0].addresses[0].postalCode;
        var state = data.data[0].addresses[0].stateCode;
        console.log(streetName + ' ' + city + ' ,' + zip + ' ,' + state);
        


        var directions = data.data[0].directionsInfo;
        console.log(directions);
        

        // var activities = data.data[0].activities[0].name;
        // console.log(activities);

        var hours = data.data[0].operatingHours[0].standardHours;
        console.log(hours);

        featureCard.append("<br/>" + description);
        featureCard.append("<br/>" + streetName + ' ' + city + ' ,' + zip + ' ,' + state);
        featureCard.append("<br/>" + directions);
        featureCard.append("<br/>" + hours);

        $("#park-info").append(featureCard);
        

    });

}

// getParkApi();

function displayChosenCity() {
  
var units = "imperial";
var lang = 'en';

  var weatherApiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weatherApiKey}&units=${units}&lang=${lang}`;

  fetch(weatherApiURL)
    .then(function (response) {
      return response.json();
    })
      .then(function (data) {
        console.log(data)

        $("#weather").empty();
        
        var featureCard = $("<div>");

      var temperature = data.list[0].main.temp
      // var tempToF = ((temperature - 273.15) * 9/5 + 32).toFixed();
      

      console.log((temperature - 273.15) * 9/5 + 32);

      var windSpeed = data.list[0].wind.speed;

      console.log(windSpeed);

      var humidity = data.list[0].main.humidity;

      console.log(humidity + '%');

      featureCard.append("<br/>" + temperature + " degrees F");
      featureCard.append("<br/>" + windSpeed + " mph");
      featureCard.append("<br/>" + humidity + "% humidity");

      $("#weather").append(featureCard);


});

}

$("#acadia").on("click", function (event) {
  event.preventDefault();
  console.log("button is working");

  park = 'ACAD';
  city = 'Bar Harbor, Maine';

  displayChosenPark();
  displayChosenCity();

  let div = document.createElement("div")
  let p = document.createElement("p")
  div.append("Some text", p)

console.log(div.childNodes) // NodeList [ #text "Some text", <p>
  // cities.push(cityName);

  // renderCards();
});

$("#yellow").on("click", function (event) {
  event.preventDefault();
  console.log("button is working");

  park = "YELL";
  city = "Gardiner, Montana";

  displayChosenPark();
  displayChosenCity();


  // cities.push(cityName);

  // renderCards();
});

$("#grand").on("click", function (event) {
  event.preventDefault();
  console.log("button is working");

  park = "GLCA";
  city = "Tusayan, Arizona";

  displayChosenPark();
  displayChosenCity();


  // cities.push(cityName);

  // renderCards();
});

$("#rockies").on("click", function (event) {
  event.preventDefault();
  console.log("button is working");

  park = "ROMO";
  city = "Denver, Colorado";

  displayChosenPark();
  displayChosenCity();


  // cities.push(cityName);

  // renderCards();
});



// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.dropdown-trigger');
//   var instances = M.Dropdown.init(elems, options);
// });

// Or with jQuery

$('.dropdown-trigger').dropdown();

// function getWeatherApi();


// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.carousel');
//     var instances = M.Carousel.init(elems, options);
//   });

// $(".search-btn").on("click", function (event) {
//   event.preventDefault();
//   console.log("button is working");

//   var cityName = $("#search-input").val().trim();

//   displayChosenCity();
//   displayChosenPark();

//   // cities.push(cityName);

//   // renderCards();
// });

// $(document).on('click', '#search-btn #search-history', displayChosenCity);
// $(document).on("click", ".search-btn", displayChosenCity);

// $(document).on("click", ".search-btn", displayChosenPark);

// acadia ACAD
// yellowstone YELL
// grand canyon GLCA
// rocky mountain ROMO

