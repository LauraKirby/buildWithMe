$(document).ready(function(){
		// Get a reference to the canvas object
		var canvas = document.getElementById('myCanvas');
		
		// Create an empty Project, this creates an instance of Project (project), View (view) and Layer (layer):
		// paper is a global variable of the class Paper 
		paper.setup(canvas);
		
		//SHAPES - implement Path & various shape classes 

		// Create rectangle 
 		var rect = new paper.Path.Rectangle(new paper.Point(0, 0),300, 300);
		rect.fillColor = '#66FFFF' //aqua

		// Create triangle - 3 arguments: (center, numSides, radius)
		var triangle = new paper.Path.RegularPolygon(new paper.Point(254, 122), 3, 53);
		triangle.fillColor = '#CCFFFF'; //light aqua

		// Create purple rectangle 
		var rectHead = new paper.Path.Rectangle(new paper.Point(80, 60),50, 30);
		rectHead.fillColor = '#a200ff';

		// Create purple pentagon
		var pentagonHat = new paper.Path.RegularPolygon(new paper.Point(105, 63), 5, 25);
		pentagonHat.fillColor = '#a200ff';

		// Create orange pentagon
		var pentagonLeftEye = new paper.Path.RegularPolygon(new paper.Point(95, 73), 5, 6);
		pentagonLeftEye.fillColor = '#f47835'; 

		// Create lime pentagon
		var pentagonRightEye = new paper.Path.RegularPolygon(new paper.Point(115, 73), 5, 6);
		pentagonRightEye.fillColor = 'lime';



		//LAYER
		// Create second Layer, first layer was created upon project creation
		// All items created after this layer will be on the second layer
		var dragableLayer = new paper.Layer();
		dragableLayer.name = "draggable";

		// Create image on second layer 
		var circleOrange = new paper.Path.Circle(new paper.Point(50, 120), 20);
		circleOrange.fillColor = 'orange'

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
			if(clickedItem.getLayer().name === "draggable"){
				if (clickedItem._parent.name === "robotHead")
				{
					clickedItem._parent.position = event.point;
				}
				else{
					clickedItem.position = event.point;
				}
			}
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