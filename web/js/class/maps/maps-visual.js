function MapVisual(){
    this.ID = 'mCanvas';

    this.sizeX = 1;
    this.sizeY = 1;

    this.position = {};
    this.mapBlocks = [];

    this.positionX = 1;
    this.positionY = 1;

    this.angle = {x:0,y:0};

    this.canvas = false;
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

MapVisual.prototype.setAngle = function(centerPosition){
    this.angle = {
        x : centerPosition.x - (visualFieldsCount.normal.x - 1) / 2,
        y : centerPosition.y - (visualFieldsCount.normal.y - 1) / 2
    };
};

MapVisual.prototype.draw = function(){
    console.log('visualFieldsCount.normal = ');
    console.log(visualFieldsCount.normal);
    var cur = [];
    for(var i = 0; i < visualFieldsCount.normal.x; i++){
        for(var j = 0; j < visualFieldsCount.normal.y; j++){
            cur.push(this.mapBlocks[this.angle.x + i][this.angle.y + j]);
        }
    }

    console.log('this.mapBlocks');
    console.log(cur);
};


