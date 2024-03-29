

const pollutionData = [
  {
    city: "kolkata",
    data: [105, 120, 98, 132, 85, 118, 102, 141, 90, 108, 125, 110],
    source: "Dummy Data",
    lastUpdated: "2024-03-26",
  },
  {
    city: "delhi",
    data: [178, 185, 162, 190, 151, 175, 301, 198, 145, 162, 180, 172],
    source: "Dummy Data",
    lastUpdated: "2024-03-26",
  },
  {
    city: "chennai",
    data: [82, 91, 75, 88, 69, 85, 78, 95, 65, 79, 89, 83],
    source: "Dummy Data",
    lastUpdated: "2024-03-26",
  },
  {
    city: "hyderabad",
    data: [110, 125, 98, 138, 80, 112, 105, 135, 85, 101, 120, 108],
    source: "Dummy Data",
    lastUpdated: "2024-03-26",
  },
  {
    city: "mumbai",
    data: [95, 108, 82, 115, 70, 98, 90, 122, 78, 92, 105, 99],
    source: "Dummy Data",
    lastUpdated: "2024-03-26",
  },
  {
    city: "bangalore",
    data: [88, 102, 76, 110, 65, 93, 85, 118, 72, 86, 100, 94],
    source: "Dummy Data",
    lastUpdated: "2024-03-26",
  },
];


const livePollutionData = [
  {
    city: "kolkata",
    currentAQI: 105,
    currentPollutant: "PM10",
    concentration: "84 - 87 µg/m³"
  },
  {
    city: "delhi",
    currentAQI: 193,
    currentPollutant: "SO2",
    concentration: "134 - 87 µg/m³"
  },
  {
    city: "chennai",
    currentAQI: 98,
    currentPollutant: "NO2",
    concentration: "74 - 87 µg/m³"
  },
  {
    city: "hyderabad",
    currentAQI: 75,
    currentPollutant: "NO2",
    concentration: "54 - 87 µg/m³"
  },
  {
    city: "mumbai",
    currentAQI: 98,
    currentPollutant: "NO2",
    concentration: "34 - 87 µg/m³"
  },
  {
    city: "bangalore",
    currentAQI: 111,
    currentPollutant: "PM10",
    concentration: "111 - 87 µg/m³"
  },
];


const yearlyMetroCityAQI = [ 
  { city: "kolkata", data: [105, 120, 98, 132, 85, 118, 102, 141, 90, 108, 125, 110]},
  { city: "delhi",   data:[178, 185, 162, 190, 151, 175, 301, 198, 145, 162, 180, 172]},
  { city: "chennai",  data: [82, 91, 75, 88, 69, 85, 78, 95, 65, 79, 89, 83]},
  { city: "hyderabad", data: [110, 125, 98, 138, 80, 112, 105, 135, 85, 101, 120, 108]},
  { city: "mumbai" ,    data: [95, 108, 82, 115, 70, 98, 90, 122, 78, 92, 105, 99]},
  { city: "bangalore" ,  data: [88, 102, 76, 110, 65, 93, 85, 118, 72, 86, 100, 94]}
] 

// console.log(yearlyMetroCityAQI)

const searchValue = document.getElementById("searchValue");
const searchCityAqiBtn = document.getElementById("search-city-aqi-btn");
const searched_cityname = document.getElementById("searched_cityname");

searchCityAqiBtn.addEventListener('click', () => {
  let cityQuery = searchValue.value;
  if (cityQuery === "") {
    console.log("noting to show")
    searched_cityname.textContent = "Input empty, search a metro city to see AQI";
  } else {
    const searchedItemIndex = pollutionData.findIndex((cityData) => cityData.city == cityQuery);

    if (searchedItemIndex != -1) {
      console.log(searchedItemIndex)
      console.log(pollutionData[searchedItemIndex])
      searched_cityname.textContent = pollutionData[searchedItemIndex].city;
      renderChartAQI(pollutionData[searchedItemIndex]);
      renderAQIInfo(pollutionData[searchedItemIndex], livePollutionData[searchedItemIndex]);
    } else {
      searched_cityname.textContent = "city doest exist in database"
      console.log("city doest exist in database")
    }
  }

})


const currAqi = document.getElementById("currAqi");
const avgMonthlyAqi = document.getElementById("avgMonthlyAqi");
const aqiScale = document.getElementById("aqi-scale");
const currPollutants = document.getElementById("currPollutants");
const monthNameHead = document.getElementById("month-name-head");
const aqiPastData = document.getElementById("aqi-past-data");
const polConcentration = document.getElementById("polConcentration")
// const polConcentration = document.getElementById("polConcentration");
// const polConcentration = document.getElementById("polConcentration");


