
//test lat and lon for Phoenix (testing purposes)
// lat = 33.5511156
// lon = -112.1323174

// Get the form element
const form = document.querySelector('form');

// Add event listener for form submission (WIP)
// form.addEventListener('submit', (event) => {

// });


// create info card for spefific trail when clicked
var trail = document.getElementById("more-info-btn");

trail.addEventListener("click", function() {
    // Hides content in main section
    document.getElementById("popular-locations").style.display = "none";

    // Create a new div element
    var newDiv = document.createElement("section");
    newDiv.setAttribute("id", "trail-info");

    // and give it some content
    var newContent = document.createTextNode("Testing new section for trail info");

    // add the text node to the newly created div
    newDiv.appendChild(newContent);

});


// [place holder for trail data]
// function getTrails(location) {  

//     };



//reverse geocoding to get street name
function getStreet(lat, lon) {

  fetch("https://api.geoapify.com/v1/geocode/reverse?lat="+lat+"&lon="+lon+"&type=street&lang=en&limit=1&format=json&apiKey=dc4b50b8f0a449b6affd9435b9d07634")
    .then(response => response.json())
    .then(result => {
      const street = result; // Save the JSON array as a variable
      console.log(street); // Use the variable as needed
      console.log(street.results[0].address_line1);
    // Runs crime api function with street name derivd from reverse geocoding lat and lon (testing purposes)
    //getCrimeHistory(street.results[0].address_line1); 
    })
    .catch(error => console.log('error', error));
  }