

const pollutionData = [
      { 
        city:"kolkata",
        data: [105, 120, 98, 132, 85, 118, 102, 141, 90, 108, 125, 110],
        source: "Dummy Data",
        lastUpdated: "2024-03-26",
      },
      {
        city:"delhi",
        data: [178, 185, 162, 190, 151, 175, 168, 198, 145, 162, 180, 172],
        source: "Dummy Data",
        lastUpdated: "2024-03-26",
      },
      {
        city:"chennai",
        data: [82, 91, 75, 88, 69, 85, 78, 95, 65, 79, 89, 83],
        source: "Dummy Data",
        lastUpdated: "2024-03-26",
      },
      {
        city:"hyderabad",
        data: [110, 125, 98, 138, 80, 112, 105, 135, 85, 101, 120, 108],
        source: "Dummy Data",
        lastUpdated: "2024-03-26",
      },
     {
        city:"mumbai",
        data: [95, 108, 82, 115, 70, 98, 90, 122, 78, 92, 105, 99],
        source: "Dummy Data",
        lastUpdated: "2024-03-26",
      },
      {
        city:"bangalore",
        data: [88, 102, 76, 110, 65, 93, 85, 118, 72, 86, 100, 94],
        source: "Dummy Data",
        lastUpdated: "2024-03-26",
      },
  ];

  
$("#works").click(()=>{
    console.log("working")
})

// console.log(pollutionData);

// $(document).ready(function() {
//   // Loop through each city in the pollutionData.cities object
//   $.each(pollutionData.cities, function(city, cityData) {
//     // Access city name
//     console.log("City:", city);
//     console.log("CityData:", cityData);
//     // Access city data (pollution readings)
//     var pollutionReadings = cityData.data;
//     // Loop through each pollution reading
//     $.each(pollutionReadings, function(index, reading) {
//       console.log("  - Day " + (index + 1) + ": " + reading);
      
//       // You can also use the reading here for further manipulation
//       // For example, display it on the webpage
//       // $('<p>Day ' + (index + 1) + ': ' + reading + '</p>').appendTo('#pollutionData'); // Replace '#pollutionData' with your target element ID
//     });

// })
// });
const searchValue = document.getElementById("searchValue");
const searchCityAqiBtn = document.getElementById("search-city-aqi-btn");
const searched_cityname = document.getElementById("searched_cityname");

searchCityAqiBtn.addEventListener('click',()=>{
  let cityQuery = searchValue.value ;

const searchedItemIndex = pollutionData.findIndex((cityData)=> cityData.city == cityQuery);

if(searchedItemIndex!= -1){
  console.log(searchedItemIndex)

  console.log(pollutionData[searchedItemIndex])
  
  searched_cityname.textContent = pollutionData[searchedItemIndex].city;
  
}else{
  console.log("city doest exist in database")
}

})


// pollutionData.map((item)=>{
//    console.log(item.city)
// })

// // const kolData = pollutionData.filter((item)=> con)
// const cityQuery = "delhi"

// console.log(searchedItem)