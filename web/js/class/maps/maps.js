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
				if(i < waterBorder || i >= this.position.x - waterBorder || j < waterBorder || j >= this.position.y - waterBorder){
					this.mapBlocks[i][j] = water;
				}else{
					this.mapBlocks[i][j] = mapLevel[this.position.level][Math.floor(Math.random() * (mapLevel[this.position.level].length - 1 - 0)) + 0];
				}
			}
		}

		console.log('mapBlocks = ');
		console.log(this.position);
		console.log(this.mapBlocks);
	}


};

