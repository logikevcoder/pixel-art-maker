// Define the variables for the color picker id and size picker id
let colorPicker = document.getElementById('colorPicker');
let sizePicker = $('#sizePicker');
colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
	document.querySelectorAll('tr').forEach(function (tr){
		tr.style.color = event.target.value;
	});
}

// Size picker event handler which calls the makeGrid function
sizePicker.submit('click', function(){
	event.preventDefault();
	makeGrid();
});

// Sets the background color of the clicked td items to the color selected
$('#pixel_canvas').on('click', 'td', function(){
	$(this).css('backgroundColor', colorPicker.value);
});

// Creates the function to accept user input values to 
// define the size of the grid
function makeGrid() {
let gridHeight = $('#input_height').val();
let gridWidth =  $('#input_width').val();
let gridTable = $('#pixel_canvas');
let gridBody = '';

	for (let i = 0; i < gridHeight; i++) {
		gridBody += '<tr>';
		if (gridHeight > 50) {
			
		}
		for (let j = 0; j < gridWidth; j++) {
			gridBody += '<td></td>';
			gridBody += gridWidth[i] + gridHeight[j];
			if (gridWidth > 50) {

			}
		}
		gridBody += '</tr>';
	}
	gridTable.append(gridBody);
}

// Button to clear the grid
$('#clearGrid').click(function(){
	$('#pixel_canvas').empty();
});

