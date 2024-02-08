//City of Phenoix Open Data Crime API
function getCrimeHistory(street) {
    // Sets api search parameters
  var data = {
    resource_id: '0ce3411a-2fc6-4302-a33f-167f68608a20', // the resource id
    q: street // query for how many crime per street
  };

    // Fetches the crime data from the City of Phoenix Open Data API
  fetch('https://www.phoenixopendata.com/api/3/action/datastore_search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    // Creates a <p> element with the total number of crimes on the given street (for working appliction)
    .then(response => response.json())
    .then(data => {
      const totalCrimes = data.result.total;
      const crimeP = document.createElement('p');
      crimeP.textContent = 'Total results found: ' + totalCrimes;
      document.body.appendChild(crimeP);
    })

    // Creates an alert with the total number of crimes on the given street (for testing purposes)
    // .then(response => response.json())
    // .then(data => {
    //   alert('Total results found: ' + data.result.total);
    // })

    // Logs Errors
    .catch(error => {
      console.error('Error:', error);
    });

    // Logs the crime api data in the console
    console.log(data);
  
}