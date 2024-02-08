
//test lat and lon for Phoenix
lat = 33.5511156
lon = -112.1323174



// Get the form element
const form = document.querySelector('form');

// Add event listener for form submission
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    // Get the user input value
    const userInput = form.querySelector('input').value;

    // Hide the old section
    const oldSection = document.querySelector('#popular-locations');
    oldSection.style.display = 'none';

    // Show the new section
    const newSection = document.querySelector('#trail-info');
    newSection.style.display = 'flex';

    // Use the location variable for further processing
    console.log('User location:', userInput);

    // Clear the input field
    form.querySelector('input').value = '';

    // Get most popular trails for the location
    //getTrails(userInput);
    
});


function getTrails(location) {  
    fetch("https://www.hikingproject.com/data/get-trails?lat=33.5511156&lon=-112.1323174&maxDistance=10&key=200929828-8f6f0a6b6b6a7d6a5e1b3a7b7f6e3a6b")
        .then(response => response.json())
        .then(result => {
        const trails = result; // Save the JSON array as a variable
        console.log(trails); // Use the variable as needed
        })
        .catch(error => console.log('error', error));
    };



//reverse geocoding to get street name
function getStreet(lat, lon) {

  fetch("https://api.geoapify.com/v1/geocode/reverse?lat="+lat+"&lon="+lon+"&type=street&lang=en&limit=1&format=json&apiKey=dc4b50b8f0a449b6affd9435b9d07634")
    .then(response => response.json())
    .then(result => {
      const street = result; // Save the JSON array as a variable
      console.log(street); // Use the variable as needed
      console.log(street.results[0].address_line1);
      getCrimeHistory(street.results[0].address_line1);
    })
    .catch(error => console.log('error', error));
  }

//City of Phenoix Open Data Crime API
function getCrimeHistory(street) {
  var data = {
    resource_id: '0ce3411a-2fc6-4302-a33f-167f68608a20', // the resource id
    q: street // query for how many crime per street
  };

  fetch('https://www.phoenixopendata.com/api/3/action/datastore_search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      alert('Total results found: ' + data.result.total);
    })
    .catch(error => {
      console.error('Error:', error);
    });


    console.log(data);
  
}

//testing
getStreet(lat, lon);