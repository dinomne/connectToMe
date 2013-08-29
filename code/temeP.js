
require(['../code/lawnchair'], Lawnchair({name:'people', record:'person'},function OnLoad (people) {
	var teme = document.getElementById("temeL");
	
	people.get(id, function(obj) {
			if(obj) {
           	 val = obj.value;
            
   			teme.href = '../css/teme/' + val['temeNo']+ '.css';
   					console.log('href="../css/teme/' + val['temeNo']+ '.css"');
            
            }else {
            	console.log("task not found");}
        });
      }))