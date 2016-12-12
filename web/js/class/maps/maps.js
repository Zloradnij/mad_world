function Map(){
	this.position = {};
	this.mapBlocks = [];
}
Map.prototype = {

	create : function(level,x,y){
		this.position.x = x;
		this.position.y = y;

		for (var i = 0; i < this.position.x; i++) {
			this.mapBlocks[i] = [];
			for (var j = 0; j < this.position.y; j++) {
				this.mapBlocks[i][j] = Math.random() * 4;
			}
		}

		console.log('mapBlocks = ');
		console.log(this.mapBlocks);
	}


};

