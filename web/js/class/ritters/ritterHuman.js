function RedRitter(){
    this.position = {};
}

extend(RedRitter, Ritter);

//RedRitter.prototype.createPosition = function(){
//	RedRitter.superclass.createPosition.apply(this, arguments);
//}

RedRitter.prototype.move = function(){
    RedRitter.superclass.move.apply(this, arguments);
}
