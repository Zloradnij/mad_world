function BlackRitter(){
    this.position = {};
}

extend(BlackRitter, Ritter);

BlackRitter.prototype.createPosition = function(){
    RedRitter.superclass.createPosition.apply(this, arguments);
}

BlackRitter.prototype.move = function(){
    RedRitter.superclass.move.apply(this, arguments);
}

