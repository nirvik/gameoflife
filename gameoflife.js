/*
 *	live cell < 2 neighbours  -> dead
 *	live cell > 3 neighbours -> dead
 *	live cell == 2 or 3 neighbours -> alive
 *	dead cell == 3 live neighbours -> alive
 */	

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.strokeStyle = 'red';
ctx.fillStyle = 'black';

var grid = [];

function init(){
	
	for(var i=0;i<64;i++){
		grid[i] = new Array();
		for(var j=0;j<64;j++){
			grid[i][j] = 0;
		}
	}
/*
 	
	// Ripped off this configuration 
	[
        // Gosper glider gun
        [1, 5],[1, 6],[2, 5],[2, 6],[11, 5],[11, 6],[11, 7],[12, 4],[12, 8],[13, 3],[13, 9],[14, 3],[14, 9],[15, 6],[16, 4],[16, 8],[17, 5],[17, 6],[17, 7],[18, 6],[21, 3],[21, 4],[21, 5],[22, 3],[22, 4],[22, 5],[23, 2],[23, 6],[25, 1],[25, 2],[25, 6],[25, 7],[35, 3],[35, 4],[36, 3],[36, 4],
    //Random points
    [60, 47],[61,47],[62,47],
     [60, 48],[61,48],[62,48],
     [60, 49],[61,49],[62,49],
     [60, 51],[61,51],[62,51],
	].forEach(function(point){
		grid[point[0]][point[1]] = 1;
	});
*/

	grid.forEach(function(row,x){
		row.forEach(function(col,y){
			if(Math.random()>0.7){
				grid[x][y]=1;
			}
		});
	});
	draw();

}

function update(){
	
	var result = new Array();
	function look_here_and_there(x,y){
		
		function filled(x,y){
			return grid[x] && grid[x][y];
		}

		var amount = 0;
		for(var i=-1 ;i<=1;i++){
			for(var j=-1 ; j<=1 ; j++){
				if(i==0 && j==0){
					continue;
				}
				else if(filled(x+i,y+j)){
					amount++;
				}
			}
		}

		return amount;
	}

	grid.forEach(function(row,x){
		
		result[x] = new Array();

		row.forEach(function(col,y){
			var no_of_neighbours = look_here_and_there(x,y);

			if(col){ // if alive 
				result[x][y] = (no_of_neighbours== 2 || no_of_neighbours==3)? 1 : 0;
			}
			else{
				result[x][y] = (no_of_neighbours==3)?1:0;
			}
		});
	});

	grid = result;

	draw();
}

function draw(){
	
	ctx.clearRect(0,0,512,512);
	grid.forEach(function(row,x){
		row.forEach(function(col,y){
			ctx.beginPath();
			ctx.rect(x*8,y*8,8,8);
			if(col){
				ctx.fill();
			}
			else{
				ctx.stroke();
			}
			
		});
	});

	setTimeout(function(){
		update();
		}, 
		70
	);

}
init();
