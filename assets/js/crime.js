
var crimeList = document.getElementById('crimes');

const data = {
  resource_id: '0ce3411a-2fc6-4302-a33f-167f68608a20',
  sort: '_id desc',
  
};

const apiUrlcrime = 'https://www.phoenixopendata.com/api/3/action/datastore_search';

// Using the fetch function to make a GET request with query parameters


function getCrime () {

    fetch(`${apiUrlcrime}?${new URLSearchParams(data)}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    return response.json();
  })
  .then(function (responseData) {

    for (var i=0; i<3; i++) {
        console.log(responseData.result.records.length);
        

        console.log("Crime " + [i] + " " + responseData.result.records[i]['OCCURRED TO'] + " " + responseData.result.records[i]['UCR CRIME CATEGORY'] + " " + responseData.result.records[i]["100 BLOCK ADDR"]);

        var createListItem = document.createElement('li');
        var createDivitem = document.createElement('div');
        var createTimeitem = document.createElement('time');
        var createPitem = document.createElement('p');
        var createAddydiv = document.createElement('div');
        var createAddy = document.createElement('h3');
        var createSpan = document.createElement('span');

        createListItem.className = "flex max-w-xl py-4 flex-col items-start justify-between";
        createDivitem.className = "flex items-center gap-x-4 text-xs";
        createTimeitem.className = "text-gray-500";
        createPitem.className = "relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100";
        createAddydiv.className = "group relative";
        createAddy.className = "mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600";
        createSpan.className = "flex";
        
        
        const w = responseData.result.records[i]['UCR CRIME CATEGORY'];

        // createListItem.textContent = ("Crime " + [i + 1] + " " + w);
        var hM = responseData.result.records[i]['OCCURRED TO'];
        if (hM == null) {
            hM = responseData.result.records[i]['OCCURRED ON'];
        }
        // console.log("DateHourMinuteValue = " + hM); (debugging purposes)

        createListItem.appendChild(createDivitem);
        createTimeitem.textContent = [hM];
        createPitem.textContent = responseData.result.records[i]['UCR CRIME CATEGORY'];
        createSpan.textContent = responseData.result.records[i]["100 BLOCK ADDR"];

        createDivitem.appendChild(createTimeitem);
        createDivitem.appendChild(createPitem);
        crimeList.appendChild(createListItem);
        createAddydiv.appendChild(createAddy);
        createAddydiv.appendChild(createSpan);
        createListItem.appendChild(createAddydiv);
    }

  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

}

getCrime();