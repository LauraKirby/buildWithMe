$(document).ready(function(){
		// Get a reference to the canvas object
		var canvas = document.getElementById('myCanvas');
		
		// Create an empty Project, this creates an instance of Project (project), View (view) and Layer (layer):
		// paper is a global variable of the class Paper 
		paper.setup(canvas);
		
		//SHAPES - implement Path & various shape classes 
		// Create rectangle 
 		var rect = new paper.Path.Rectangle(new paper.Point(0, 0),600, 300);
		rect.fillColor = '#66FFFF' //aqua

		// Create triangle - 3 arguments: (center, numSides, radius)
		var triangle = new paper.Path.RegularPolygon(new paper.Point(520, 250), 3, 90);
		triangle.fillColor = '#CCFFFF'; //light aqua

		// Create purple rectangle 
		var rectHead = new paper.Path.Rectangle(new paper.Point(80, 60),50, 30);
		rectHead.fillColor = '#a200ff';

		// Create purple pentagon
		var pentagonHat = new paper.Path.RegularPolygon(new paper.Point(105, 63), 5, 25);
		pentagonHat.fillColor = '#a200ff';

		// Create red-orange pentagon
		var pentagonLeftEye = new paper.Path.RegularPolygon(new paper.Point(95, 73), 5, 6);
		pentagonLeftEye.fillColor = '#d41243'; 

		// Create lime pentagon
		var pentagonRightEye = new paper.Path.RegularPolygon(new paper.Point(115, 73), 5, 6);
		pentagonRightEye.fillColor = 'lime';



		//LAYER
		// Create second Layer, first layer was created upon project creation
		// All items created after this layer will be on the second layer
		var dragableLayer = new paper.Layer();
		dragableLayer.name = "dragable";

		// Create image on second layer 
		var circleOrange = new paper.Path.Circle(new paper.Point(50, 200), 20);
		circleOrange.fillColor = '#f47835'

		// The orange circle was 'hard-coded.' I have created an addCircle function to reduce repeative code. 
		// Implement addCircle() function to add cirle to current layer. Arguments: color, x-coord, y-coord, size
		addCircle('yellow',50,100,20); 

		//GROUP
		// Create an instance of Group for the robot head. The entire group of images is dragable. Each item within the group is absolute. 
		var multiImage = new paper.Group([rectHead, pentagonHat, pentagonRightEye, pentagonLeftEye]);
		multiImage.name = "robotHead"; 

		//DRAW VIEW 
 		// Draw the view instance of View now:
		paper.view.draw();
 
 		//TOOL 
 		// Create an instance of Tool for the mouse drag event
		var tool = new paper.Tool();
 
 		// Create mouse drag 
		tool.onMouseDrag = function(event){
			var clickedItem = paper.project.hitTest(event.point).item; 
			if(clickedItem.getLayer().name === "dragable"){
				if (clickedItem._parent.name === "robotHead")
				{
					clickedItem._parent.position = event.point;
				}
				else{
					clickedItem.position = event.point;
				}
			}
		}

		function addCircle(color, x, y, size){
			var circleNew = new paper.Path.Circle(new paper.Point(x, y), size);
			if (!color) {
				color = "yellow"; 
			}
			circleNew.fillColor = color; 

// ternary operator:
		// circle = circleColor ? circleColor : "blue";
		}

	});


//TODO 
//when cross over multiple images on same layer, keep current image clicked 
//make project resizeable 
//add images to create robot
//education description of image draggeed

//Attempting to abstract mouse events:

// var hitOptions = {
// 	segments: true,
// 	stroke: true,
// 	fill: true,
// 	tolerance: 5
// };

//  		// Create an instance of Tool for the mouse drage event
// 		var tool = new paper.Tool();

// 			tool.onMouseDown = function(){
// 			console.log("mouse down")
// 			segment = path = null; 
// 			var hitResult = paper.project.hitTest(event.point).item; 
// 			if (!hitResult) {
// 				return; 
// 			}

// 			if (paper.project.hitResult) {
// 					path = paper.project.hitResult.item;
// 					if (paper.project.hitResult.type == 'segment') {
// 						segment = paper.project.hitResult.segment;
// 					} 
// 			}
// 			// Add clicked item to active layer
// 			movePath = paper.project.hitResult.type == 'fill';
// 				if (movePath){
// 					paper.project.activeLayer.addChild(paper.project.hitResult.item);
// 					console.log(paper.project.hitResult.item);
// 				}
	
// 		}
 		
//  		tool.onMouseMove = function(event) {
//  			paper.project.activeLayer.selected = false;
//  			if (event.item)
//  				event.item.selected = true;
//  		}

//  		tool.onMouseDrag = function(event) {
//  			if (segment) {
//  				segment.point += event.delta;
//  				path.smooth();
//  				console.log("segment")
//  			} else if (path) {
//  				path.position += event.delta;
//  				console.log("path");
//  			}
//  		}