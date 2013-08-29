require(['../code/lawnchair'], Lawnchair({name:'people', record:'person'}, function(people){

	var form;
	
    // something to save...
    
    [ 'title', 'address', 'email', 'telephone', 'website', 'name', 'temeNo'].forEach(function(id){
				id = document.getElementById(id);})
		

	
	form = {
				'name': name.value,
				'title': title.value,
				'address':address.value,
			 	'email': email.value,
			 	'telephone': telephone.value,
			 	'website': website.value,
			 	'temeNo': temeNo.value};
	
	
	document.getElementById('edit').addEventListener('click', function(){

        // refer to the callback param (mapped to `name` in ctor options)
        // - also notice the terse callback in the second param 
        // - it uses the named variable person
        people.save({key:"me", value:form}, 'console.log("ok")');	
    }, false);
    
    
 	
 	//FIX!!!!
	function show(name){
    people.get(name, function(obj) {
        if(obj) {
            console.log("found task");
            val = obj.value;
            ['name', 'title', 'address', 'email', 'telephone', 'website'].forEach(function(id){
            	//dodaj HTML inject
            	console.log(val[id]);
            }) 
        } else {
            console.log("task not found");
        		}
    })}
  document.getElementById('show').addEventListener('click', show("me"), false);
  }))
  
  