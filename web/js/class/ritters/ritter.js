function Ritter(){
    this.position = {};
}
Ritter.prototype = {
	move : function(map,deltaX,deltaY){
		this.position.map = map;
		this.position.x += deltaX;
		this.position.y += deltaY;

		console.log('position = ');
		console.log(this.position);
	},

	createPosition : function(map,x,y){
		this.position.map = map;
		this.position.x = x;
		this.position.y = y;
	}
}

