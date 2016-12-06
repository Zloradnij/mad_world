function extend(Child, Parent) {
    var F = function() { }
    F.prototype = Parent.prototype
    Child.prototype = new F()
    Child.prototype.constructor = Child
    Child.superclass = Parent.prototype
}

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

function RedRitter(){
    this.position = {};
}

function BlackRitter(){
    this.position = {};
}

extend(RedRitter, Ritter);
extend(BlackRitter, Ritter);

//RedRitter.prototype.createPosition = function(){
//	RedRitter.superclass.createPosition.apply(this, arguments);
//}
RedRitter.prototype.move = function(){
	RedRitter.superclass.move.apply(this, arguments);
}

BlackRitter.prototype.createPosition = function(){
	RedRitter.superclass.createPosition.apply(this, arguments);
}
BlackRitter.prototype.move = function(){
	RedRitter.superclass.move.apply(this, arguments);
}


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





























/*
unit = 'tp_caseraw_package' AND
run_result_caption='Успешно.' AND
run_end_time >= '21.08.2016 15:23:16.939986'



select
coalesce(r.new_status_caption,'') new_status_caption,
    r.stdate transition_dt,
    r.stuser_fullname user_fullname--,
    --            c.run_end_time end_time
from
df.v_df_route r,
    --                join core.joblogs c on r.unit_id = c.unit_id,
    core.v_extra_dicts d
join core.v_extra_dict_values dv on dv.pid = d.id
where
d.ex_code = 'tp_crp_df_stats'
and r.unitcode = 'tp_caseraw_package'
and r.unit_id = 27922866 --:unit_id -- 30426338
and r.new_status_code =  dv.str_value
--        and c.unit = 'tp_caserow_package'
--        and c.run_result_caption = 'Успешно.'
*/
