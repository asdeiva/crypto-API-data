// Add the API URL
const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
// To fetch data from an API using .then and async-await. 
// Handle the promise using both methods, .then and using async await.
// ==> Project Overview point Number: 1
async function getData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    // storing fetched data to array "dataArray" ==> Project Overview point Number: 2
    let dataArray = data;
    console.log(dataArray);
    buildTable(dataArray)
    isPositive(dataArray);
    isNegative(dataArray);
  } catch (error) {
    console.log(error);
  }
}
//Calling getData Function to fetch data
getData();

// Without async function
// let myArray=fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     buildTable(data);
//     isRed(data);
//   });


// Display all of them in the form of a table as given in the UI ==> Project Overview point Number: 3
function buildTable(data) {
  var table = document.getElementById("table-content");
  table.innerHTML = " ";
  for (var i = 0; i < data.length; i++) {
    
    var row = `<tr>
                    <td><img src="${data[i].image}" > <span> ${data[i].name}</span></td>
                      <td>${data[i].symbol.toUpperCase()}</td>
                      <td class="aliegnNumber">$${data[i].current_price}</td>
                      <td class="aliegnNumber">$${data[i].total_volume.toLocaleString()}</td>
                      <td class="dummy aliegnNumber">${data[i].price_change_percentage_24h.toFixed(2)}%</td>
                      <td class="aliegnNumber">Mkt Cap: $${data[i].market_cap.toLocaleString()}</td>
                </tr>`;
    // Icon and Name of the coin together
    // Percentage change should be green when positive and red when negative
    // $sign shall be added at all places shown in the Figma File
    // All 6 columns shall be displayed
    // Styling should be exactly the same as shared.

    table.innerHTML += row;
    
  }

}

// Adding Red color to Negative Values
function isNegative(data){
    let color = document.querySelectorAll(".dummy");
    for (var i = 0; i < data.length; i++) 
    {
        if (data[i].price_change_percentage_24h < 0) {
        color[i].classList.add("red");
      }
    }
}

// Adding Green color to Negative Values
function isPositive(data){
    let color = document.querySelectorAll(".dummy");
    for (var i = 0; i < data.length; i++) 
    {
        if (data[i].price_change_percentage_24h > 0) {
        color[i].classList.add("green");
      }
    }
}

// The project must be deployed. ==> Project Overview point Number: 4
// Deploye Link : 