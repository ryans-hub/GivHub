var trailList = document.getElementById('trails');
var getTrailsEl = document.querySelector('#getTrails');

const apiUrl = 'https://www.phoenixopendata.com/api/3/action/datastore_search?resource_id=aa4e2a08-c0ad-4fc4-bee9-44c2d85a58fa';
const limit = 5;

function getRandomOffset(totalRecords) {
  return Math.floor(Math.random() * totalRecords);
}

function getTrails() {
    trailList.textContent = '';
    
    fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      return response.json();
    })
    .then(function (responseData) {
      const totalRecords = responseData.result.total;
      const offset = getRandomOffset(totalRecords);

      return fetch(`${apiUrl}&limit=${limit}&offset=${offset}`);
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      return response.json();
    })
    .then(function (responseData) {
      console.log(responseData.result.records);

      for (var i = 0; i < responseData.result.records.length; i++) {
        var createListItem = document.createElement('li');
        createListItem.textContent = ("Trail " + [i + 1] + ": " + responseData.result.records[i].Site + " - Count: " + responseData.result.records[i].Count);
        trailList.appendChild(createListItem);
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

getTrailsEl.addEventListener('click', getTrails);