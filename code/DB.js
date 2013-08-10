function onStart() {
	var name = document.getElementById('name').value;
	var title = document,getElementById('title').value;
	var address = document.getElementById('address').value;
	var email = document,getElementById('email').value;
	var telephone = document,getElementById('telephone').value;
	var website = document,getElementById('website').value;
}\
window.addEventListener("load", onStart, false);


contacts.indexedDB.db = null;

contacts.indexedDB.open = function() {
  var version = 1;
  var request = indexedDB.open("contacts", version);

  request.onupgradeneeded = function(e) {
    var db = e.target.result;

	/* version change
    // A versionchange transaction is started automatically.
    e.target.transaction.onerror = html5rocks.indexedDB.onerror;

    if(db.objectStoreNames.contains("contacts")) {
      db.deleteObjectStore("contacts");
    }

    var store = db.createObjectStore("contacts",
      {keyPath: "timeStamp"});
  };
	*/
  request.onsuccess = function(e) {
    html5rocks.indexedDB.db = e.target.result;
    html5rocks.indexedDB.getAllTodoItems();
  };

  request.onerror = html5rocks.indexedDB.onerror;
};

contacts.indexedDB.addTodo = function(todoText) {
  var db = html5rocks.indexedDB.db;
  var trans = db.transaction(["contacts"], "readwrite");
  var store = trans.objectStore("contacts");
  var request = store.put({
    "name": todoText,
    "title": title,
    "address":address,
    "email": email,
    "telephone":telephone,
    "website":website
  });

  request.onsuccess = function(e) {
    // Re-render all the todo's
    html5rocks.indexedDB.getAllTodoItems();
  };

  request.onerror = function(e) {
    console.log(e.value);
  };
};
	
	
	
	
	
	
	
	
	
	var store = db.openObjectStore('Friends');
	var user = store.put({name: 'Eric', gender: 'male', likes: 'html5'});