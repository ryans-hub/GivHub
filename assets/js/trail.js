var trailList = document.getElementById('trails');
var getTrailsEl = document.querySelector('#getTrails');
var searchBtn = document.getElementById('searchBtn');

var card1 = document.getElementById('card1');
var card1Trail = document.getElementById('card1-trail');

var card2 = document.getElementById('card2');
var card2Trail = document.getElementById('card2-trail');

var card3 = document.getElementById('card3');
var card3Trail = document.getElementById('card3-trail');

const apiUrl = 'https://www.phoenixopendata.com/api/3/action/datastore_search?resource_id=aa4e2a08-c0ad-4fc4-bee9-44c2d85a58fa';
const limit = 3;
const newLimit = 80102;
const offset = 64000;

function getRandomOffset(totalRecords) {
  return Math.floor(Math.random() * totalRecords);
}

function getTrails() {
    trailList.textContent = '3 Random Trails';
    
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
        // var createListItem = document.createElement('li');
        // createListItem.textContent = ("Trail " + [i + 1] + ": " + responseData.result.records[i].Site + " - Count: " + responseData.result.records[i].Count);
        // trailList.appendChild(createListItem);

        card1.textContent = ("Trail 1");
        card1Trail.textContent = (responseData.result.records[0].Site + " - Count: " + responseData.result.records[0].Count);

        card2.textContent = ("Trail 2");
        card2Trail.textContent = (responseData.result.records[1].Site + " - Count: " + responseData.result.records[1].Count);

        card3.textContent = ("Trail 3");
        card3Trail.textContent = (responseData.result.records[2].Site + " - Count: " + responseData.result.records[2].Count);

      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

function searchTrails() {

}

function top3() {
  
  trailList.textContent = 'Top 3 Trails of 2023';


  fetch(`${apiUrl}&limit=${newLimit}&offset=${offset}`)
    .then(function (response) {
      if(!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      return response.json();
    })
    .then(function (responseData) {

      var topTrailsAr = [];

      // var targetDate = new Date("2019-01-01T00:00:00");

      // var targetYear = targetDate.getFullYear();


      for(var i = 0; i < responseData.result.records.length; i++) {

        var record = responseData.result.records[i];
        var trailName = record.Site;
        // var theDate = new Date(responseData.result.records[i].Date);

        // var theYear = theDate.getFullYear();

        // console.log("This is the", theYear);

        var theDate = new Date(record.Date);

        if(theDate.getFullYear() === 2023) {

          // console.log(record);

          let trailEntry = null;
          for(var j = 0; j < topTrailsAr.length; j++) {
            if(topTrailsAr[j].name === trailName) {
              trailEntry = topTrailsAr[j];
              break;
            }
          }
  
          if(trailEntry) {
            trailEntry.totalCount += record.Count || 0;
          } else {
            topTrailsAr.push({name: trailName, totalCount: record.Count || 0});
          }
        }
      }

      topTrailsAr.sort((a, b) => b.totalCount - a.totalCount);

      for(var i = 0; i < Math.min(topTrailsAr.length, 3); i++) {
        // var createListItem = document.createElement('li');
        // createListItem.textContent = (`${i + 1}. ${topTrailsAr[i].name} - Total Count: ${topTrailsAr[i].totalCount}`);
        // trailList.appendChild(createListItem);

        // console.log(topTrailsAr);

        card1.textContent = ("Trail 1");
        card1Trail.textContent = (topTrailsAr[0].name + " - Count: " + topTrailsAr[0].totalCount);

        card2.textContent = ("Trail 2");
        card2Trail.textContent = (topTrailsAr[1].name + " - Count: " + topTrailsAr[1].totalCount);

        card3.textContent = ("Trail 3");
        card3Trail.textContent = (topTrailsAr[2].name + " - Count: " + topTrailsAr[2].totalCount);

        

      }


      // console.log("This is", targetYear);


      // console.log("This is top3 function output", responseData.result);

    })
}

getTrailsEl.addEventListener('click', getTrails);
// top3El.addEventListener('click', top3);
searchBtn.addEventListener('submit', searchTrails);