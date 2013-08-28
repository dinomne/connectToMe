require(['../code/lawnchair'], Lawnchair({name:'people', record:'person'},function OnLoad (people) {
	
	var tags = ['name', 'title', 'address', 'email', 'telephone', 'website'];
	
	var red = document.getElementById("red");
	
	
	tags.forEach(function(name){
		
		people.get(id, function(obj) {
			if(obj) {
           	 val = obj.value;
            var p = document.getElementsByTagName("p");
				for(var i = 0; i < p.length; i++){
   					//do something to each div like
   						p[i].innerHTML = val[tags[i]];
   					}
            
            }else {
            	console.log("task not found");}
        });})
        }))
        
        
      
			
		

