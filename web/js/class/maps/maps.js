function Map(){
	this.position = {};
	this.mapBlocks = [];
}
Map.prototype = {

	createRegion : function(level,x,y){
		this.position.level = level;
		this.position.x = x;
		this.position.y = y;

		for (var i = 0; i < this.position.x; i++) {
			this.mapBlocks[i] = [];
			for (var j = 0; j < this.position.y; j++) {
				this.mapBlocks[i][j] = mapLevel_1[Math.floor(Math.random() * (4 - 0)) + 0];
			}
		}

		console.log('mapBlocks = ');
		console.log(this.position);
		console.log(this.mapBlocks);
	}


};

