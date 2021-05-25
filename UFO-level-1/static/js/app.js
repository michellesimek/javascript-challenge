// from data.js
var tableData = data;

// create a new variable selecting the table body in the html
let tbody = d3.select("tbody");

// create a new variable for the filter date button and form
let button = d3.select("#filter-btn");
let form = d3.select("#form");

// run handleClick function when filter button is clicked
button.on("click", handleClick);
form.on("submit",handleClick);

// When the page loads, it needs to display the table
// use forEach to loop through the dataset and append rows for each element
function buildTable(data) {
    data.forEach(function(data) {
    let nextrow = tbody.append("tr");
    nextrow.append("td").text(data["datetime"]).style("text-align", "center");
    nextrow.append("td").text(data["city"]).style("text-align", "center");
    nextrow.append("td").text(data["state"]).style("text-align", "center");
    nextrow.append("td").text(data["country"]).style("text-align", "center");
    nextrow.append("td").text(data["shape"]).style("text-align", "center");
    nextrow.append("td").text(data["durationMinutes"]).style("text-align", "center");
    nextrow.append("td").text(data["comments"]).style("text-align", "center");
})};

// create a function that is triggered when the button is clicked
function handleClick() {

    // clear/overwrite previous data 
    tbody.html("");

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // // Grab the datetime value from the filter
    let inputField = d3.select("#datetime");

    // Grab the datetime value from the filter
    let inputValue = inputField.property("value");

    // grab all the table data and set to filteredData
    let filteredData = tableData.filter(function(data) {
        if (data.datetime === inputValue) {
            return true;
        } else if (inputValue === "") {
            return true;
        } else {
            return false;
        }
    });

    // print filteredData in console
    console.log(filteredData);

    // call the buildtable function to build table with filtered data
    buildTable(filteredData);
};

// Build the table when the page loads
buildTable(tableData);

