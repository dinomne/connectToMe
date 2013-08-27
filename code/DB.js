require(['../code/idbstore.js'], function(IDBStore){
	
	
	var tpls = {
		row: '<tr><td>{customerid}</td><td><input id="name_{customerid}" value="{name}"></td><tr><td>{customerid}</td><td><input id="name_{customerid}" value="{name}"></td><td><input id="firstname_{customerid}" value="{firstname}"></td><td><button onclick="app.deleteItem({customerid});">delete</button><button onclick="app.updateItem({customerid});">update</button></td></tr>',
		table: '<table><tr><th>ID</th><th>Last Name</th><th>First Name</th><th></th></tr>{content}</table>'
	};
	var contacts 
	function init(){

	
	
		
		// create a store ("table") for the contacts
		contacts = new IDBStore({
			storeName: 'contacts',
			keyPath: 'id',
			autoIncrement: true,
			onStoreReady: refreshTable
		});

		// create references for some nodes we have to work with
		['name', 'id', 'title', 'address', 'email','website', 'edit' ].forEach(function(id){
			nodeCache[id] = document.getElementById(id);
		});

		// and listen to the form's submit button.
		nodeCache.edit.addEventListener('click', enterData);
	}

	function refreshTable(){
		contacts.getAll(listItems);
	}

	function listItems(data){
		var content = '';
		data.forEach(function(item){
			content += tpls.row.replace(/\{([^\}]+)\}/g, function(_, key){
				return item[key];
			});
		});
		nodeCache['results-container'].innerHTML = tpls.table.replace('{content}', content);
	}

	function enterData(){
		// read data from inputs…
		var data = {};
		['name', 'id', 'title', 'address', 'email','website'].forEach(function(key){
			var value = nodeCache[key].value.trim();
			if(value.length){
				if(key == 'id'){ // We want the id to be numeric:
					value = parseInt(value, 10);
				}
				data[key] = value;
			}
		});

		// …and store them away.
		contacts.put(data, function(){
			clearForm();
			refreshTable();
		});
	}

	function clearForm(){
		['id','firstname','lastname'].forEach(function(id){
			nodeCache[id].value = '';
		});
	}

	function deleteItem(id){
		contacts.remove(id, refreshTable);
	}

	function updateItem(id){
		var data = {
			id: id,
			name: document.getElementById('name_' + id).value.trim(),
			email: document.getElementById('email_' + id).value.trim()
		};
		contacts.put(data, refreshTable);
	}

	// export some functions to the outside to
	// make the onclick="" attributes work.
	window.app = {
		deleteItem: deleteItem,
		updateItem: updateItem
	};

	// go!
	init();

});
/*
function onStart() {
	
}
window.addEventListener("load", onStart, false);

/*
function changeMe(e) {
	********(1,name, title, address, email, telephone, website);
}

/*
var contacts = new IDBStore({
  dbVersion: 1,
  storeName: 'contacts',
  keyPath: 'id',
  autoIncrement: true,
  onStoreReady: function(){
    console.log('Store ready!');
  }
});
	
	*/
	

require(['../code/lawnchair'], function one(IDBStore){
	
	var tpls = {
		row: '<tr><td>{customerid}</td><td><input id="name_{customerid}" value="{name}"></td><td><input id="address_{customerid}" value="{address}"><td><input id="email_{customerid}" value="{email}"></td><td><input id="telephone_{customerid}" value="{telephone}"></td><td><input id="website_{customerid}" value="{website}"></td></td><td><button onclick="app.deleteItem({customerid});">delete</button><button onclick="app.updateItem({customerid});">update</button></td></tr>',
		table: '<table><tr><th>ID</th><th>Last Name</th><th>First Name</th><th></th></tr>{content}</table>'
	};
	var contacts;
	
	var nodeCache = {};
	
	function init(){
		
		// create a store ("table") for the customers
		contacts = new IDBStore({
			storeName: 'contacts',
			keyPath: 'id',
			autoIncrement: true,
			//onStoreReady: refreshTable
		});
		['edit', 'id', 'name', 'title', 'address', 'email', 'telephone', 'website', 'result'].forEach(function(id){
			nodeCache[id] = document.getElementById(id);
		});
		if (document.getElementById("edit")){
		nodeCache.edit.addEventListener('click', enterData);
		}
		
		console.log('DB initilised');
	}
	/*
	function refreshTable(){
		contacts.getAll(listItems);
	}

	function listItems(data){
		var content = '';
		data.forEach(function(item){
			content += tpls.row.replace(/\{([^\}]+)\}/g, function(_, key){
				return item[key];
			});
		});
		nodeCache['result'].innerHTML = tpls.table.replace('{content}', content);
	}*/
	function enterData(){
		// read data from inputs…
	   
		var data = {};
		['id', 'name', 'title', 'address', 'email', 'telephone', 'website'].forEach(function(key){
			var value = nodeCache[key].value.trim();
			if(value.length){
				data[key] = value;
				console.log(key + ' inserted');
			}
		});
	// …and store them away.
		contacts.put(data, function(){
			clearForm();
			
			console.log('data stored');
		});
	}
	
	function clearForm(){
		['name', 'title', 'address', 'email', 'telephone', 'website'].forEach(function(key){
			nodeCache[key].value = '';
		});
		console.log("table cleared");
	}
	
	function deleteItem(id){
		contacts.remove(id, refreshTable);
		
	}
	
	function updateItem(id){
		var data = {
			id: id,
			name: document.getElementById('name_' + id).value.trim(),
			title: document.getElementById('title_' + id).value.trim(),
			address: document.getElementById('address_' + id).value.trim(),
			telephone: document.getElementById('telephone_' + id).value.trim(),
			website: document.getElementById('website_' + id).value.trim()
		};
		contacts.put(data, refreshTable);
	}
	// export some functions to the outside to
	// make the onclick="" attributes work.
	window.app = {
		deleteItem: deleteItem,
		updateItem: updateItem
	};
	/*
	function showCotact(id){
		
		['name', 'title', 'address', 'email', 'telephone', 'website'].forEach(function(key){
			nodeCache['result'].innerHTML += <p id=key> [id].key </key>;
	}*/
	// go!
	init();
	


function getData(id) {

	var onsuccess = function(data) {
		var result = document.getElementById('result');
		result.innerHTML = data;
		console.log(data);
	}
	var onerror = function(error) {
		console.log('Oh noes, sth went wrong!', error);
	}

	contacts.get(id, onsuccess, onerror);

}
	getData(1);
});

<
	