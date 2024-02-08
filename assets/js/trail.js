var trailList = document.getElementById('trails');
var getTrailsEl = document.querySelector('#getTrails')

const data = {
  resource_id: 'aa4e2a08-c0ad-4fc4-bee9-44c2d85a58fa',
  limit: 5,
  
};

const apiUrl = 'https://www.phoenixopendata.com/api/3/action/datastore_search';

// Using the fetch function to make a GET request with query parameters


function getTrails () {

    fetch(`${apiUrl}?${new URLSearchParams(data)}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    return response.json();
  })
  .then(function (responseData) {

    for (var i=0; i<responseData.result.records.length; i++) {
        console.log("Trail" + [i] + " " + responseData.result.records[i].Site);

        var createListItem = document.createElement('li');

        createListItem.textContent = ("Trail " + [i + 1] + " " + responseData.result.records[i].Site);

        trailList.appendChild(createListItem);
    }

  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

}

getTrailsEl.addEventListener('click', getTrails)