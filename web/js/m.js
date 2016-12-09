
$(document).ready(function(){
	redRitter = new RedRitter();
	redRitter.createPosition(2,5,5);

	blackRitter1 = new BlackRitter();
	blackRitter2 = new BlackRitter();
	blackRitter1.createPosition(2,7,7);
	blackRitter2.createPosition(2,7,8);

	redRitter.move(2,1,0);
	blackRitter1.move(2,1,-1);
	blackRitter2.move(2,1,-1);

	redRitter.move(2,1,0);
	blackRitter1.move(2,1,-1);
	blackRitter2.move(2,1,-1);
});























