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

        this.sizeX = $(document).width();
        this.sizeY = $(document).height();

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
        $(document).append('<canvas id="'+this.ID+'"></canvas>');
        this.canvas = $('#'+this.ID);
        this.canvas.css({
            width : '',
            height : '',
            background : '',
            position : '',
            top : '',
            left : '',
        });
    },

    setSize : function(){
        this.canvas.css({
            width : this.sizeX,
            height : this.sizeY,
        });
    },

    setPosition : function(){
        this.canvas.css({
            top : this.positionY,
            left : this.positionX,
        });
    }
};

