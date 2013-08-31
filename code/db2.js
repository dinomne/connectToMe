function doFirst(){
key = Lawnchair({name:'key', record:'key1'},function() { console.log("db key created"); 
	key.save({key:"1", value:"me"}, function(obj){ console.log(obj)});	
	});
people = Lawnchair({name:'people', record:'person'},function() { console.log("db created");});


//whatToDO(people, key, fun);
    // something to save...
    
   		
}
window.addEventListener('load', doFirst(), false);
var fun = "";
if (document.getElementById("My Profile").innerHTML==="My Profile")
 	{
 	fun = "My Profile";
 	console.log(fun);
 	}else if (document.getElementById("My Profile").innerHTML==="Edit My Profile"){
 		
 		fun = "My Profile";
 		console.log(fun);
 	
 	}else if (document.getElementById("My Profile").innerHTML==="Contacts"){
 		fun = "My Profile";
 	console.log(fun);
 	}else if (document.getElementById("My Profile").innerHTML==="Search"){
 		fun = "My Profile";
 	console.log(fun);
 	}else{
 		console.log("no function for this");
 	}
function whatToDO(people, key, fun){
 		
 	if (fun = "My Profile"==="My Profile")
 	{
 		showProfile(key.get("1", function(obj) {return(obj)}, people) );
 		console.log("show profile");
 	
 	}else if (fun = "My Profile"==="Edit My Profile"){
 		
 		console.log("edit profile");
 		window.getElementById('edit').addEventListener('click', Database(people), false);
 	
 	}else if (fun = "My Profile"==="Contacts"){
 		listProfiles(people);
 		console.log("list contats");
 	
 	}else if (fun = "My Profile"==="Search"){
 		window.getElementById('searchSubmit').addEventListener('click', function(people){
 		
 			term = document.getElementById("term");
			Search(term, people);})
 	
 	}else{
 		console.log("no function for this");
 	}
 };
  


function Database(people){
	var form;
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
  
}
 
 



function showProfile(id, people){
 		
 		
 		var tags = ['ime', 'title', 'address', 'email', 'telephone', 'website'];
		console.log(id);
	
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
 
 function listProfiles(people){
 	
 
 		people.each(function add (keys) {
	    	select = document.getElementById("select");
	    	console.log(keys.key);
	    	var opt = document.createElement('option');
    		opt.value = keys.key;
	    	
	    	select.options[select.options.length] = new Option(opt.value, opt.value);
			console.log(select);
    	
	 })
}
	 
function Search(term, people) {
	if(people.exists('my-key-name', function(exists) {
        console.log('existence is: ' + exists);
    }));
  
}
 	
   