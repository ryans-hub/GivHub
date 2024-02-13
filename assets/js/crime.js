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
    // Makes a crime alert for trails that have an excessive history of crime (for working appliction)
    .then(response => response.json())
    .then(data => {
      const totalCrimes = data.result.total;
      const proBtn = document.getElementById('proceed-btn');
      const crimeP = document.createElement('p');
      const crimeAlert = document.getElementById('crime-alert');
    if (totalCrimes > 500) {
        crimeAlert.style.display = "block";
        crimeAlert.querySelector('h3').textContent = 'Crime Alert';
        crimeAlert.querySelector('p').textContent = 'Due to an unusually high crime rate this is a potenially dangerous area. Reported Incidents: ' + totalCrimes;
      document.body.appendChild(crimeP);
      proBtn.addEventListener('click', function() {
        crimeAlert.style.display = "none";
      });
    }
})

   //Creates an alert with the total number of crimes on the given street (for testing purposes)
    // .then(response => response.json())
    // .then(data => {
    //   alert('Total results found: ' + data.result.total);
    // })

    // Logs Errors
    .catch(error => {
      console.error('Error:', error);
    });

    // Logs the crime api data in the console
    JSON.stringify(data.result.total);
    console.log(data.result.total);
  
}

// getCrimeHistory("N 7th St"); (for testing purposes)




// <!-- Crime thingy -->
// <div id="crime-alert" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" style="display: none;">
//     <!--
//       Background backdrop, show/hide based on modal state.
  
//       Entering: "ease-out duration-300"
//         From: "opacity-0"
//         To: "opacity-100"
//       Leaving: "ease-in duration-200"
//         From: "opacity-100"
//         To: "opacity-0"
//     -->
//     <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
  
//     <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
//       <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
//         <!--
//           Modal panel, show/hide based on modal state.
  
//           Entering: "ease-out duration-300"
//             From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//             To: "opacity-100 translate-y-0 sm:scale-100"
//           Leaving: "ease-in duration-200"
//             From: "opacity-100 translate-y-0 sm:scale-100"
//             To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//         -->
//         <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
//           <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
//             <div class="sm:flex sm:items-start">
//               <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
//                 <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
//                   <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
//                 </svg>
//               </div>
//               <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
//                 <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Deactivate account</h3>
//                 <div class="mt-2">
//                   <p class="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
//             <button id="proceed-btn" type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Proceed</button>
//             <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Go Back</button>
//           </div>
//         </div>
//       </div>
//     </div>
// </div>


var crimeList = document.getElementById('crimes');

const data = {
  resource_id: '0ce3411a-2fc6-4302-a33f-167f68608a20',
  limit: 3,
  
};

const apiUrl = 'https://www.phoenixopendata.com/api/3/action/datastore_search';

// Using the fetch function to make a GET request with query parameters


function getCrime () {

    fetch(`${apiUrl}?${new URLSearchParams(data)}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    return response.json();
  })
  .then(function (responseData) {

    for (var i=0; i<responseData.result.records.length; i++) {
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