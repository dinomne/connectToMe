
  
function loadKey () {
  key = Lawnchair({name:'key', record:'key1'},function() { console.log("db key created"); 
	
	
	
}); return (key);}
function loadpeople () {
people = Lawnchair({name:'people', record:'person'},function() { console.log("db created");});

return(people);
}
function Database(people, key){
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
    people.save({key: form.ime, value:form}, function(obj){ console.log(obj)});		
    key.save({key: "who", value:form.ime}, function(obj){ console.log(obj)});
  })}
 function swichBoard (n, people, key) {
   
 	
 	
   switch(n)
{
 	
 		
 	case ("My Profile"):
 		
 		
 		key.get("who", function(obj) {showProfile(obj.value, people)});
 		console.log("show profile");
 		break;
 	case("Edit My Profile"):
 		
 		Database(people, key);
 		console.log("edit profile");
 		break;
 	case("Contacts"):
 		
 		listProfiles(people);
 		console.log("list contats");
 		break;
 	case("Search"):
 		
 		document.getElementById('searchSubmit').addEventListener('click', function(e){
 			notFaund = document.getElementById("notFaund");
 			term = document.getElementById("term");
			e.preventDefault();
			Search(term, people, notFaund);})
			
			break;
 	default:
 		console.log("no function for this");
 	}
 }
 
 window.onload = function(){
 	
 	var n = document.getElementById("My Profile").innerHTML ;
 	var id = "";
 	var people = loadpeople();
 	var key = loadKey();
 	
	swichBoard (n, people, key); 	
 };
  


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
	    	var ol = document.getElementById('select');
    		var li = document.createElement("li");
    		li.innerHTML= keys.value.ime;
    		console.log(keys.value);
    		li.onclick='location="../html/myProfile.html"; id=this.options[this.selectedIndex].value';
    		
    		ol.insertBefore(li, ol.getElementsByTagName("li")[ol.length]);
	    	
	    	console.log(ol);
	    	/*
	    	select = document.getElementById("select");
	    	console.log(select);
	    	var opt = document.createElement('li');
    		opt.value = keys.key;
	    	
	    	select.opt[select.opt.length] += '<li onclick="location = "../html/myProfile.html"; id=this.options[this.selectedIndex].value">' + opt.value + '</li>';
			console.log(select);
    	*/
	 })
	 }
	 
function Search(term, people, notFaund) {
	
	if(people.exists(term.value, function(exists) {
        
        if (exists===true){
        location = '../html/myProfile.html';
        key.save(key= "who", value=term.value);
        }else{
        	alert("Sorry, Not Faund");
        	console.log("no");
        }
    }));
  
}
 	
   
