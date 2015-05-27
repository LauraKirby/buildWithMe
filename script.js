$( document ).ready(function() {

		// Get a reference to the canvas object
		var canvas = document.getElementById('myCanvas');
		// Create an empty project and a view for the canvas:
		paper.setup(canvas);
		// Create a Paper.js Path to draw a line into it:
		var linePath = new paper.Path();
		// Give the stroke a color
		linePath.strokeColor = 'aqua';
		var start = new paper.Point(100, 100);
		// Move to start and draw a line from there
		linePath.moveTo(start);
		// Note that the plus operator on Point objects does not work
		// in JavaScript. Instead, we need to call the add() function:
		linePath.lineTo(start.add([ 200, -50 ]));
		

		var rectangle = new paper.Rectangle(new paper.Point(50, 50), new paper.Point(150,100));
		var recPath = new paper.Path.Rectangle(rectangle); 
		recPath.fillColor = 'yellow'; 
		//recPath.selected = true; 	

		// Draw the view now:
		paper.view.draw();

});