function loadScript(url, callback)
{
    // adding the script tag to the head as suggested before
   var head = document.getElementsByTagName('head')[0];
   var script = document.createElement('script');
   script.type = 'text/javascript';
   script.src = url;

   // then bind the event to the callback function 
   // there are several events for cross browser compatibility
   script.onreadystatechange = callback;
   script.onload = callback;

   // fire the loading
   head.appendChild(script);
}

function onStart() {
var customers = new IDBStore({
  dbVersion: 1,
  storeName: 'contacts',
  keyPath: 'id',
  autoIncrement: true,
  onStoreReady: function(){
    console.log('Store ready!');
  }})
  
  
  ['name', 'id', 'email', 'telephone', 'address', 'website', 'email', 'title'].forEach(function(id){
			nodeCache[id] = document.getElementById(id);
		});

		// and listen to the form's submit button.
		nodeCache.edit.addEventListener('click', enterData);
  
  function enterData(){
		// read data from inputs…
		var data = {};
		['name', 'id', 'email', 'telephone', 'address', 'website', 'email', 'title'].forEach(function(key){
			var value = nodeCache[key].value.trim();
			if(value.length){
				if(key == 'id'){ // We want the id to be numeric:
					value = parseInt(value, 10);
				}
				data[key] = value;
			}
		});

		// …and store them away.
		customers.put(data, function(){
			clearForm();
			refreshTable();
		});
		function clearForm(){
		['name', 'id', 'email', 'telephone', 'address', 'website', 'email', 'title'].forEach(function(id){
			nodeCache[id].value = '';
		});
	}
  
  
  
  
  
  
};
}
window.addEventListener("load", loadScript("IDBStore.js", onStart), false);


	
