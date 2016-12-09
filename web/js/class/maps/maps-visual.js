function MapVisual(){
    this.ID;

    this.sizeX;
    this.sizeY;

    this.positionX;
    this.positionY;

    this.canvas;
}
MapVisual.prototype = {
    setupAuto : function(){
        this.ID = 'mCanvas';

        this.sizeX = window.innerWidth;
        this.sizeY = window.innerHeight;
        // this.sizeX = document.body.clientWidth;
        // this.sizeY = document.body.clientHeight;

        this.positionX = 0;
        this.positionY = 0;
    },

    setupHandle : function(ID,sizeX,sizeY,top,left){
        this.ID = ID;

        this.sizeX = sizeX;
        this.sizeY = sizeY;

        this.positionX = left;
        this.positionY = top;
    },

    rendering : function(){
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

    },

    setSize : function(){
        this.canvas.style.width = this.sizeX + 'px';
        this.canvas.style.height = this.sizeY + 'px';
    },

    setPosition : function(){
        this.canvas.style.top = this.positionY + 'px';
        this.canvas.style.left = this.positionX + 'px';
    },

    move : function(){

    }
};

