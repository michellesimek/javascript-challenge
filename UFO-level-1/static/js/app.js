// from data.js
var tableData = data;

// create a new variable selecting the table body in the html
let tbody = d3.select("tbody");

// Grab the datetime value from the filter
let inputField = d3.select("#datetime");

// create a new variable for the filter date button
let button = d3.select("#filter-btn");

// When the page loads, it needs to display the table
// use forEach to loop through the dataset and append rows for each element
function buildTable(data) {
    data.forEach(function(data) {
    let nextrow = tbody.append("tr");
    nextrow.append("td").text(data["datetime"]).style("text-align", "center");
    nextrow.append("td").text(data["city"]);
    nextrow.append("td").text(data["state"]);
    nextrow.append("td").text(data["country"]);
    nextrow.append("td").text(data["shape"]);
    nextrow.append("td").text(data["durationMinutes"]);
    nextrow.append("td").text(data["comments"]);
})};

// create a function that is triggered when the button is clicked
function handleClick() {

    // clear/overwrite previous data 
    list.html("");
    // var filteredData = tableData;

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // // Grab the datetime value from the filter
    let inputField = d3.select("#datetime");

    // Grab the datetime value from the filter
    let inputValue = inputField.property("value");

    // grab all the table data and set to filteredData
    // if (inputValue) {
    let filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    // };
    
    // let filteredData = tableData.filter(function(tbody) {
    //     if(tableData["datetime"] === inputValue) {
    //        return true;
    //     } else {
    //         return false;
    //     }
    // });

    console.log(filteredData);
    buildTable(filteredData);
};

// Build the table when the page loads
buildTable(tableData);



// run handleClick function when filter button is clicked
button.on("click", handleClick);
