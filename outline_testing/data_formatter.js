var XLSX = require('xlsx');
var fs = require('fs');

var workbook = XLSX.readFile('map_test_data.xlsx');
var sheets = workbook.SheetNames;
var worksheet = workbook.Sheets[sheets[0]];

var cities = [];
var contacts = [];
var veteran_populations = [];
var total_populations = [];

var data = {};

var cell = 1;
while (worksheet["A" + String(cell)] != undefined) {
    cities.push(worksheet["A" + String(cell)]["v"]);
    contacts.push(worksheet["B" + String(cell)]["v"]);
    veteran_populations.push(worksheet["C" + String(cell)]["v"]);
    total_populations.push(worksheet["D" + String(cell)]["v"]);
    cell = cell + 1;
};
data[contacts.shift()] = contacts;
data[veteran_populations.shift()] = veteran_populations;
data[total_populations.shift()] = total_populations;
data[cities.shift()] = cities;

// for (i = 0; i < cities.length; i++) {
//     map_data.push({
//         "type": "Feature",
//         "properties": {
//             "name": cities[i],
//             "density": veteran_populations[i]/total_populations[i]
//         },
//         "geometry": "INSERT POLYGON BOUNDS"
//     });
// };
fs.readFile('mass.js', (err, d) => { 
    if (err) throw err; 
    var outlines = d.toString();
    console.log(data.toString()); 
}) 
var json = "var data = " + JSON.stringify(data);
fs.writeFile("data.js", json, (err) => {
    if (err) throw err;
})
console.log(json);