function renderAQIInfo(aqidata, aqilive) {
  const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

  const d = new Date();
  let month = d.getMonth();

  console.log("your data : ", aqidata)

  // console.log(aqidata.city);
  console.log("currAqi", aqilive.currentAQI);
  // Live AQI
  // current AVG MONTH AQI
  avgMonthlyAqi.textContent = aqidata.data[month]
  console.log("Monthly Avg Aqi", aqidata.data[3]);

  // check AQI LEVELS
  let currAqiLevel = aqilive.currentAQI;
  currAqi.textContent = currAqiLevel;
  if (currAqiLevel >= 0 && currAqiLevel <= 50) {
    // console.log("Good")
    aqiScale.textContent = "(Good)"
    aqiScale.classList.add("text-success");
    aqiScale.classList.remove("text-text-info");
    aqiScale.classList.remove("text-warning");
    aqiScale.classList.remove("text-danger");
  }
  else if (currAqiLevel >= 51 && currAqiLevel <= 100) {
    aqiScale.textContent = "(Moderate)";
    aqiScale.classList.add("text-info")
    aqiScale.classList.remove("text-success");
    aqiScale.classList.remove("text-warning");
    aqiScale.classList.remove("text-danger");
    // console.log("Moderate")
  }
  else if (currAqiLevel >= 101 && currAqiLevel <= 200) {
    aqiScale.textContent = "(Unhealty)"
    aqiScale.classList.add("text-warning")
    aqiScale.classList.remove("text-text-info");
    aqiScale.classList.remove("text-danger");
    aqiScale.classList.remove("text-success");

    // console.log("Unhealthy")
  }
  else if (currAqiLevel >= 201 && currAqiLevel <= 300) {
    aqiScale.textContent = "(Very Unhealty)"
    aqiScale.classList.add("text-danger")
    aqiScale.classList.remove("text-success");
    aqiScale.classList.remove("text-text-info");
    aqiScale.classList.remove("text-warning");

    // console.log("Very Unhealthy")
  }
  else {
    aqiScale.textContent = "(Hazardous)"
    aqiScale.classList.add("text-danger")
    aqiScale.classList.remove("text-success");
    aqiScale.classList.remove("text-text-info");
    aqiScale.classList.remove("text-warning");

    // console.log("Hazardous")
  }

  currPollutants.textContent = aqilive.currentPollutant;
  polConcentration.textContent = aqilive.concentration;

}




// pollutionData.map((item)=>{
//    console.log(item.city)
// })

// // const kolData = pollutionData.filter((item)=> con)
// const cityQuery = "delhi"

// console.log(searchedItem)
const dataCard = document.getElementById("dataCard");
// dataCard.textContent = "No data To Show, search a metro city to see AQI";
function renderChartAQI(aqidata) {
  // if (typeof (aqidata) == 'object') {
  //   console.log("here", typeof (aqidata))

    const ctx2 = document.getElementById('mycityAQI').getContext('2d');
    const existingChart = Chart.getChart(ctx2);
    if (existingChart) {
      existingChart.destroy();
    }
    let aq = aqidata.data;
    let aqiArr = [...aq];
    new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
          "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
        datasets: [{
          label: 'AQI Levels : ' + aqidata.city,
          data: aqiArr,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  // }

  // else {
  //   dataCard.textContent = "ERR: No data To Show, search a metro city to see AQI";
  // }
}


const avgAll = document.getElementById("avgAll");
avgAll.addEventListener('click', ()=>{
  averageOfAqiOfEachCity(yearlyMetroCityAQI);
})

function averageOfAqiOfEachCity(yearlyMetroCityAQI){
  allAverageAqi = []
  //  console.log(yearlyMetroCityAQI.city["kolkata"])
  //  console.log(yearlyMetroCityAQI.data)
  console.log(yearlyMetroCityAQI.map((item)=>{
   return item.city;
  }))
  // 
  // console.log(yearlyMetroCityAQI.reduce((accumulator , item)=>{
  //    retrun accumulator accumulator.length
  // }))
  yearlyMetroCityAQI.forEach((cityAQI)=>{
      const total = cityAQI.data.reduce((accumulator, aqi)=>{
        return accumulator + aqi;
      })

      const averageAqi = total / cityAQI.data.length;
      
      console.log(`Avg AQI for ${cityAQI.city} :  ${averageAqi.toFixed(2)}`)
      
      
      allAverageAqi = [...allAverageAqi, Math.ceil(averageAqi)];


      // console.log( allAverageAqi[averageAqi.toFixed(2)])
  })



  getAvgAqiOfCities(allAverageAqi);

  console.log(allAverageAqi)
}

function getAvgAqiOfCities(allAverageAqi){
  const ctx = document.getElementById('myChart').getContext('2d');
      
  new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: ["Kolkata", "Delhi", "Chennai", "Hyderabad", "Mumbai", "Bangalore"],
      datasets: [{
        label : "AQI of 6 Metro Cities",
        data: allAverageAqi,
       backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }

    
  });

  // console.log("avg { " + allAverageAqi)
  // return allAverageAqi;
}


