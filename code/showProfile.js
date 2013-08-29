
	
	var tags = ['ime', 'title', 'address', 'email', 'telephone', 'website'];
	
	
	id = "me";
	
	tags.forEach(function(name){
		
		people.get(id, function(obj) {
			if(obj) {
           	 val = obj.value;
            console.log(val);
          /*  var p = document.getElementsByTagName("p");
				for(var i = 0; i < p.length; i++){
   					//do something to each div like
   						p[i].innerHTML = val[tags[i]]; 
   					}
            */
            }else {
            	console.log("task not found");}
        });});
        
        
   
        
        
      
			
		

