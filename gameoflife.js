/*
 *	live cell < 2 neighbours  -> dead
 *	live cell > 3 neighbours -> dead
 *	live cell == 2 or 3 neighbours -> alive
 *	dead cell == 3 live neighbours -> alive
 */	

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

ctx.strokeStyle = '#e1e1e1';
ctx.fillStyle = 'black';

var cells = [];

function init(){
	
	for(var i=0;i<64;i++){
		cells[i] = new Array();
		for(var j=0;j<64;j++){
			cells[i] = 0;
		}
	}

 	
	// Ripped off this configuration 
	[
        // Gosper glider gun
        [1, 5],[1, 6],[2, 5],[2, 6],[11, 5],[11, 6],[11, 7],[12, 4],[12, 8],[13, 3],[13, 9],[14, 3],[14, 9],[15, 6],[16, 4],[16, 8],[17, 5],[17, 6],[17, 7],[18, 6],[21, 3],[21, 4],[21, 5],[22, 3],[22, 4],[22, 5],[23, 2],[23, 6],[25, 1],[25, 2],[25, 6],[25, 7],[35, 3],[35, 4],[36, 3],[36, 4],
        
        // Random cells
        // If you wait enough time these will eventually take part
        // in destroying the glider gun, and the simulation will be in a "static" state.
        [60, 47],[61,47],[62,47],
        [60, 48],[61,48],[62,48],
        [60, 49],[61,49],[62,49],
        [60, 51],[61,51],[62,51],
    	
	].forEach(function(point){
		cells[point[0]][point[1]] = 1;
	});

	update();

}

function update(){


}

function draw(){


}
