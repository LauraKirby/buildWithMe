$(document).ready(function(){
		// Get a reference to the canvas object
		var canvas = document.getElementById('myCanvas');
		
		// Create an empty project and a view for the canvas:
		paper.setup(canvas);
		
		// Create rectangle 
 		var rect = new paper.Path.Rectangle(new paper.Point(0, 0),
		new paper.Point(300, 300));
		rect.fillColor = 'aqua'

		// Create triangle 
		var triangle = new paper.Path.RegularPolygon(new paper.Point(200, 70), 3, 50);
		triangle.fillColor = 'pink';

		// Create circle
		var circlePathGreen = new paper.Path.Circle(new paper.Point(50, 30), 20);
		circlePathGreen.fillColor = 'green'
 
		var circlePathPurp = new paper.Path.Circle(new paper.Point(50, 75), 20);
		circlePathPurp.fillColor = 'purple'

		var circlePathOrange = new paper.Path.Circle(new paper.Point(50, 120), 20);
		circlePathOrange.fillColor = 'orange'
		


		// Draw the view now:
		paper.view.draw();
 
 		// Create an instance of Tool for the mouse drage event
		var tool = new paper.Tool();
		//tool.activate(); this is already activated
 
 		// Create mouse drag 
		tool.onMouseDrag = function(event){
			var clickedItem = paper.project.hitTest(event.point)
			if(clickedItem){
				var circle = clickedItem.item;
				circle.position = event.point;
			}
		}
	});