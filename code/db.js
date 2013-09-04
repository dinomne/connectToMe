/*@@@@@@@@@@@@@@@@@@@
 * Made by Dinomne, feel free to reuse it it's open source'
 * 
 * The first tu functions initilase the DB's; onload function makes sure that everyting is loaded
 * 
 * and it calls swichboard function which dependig on the page the user is currently on chooses what to do:
 * The choises are: showProfile, EditProfile (or add new), listContacts or search for a contact.
 * 
 * It uses IndexDB with lawnchair wrapper. 
 * One db is for contacts the other one is a helper that stores which key is shown by Show Profile
 * Also it read's from the db to choose which teme to insert (temes are in css/teme)
 * 
 */
function loadKey () {

key = Lawnchair({name:'key', record:'key1'},function() { console.log("db key created");}); return (key);
}

function loadpeople () {

people = Lawnchair({name:'people', record:'person'},function() { console.log("db created");});
return(people);
}


window.onload = function(){
 	
 	var n = document.getElementById("My Profile").innerHTML ;
 	var id = "";
 	var people = loadpeople();
 	var key = loadKey();
 	
	swichBoard (n, people, key); 	
 };

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
 
function Database(people, key){
	var form;
	document.getElementById('edit').addEventListener('click', function(){
		
	var input = document.getElementsByTagName("input");
	var teme = 	document.getElementById('temeNo').value;
	var who = document.getElementById('who').value;
	
	form = {
				'ime': input[0].value,
				'title': input[1].value,
				'address':input[2].value,
			 	'email': input[3].value,
			 	'telephone': input[4].value,
			 	'website': input[5].value, 
			 	'temeNo': teme,
			 	
			 	};
	
    if (who==="me"){
    	people.save({key: "me", value:form}, function(obj){ console.log(obj)});		
    	key.save({key: "who", value:"me"}, function(obj){ console.log(obj)});
    }else{
    	people.save({key: form.ime, value:form}, function(obj){ console.log(obj)});		
    	key.save({key: form.ime, value:form.ime}, function(obj){ console.log(obj)});
    }
    
  })}
 
 
  


function showProfile(id, people){
 		
 		
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
 
 function listProfiles(people){
 	
 
 		people.each(function add (keys) {
	    	var ol = document.getElementById('select');
    		var li = document.createElement("li");
    		
    		li.innerHTML= keys.value.ime;
    		console.log(keys.value);
    		li.onclick='location="../html/myProfile.html"; id=this.options[this.selectedIndex].value';
    		ol.insertBefore(li, ol.getElementsByTagName("li")[ol.length]);
	    	console.log(ol);
	    	
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
 	
   
