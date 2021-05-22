// from data.js
var tableData = data;

// create a new variable selecting the table body in the html
let tbody = d3.select("tbody");

// When the page loads, it needs to display the table
// use forEach to loop through the dataset and append rows for each element
function buildTable(data) {
    tableData.forEach(function(data) {
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
    // create a new variable for the filter date button
    let button = d3.select("#button");

    // Grab the datetime value from the filter
    let inputField = d3.select("#datetime");

    // get the value of the input element 
    let inputValue = inputElement.property("value");
    let filteredData = tableData.filter(function(tbody) {
        if(tableData["datetime"] === inputValue) {
           return true;
        } else {
            return false;
        }
    })
    buildTable(filteredData);
};

// filteredData.forEach(function(tableData) {
//     let nextrow = tbody.append("tr");
//     nextrow.append("td").text(elt["datetime"]).style("text-align", "center");
//     nextrow.append("td").text(elt["city"]);
//     nextrow.append("td").text(elt["state"]);
//     nextrow.append("td").text(elt["country"]);
//     nextrow.append("td").text(elt["shape"]);
//     nextrow.append("td").text(elt["durationMinutes"]);
//     nextrow.append("td").text(elt["comments"]);
// });

// Build the table when the page loads
buildTable(tableData);
