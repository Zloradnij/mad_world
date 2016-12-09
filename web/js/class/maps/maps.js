function Map(){
    this.position = {};
}
Map.prototype = {

	create : function(level,x,y){
		this.position.x = x;
		this.position.y = y;
	}
}

