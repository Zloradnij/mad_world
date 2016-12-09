function MapVisual(){
    this.position = {};
    this.ID;
    this.sizeX;
    this.sizeY;
}
MapVisual.prototype = {
    setupAuto : function(ID,sizeX,sizeY){
        this.ID = ID;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
    },

    setupHandle : function(ID,sizeX,sizeY){
        this.ID = ID;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
    },

    create : function(level,x,y){
        this.position.x = x;
        this.position.y = y;
    }
}

