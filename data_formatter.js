var XLSX = require('xlsx');

var workbook = XLSX.readFile('map_test_data.xlsx');
var sheets = workbook.SheetNames;
var worksheet = workbook[sheets[0]];

var cities = [];
var veteran_populations = [];
var total_populations = [];

var map_data = {};

var cell = 1;

while (worksheet["A-" + String(cell)] != None) {
    cities.push(worksheet["A-" + String(cell)]);
    veteran_populations.push(worksheet["B-" + String(cell)]);
    total_populations.push(worksheet["C-" + String(cell)]);
    cell = cell + 1;
};

for (i = 0; i < cities.length; i++) {
    map_data.push({
        "type": "Feature",
        "properties": {
            "name": cities[i],
            "density": veteran_populations[i]/total_populations[i]
        },
        "geometry": "INSERT POLYGON BOUNDS"
    });
};