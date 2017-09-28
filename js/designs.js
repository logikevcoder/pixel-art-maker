// Select color input
const colorPicker = document.getElementById('colorPicker');
// Select size input
const heightInput = document.getElementById('input_height').value;
const widthInput = document.getElementById('input_width').value;
const inputBtn = document.getElementById('buttonSubmit');
const color = document.getElementById('colorPicker');



// 1.1 Define variables by selecting DOM elements that use interacts with
	// 1.2 Such as the submit button, the table, and color picker need to be accessed
		// 1.3 Value of color selector needs to be stored, since the clicked cell in the 
		    // table needs to be set to the selected color

// 2. Add event listerns to the relevant DOM elements, so that the user input can be color 
//values and table sizes can be dynamically set by the user

// 3.1 Set the size of the cross stitc canvas as an N by M grid with the makeGrid() function.
    // 3.2 Each cell should hav ean event listener that sets the background color of the cell to the selected color


// When size is submitted by the user, call makeGrid()
$('inputBtn').on('submit', () => {
	makeGrid();
});

function makeGrid() {

// Your code goes here!

}
