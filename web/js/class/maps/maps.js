function Map(){
    this.position = {};
}
Map.prototype = {

	create : function(x,y){
		this.position.x = x;
		this.position.y = y;
	}
}

