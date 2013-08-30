people = Lawnchair({name:'people', record:'person'},function() { console.log("db created");});


function Database(people){
	var form;
	
    // something to save...
    
   		

	document.getElementById('edit').addEventListener('click', function(){
		
	var input = document.getElementsByTagName("input");
	var teme = 	document.getElementById('temeNo').value;
	
	form = {
				'ime': input[0].value,
				'title': input[1].value,
				'address':input[2].value,
			 	'email': input[3].value,
			 	'telephone': input[4].value,
			 	'website': input[5].value, 
			 	'temeNo': teme 
			 	};
	

        // refer to the callback param (mapped to `ime` in ctor options)
        // - also notice the terse callback in the second param 
        // - it uses the imed variable person
    people.save({key:"me", value:form}, function(obj){ console.log(obj)});	
    
 
  })}
 
 
 window.onload = function(){
 	if (document.getElementById("My Profile").innerHTML==="My Profile")
 	{
 		showProfile(id);
 		console.log("show profile");
 	}else if (document.getElementById("My Profile").innerHTML==="Edit My Profile"){
 		Database(people);
 		console.log("edit profile");
 	}else{
 		console.log("no function for this");
 	}
 };
  


function showProfile(id){
 		var tags = ['ime', 'title', 'address', 'email', 'telephone', 'website'];
		
	
		people.get(id, function(obj) {
			if(obj) {
           	 
           	 val = obj.value;
            
            var p = document.getElementsByTagName("p");
				for(var i = 0; i < p.length; i++){
   					//do something to each div like
   						p[i].innerHTML = val[tags[i]]; 
   					}
            
            document.getElementById("temeL").href = '../css/teme/' + obj.value.temeNo+ '.css';
   			console.log('href="../css/teme/' + obj.value.temeNo+ '.css"');
            
            }else {
            	console.log("task not found");}
        });
 }		
	
	

	