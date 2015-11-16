Template.carnetPromo.helpers({
    'moyenne': function(){
		Semestre1.aggregate([{$group:{_id: "$id",avgQuantity: { $avg: "$mgs1" }}}])
	}
	
});