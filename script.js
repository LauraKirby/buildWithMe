$(document).ready(function(){
		// Get a reference to the canvas object
		var canvas = document.getElementById('myCanvas');
		
		// Create an empty project and a view for the canvas:
		paper.setup(canvas);
		

		// Create rectangle 
 		var rect = new paper.Path.Rectangle(new paper.Point(0, 0),(300, 300));
		rect.fillColor = 'aqua'

		// Create triangle - 3 arguments: (center, numSides, radius)
		var triangle = new paper.Path.RegularPolygon(new paper.Point(200, 70), 3, 50);
		triangle.fillColor = 'pink';

		// Create circle
		var circleGreen = new paper.Path.Circle(new paper.Point(50, 30), 20);
		circleGreen.fillColor = 'green'
 
		var circlePurple = new paper.Path.Circle(new paper.Point(50, 75), 20);
		circlePurple.fillColor = 'purple'

		var circleOrange = new paper.Path.Circle(new paper.Point(50, 120), 20);
		circleOrange.fillColor = 'orange'

		// Create an instance of Group for all background images
		var backgroundGroup = new paper.Group([rect, triangle]); 

		

		// Create an instance of Group for all clickable images
		var clickableGroup = new paper.Group([circleGreen, circlePurple, circleOrange]);

		function onMouseDrag(event) {
			
		}

			// Create a second layer by creating an instance of Layer 
			var clickableImage = new paper.Layer();

				// Add children to second layer
				var rect = new paper.Path.Rectangle(new paper.Point(80, 60),50, 50);
				rect.fillColor = 'grey'

				var pentagonLeftEye = new paper.Path.RegularPolygon(new paper.Point(95, 75), 5, 7);
				pentagonLeftEye.fillColor = '#FF33CC'; //bright pink

				var pentagonRightEye = new paper.Path.RegularPolygon(new paper.Point(115, 75), 5, 7);
				pentagonRightEye.fillColor = 'lime';



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