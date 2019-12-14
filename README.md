# Brighton Marine Map

A dynamic map reflecting veteran populations in Massachusetts' cities and towns.

## Getting Started

Below we will guide you on how to use the current iteration of the map.

### Prerequisites

To start you must first download and install node.js by going to the below link and running through the installation process.

Follow [This](https://nodejs.org/en/download/) link to node's site to install.

### Installing

After downloading and install node we will need to install a couple libraries to allow the program to run.

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

In order to see the actual map visualization in your browser simply open the folder containing the program and double click the file called LeafletTrial.html. This should open up a webpage in your browser showing the map reflecting your data.
