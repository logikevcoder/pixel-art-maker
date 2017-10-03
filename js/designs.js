// Define the variables for the color picker id and size picker id
const colorPicker = document.getElementById("colorPicker");
const $sizePicker = $("#sizePicker");
const $canvas = $("#pixel_canvas");

// Size picker event handler which calls the makeGrid function
$sizePicker.on("submit", function(e){
	e.preventDefault(e);
	$("#pixel_canvas").empty();
	makeGrid();
});

// Sets the background color of the clicked td items to the color selected
$canvas.on("click", "td", function(){
	$(this).css("backgroundColor", colorPicker.value);
});

// Creates the function to accept user input values to 
// define the size of the grid
function makeGrid() {
	let gridHeight = $("#input_height").val();
	let gridWidth =  $("#input_width").val();
	let gridTable = $("#pixel_canvas");
	let gridBody = "";

	// Build the table based on the input values of the height and width attributes
	for (let i = 0; i < gridHeight; i++) {
		gridBody += "<tr>";

		for (let j = 0; j < gridWidth; j++) {
			gridBody += "<td></td>";
			gridBody += gridWidth[i] + gridHeight[j];
		}
		gridBody += "</tr>";
	}
	gridTable.append(gridBody);
}


