require(['../code/lawnchair'], Lawnchair({name:'people', record:'person'}, function(people){

	var form;
	var nodeCache = {};
    // something to save...
    ['edit', 'name', 'title', 'address', 'email', 'telephone', 'website'].forEach(function(id){
			nodeCache[id] = document.getElementById(id);
		})
	console.log(nodeCache['name'].value[0])
	form = {
				'name': nodeCache['name'].value[0],
				'title': nodeCache['title'].value[0],
				'address': nodeCache['address'].value[0],
			 	'email': nodeCache['email'].value[0],
			 	'telephone': nodeCache['telephone'].value[0],
			 	'website': nodeCache['website'].value[0]};
	
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