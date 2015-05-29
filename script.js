$(document).ready(function(){
		// Get a reference to the canvas object
		var canvas = document.getElementById('myCanvas');
		
		// Create an empty project and a view for the canvas:
		paper.setup(canvas);
		

		// Create rectangle 
 		var rect = new paper.Path.Rectangle(new paper.Point(0, 0),(300, 300));
		rect.fillColor = '#66FFFF' //aqua

		// Create triangle - 3 arguments: (center, numSides, radius)
		var triangle = new paper.Path.RegularPolygon(new paper.Point(254, 122), 3, 53);
		triangle.fillColor = '#CCFFFF'; //light aqua


		// // Create grey rectangle
		// var rectGrey = new paper.Path.Rectangle(new paper.Point(80, 60),50, 50);
		// rectGrey.fillColor = 'grey'

		// // Create pentagons
		// var pentagonLeftEye = new paper.Path.RegularPolygon(new paper.Point(95, 75), 5, 7);
		// pentagonLeftEye.fillColor = '#FF33CC'; //bright pink

		// var pentagonRightEye = new paper.Path.RegularPolygon(new paper.Point(115, 75), 5, 7);
		// pentagonRightEye.fillColor = 'lime';




		var dragableLayer = new paper.Layer();
		dragableLayer.name = "draggable";

		var circleOrange = new paper.Path.Circle(new paper.Point(50, 120), 20);
		circleOrange.fillColor = 'orange'

		// Create an instance of Group for all background images
		// Never move 
		// var backgroundGroup = new paper.Group([rect, triangle]); 
		
		// Create a second instance of Group for robot head
		//var dragableMultiImage = new paper.Group([rectGrey, pentagonRightEye, pentagonLeftEye]);
				// Add children to dragableMultiImage group
				

 		// Draw the view now:
		paper.view.draw();
 
 		// Create an instance of Tool for the mouse drage event
		var tool = new paper.Tool();
		//tool.activate(); this is already activated
 
 		// Create mouse drag 
		tool.onMouseDrag = function(event){
			var clickedItem = paper.project.hitTest(event.point); 
			if(clickedItem && clickedItem.item.getLayer().name === "draggable"){
	//			var mouseClicked = clickedItem.item;
				clickedItem.item.position = event.point;
			}
		}
	});