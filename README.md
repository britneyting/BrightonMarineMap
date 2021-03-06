# Brighton Marine Map

A dynamic map reflecting veteran populations in Massachusetts' cities and towns.

## Getting Started

Below we will guide you on how to use the current iteration of the map.

### Prerequisites

To start you must first download and install node.js by going to the below link and running through the installation process.

Follow [This](https://nodejs.org/en/download/) link to node's site to install.

### Downloading The Map

1) Create a folder on your desktop
2) Click the green "Clone or Download" button and download the zip file
3) Go to your downloads folder and find the file you just downloaded
4) Extract it by right clicking, clicking on extract all, and choosing the folder you just created on your desktop then clicking extract
5) Finally, navigate to that folder by going "Desktop => Your Folder => BrightonMarineMap-master => map" and continue with the below instructions.

### Installing

After downloading and install node and the map files we will need to install a couple libraries to allow the program to run.

To insall the libraries, open up the search bar on your computer and type in:

```
cmd
```

then hit enter. Now that we are in the command line type in the follow commands to install the libraries.

```
npm install xlsx -g
npm install fs -g
```

Once they are installed we are almost ready to go!

## Running the Web App

We will now explain how to edit and use the program.

### Editing Excel Sheet Data

In order to edit the excel sheet data you just need to open the excel sheet within the folder you made to house the program, edit it, then save it. (Make sure not to move the file out of its original location). Once you have made the changes you wish to see and saved go to the program folder and run the run_program.bat script which will update the data used for the website by pulling from the excel sheet.

### Opening the Map

In order to see the actual map visualization in your browser simply go to the folder you downloaded (the one from here you put on your desktop) and run the "run_program" file. This should update the map with any changes you have made to the spreadsheet and open up the map in the browser for you to see. Everytime you change something in the spreadsheet you will have to re-run this file.
