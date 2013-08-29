require(['../code/lawnchair'], Lawnchair({ime:'people', record:'person'}, function(people){

	var form;
	
    // something to save...
    
    				

	document.getElementById('edit').addEventListener('click', function(){
		['edit', 'ime', 'title', 'address', 'email', 'telephone', 'website', 'temeNo'].forEach(function(id){
				var id = document.getElementById(id);})
	var input = document.getElementsByTagName("input");
	input += 	document.getElementById('temeNo');
	form = {
				'ime': input[0].value,
				'title': input[1].value,
				'address':input[2].value,
			 	'email': input[3].value,
			 	'telephone': input[4].value,
			 	'website': input[5].value, 
			 	'temeNo': input[6].value 
			 	};
	
	

        // refer to the callback param (mapped to `ime` in ctor options)
        // - also notice the terse callback in the second param 
        // - it uses the imed variable person
        people.save({key:"me", value:form}, function(obj){ console.log(obj)});	
    }, false);
   
    
 	id = "me";
 	function showProfile(id){
 		var tags = ['ime', 'title', 'address', 'email', 'telephone', 'website'];
	
	
	
	
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
        
        
   
 	}
	
  }))
  
  