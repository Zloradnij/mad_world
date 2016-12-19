function MapVisual(){
    this.ID;

    this.sizeX;
    this.sizeY;

    this.position = {};
    this.mapBlocks = [];

    this.positionX;
    this.positionY;

    this.angle = [0,0];

    this.canvas;
}

extend(MapVisual, Map);

// MapVisual.prototype.createRegion = function(){
//     MapVisual.superclass.createRegion.apply(this, arguments);
// };

MapVisual.prototype.setupAuto = function(){
    this.ID = 'mCanvas';

    this.sizeX = window.innerWidth;
    this.sizeY = window.innerHeight;
    // this.sizeX = document.body.clientWidth;
    // this.sizeY = document.body.clientHeight;

    this.positionX = 0;
    this.positionY = 0;
};

MapVisual.prototype.rendering = function(){
    $('body').append('<canvas id="'+this.ID+'"></canvas>');

    this.canvas = document.getElementById(this.ID);

    this.canvas.style.background = '#000';
    this.canvas.style.position = 'absolute';
    this.canvas.style.color = "blue";

    this.setSize();
    this.setPosition();

    var ctx = this.canvas.getContext("2d");
    ctx.font = "14px Arial";
    ctx.fillStyle = '#AAA';
    ctx.fillText("0",10,50);
};

MapVisual.prototype.setupHandle = function(ID,sizeX,sizeY,top,left){
    this.ID = ID;

    this.sizeX = sizeX;
    this.sizeY = sizeY;

    this.positionX = left;
    this.positionY = top;
};

MapVisual.prototype.setSize = function(){
    this.canvas.style.width = this.sizeX + 'px';
    this.canvas.style.height = this.sizeY + 'px';
};

MapVisual.prototype.setPosition = function(){
    this.canvas.style.top = this.positionY + 'px';
    this.canvas.style.left = this.positionX + 'px';
};

MapVisual.prototype.draw = function(){
    console.log('visualFieldsCount.normal = ');
    console.log(visualFieldsCount.normal);

    for(var i = 1; i <= visualFieldsCount.normal.x*visualFieldsCount.normal.y; i++){

    }
};

MapVisual.prototype.setAngle = function(centerPosition){
    this.angle = [centerPosition.x-2,centerPosition.y-2];
};