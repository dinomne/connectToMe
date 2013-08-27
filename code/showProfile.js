require(['../code/lawnchair'], Lawnchair({name:'people', record:'person'},function OnLoad (people) {
	
	var tags = ['name', 'title', 'address', 'email', 'telephone', 'website'];
	tags.forEach(function(name){var name = document.getElementById(name)});
	var tags1 = [name, title, address, email, telephone, website];
	var red = document.getElementById("red");
	
	
	tags.forEach(function(name){
		
		people.get(id, function(obj) {
			if(obj) {
            console.log("found task");
            val = obj.value;
            
            [name, title, address, email, telephone, website].forEach(function(id){
            	//POPRAVI HTML inject
				id.innerHtml=  val[tags.indexOf[id]];
            });
        } else {
            console.log("task not found");}
        });})
        }))
        
        
      
			
		

