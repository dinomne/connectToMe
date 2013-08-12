function onStart() {
	var name = document.getElementById('name').value;
	var title = document.getElementById('title').value;
	var address = document.getElementById('address').value;
	var email = document.getElementById('email').value;
	var telephone = document.getElementById('telephone').value;
	var website = document.getElementById('website').value;
	var button = document.getElementById("edit");
   button.addEventListener("onclick", changeMe, false);
}
window.addEventListener("load", onStart, false);

contacts = {};
contacts.indexedDB = {};
contacts.indexedDB.db = null;

contacts.indexedDB.open = function() {
  var version = 1;
  var request = indexedDB.open("contacts", version);

  request.onupgradeneeded = function(e) {
    var db = e.target.result;

	/* version change
    // A versionchange transaction is started automatically.
    e.target.transaction.onerror = contacts.indexedDB.onerror;

    if(db.objectStoreNames.contains("contacts")) {
      db.deleteObjectStore("contacts");
    }

    var store = db.createObjectStore("contacts",
      {keyPath: "timeStamp"});
  };
	*/
  request.onsuccess = function(e) {
    contacts.indexedDB.db = e.target.result;
    contacts.indexedDB.getAllContacts;
  };

  request.onerror = contacts.indexedDB.onerror;
};}

contacts.indexedDB.addContacts = function(name, title, adress, email, telephone, website){
  var db = contacts.indexedDB.db;
  var trans = db.transaction(["contacts"], "readwrite");
  var store = trans.objectStore("contacts");
  var request = store.put({
    "name": name,
    "title": title,
    "address":address,
    "email": email,
    "telephone":telephone,
    "website":website
  });

  request.onsuccess = function(e) {
    // Re-render all the todo's
    contacts.indexedDB.getAllTodoItems();
  };

  request.onerror = function(e) {
    console.log(e.value);
  };
};
contacts.indexedDB.getAllContacts = function() {
  var contacts = document.getElementById("num");
  contacts.innerHTML = "";

  var db = contacts.indexedDB.db;
  var trans = db.transaction(["contacts"], "readwrite");
  var store = trans.objectStore("contacts");

  // Get everything in the store;
  var keyRange = IDBKeyRange.lowerBound(0);
  var cursorRequest = store.openCursor(keyRange);

  cursorRequest.onsuccess = function(e) {
    var result = e.target.result;
    if(!!result == false)
      return;

    renderTodo(result.value);
    result.continue();
  };

  cursorRequest.onerror = contacts.indexedDB.onerror;
};
	contacts.indexedDB.deleteTodo = function(id) {
  var db = contacts.indexedDB.db;
  var trans = db.transaction(["contacts"], "readwrite");
  var store = trans.objectStore("contacts");

  var request = store.delete(id);

  request.onsuccess = function(e) {
    contacts.indexedDB.getAllContacts();  // Refresh the screen
  };

  request.onerror = function(e) {
    console.log(e);
  };
};
function init() {
  contacts.indexedDB.open(); // open displays the data previously saved
}

window.addEventListener("DOMContentLoaded", init, false);
function addContacts() {
  var todo = document.getElementById('todo');

  contacts.indexedDB.addContacts(todo.value);
  todo.value = '';
}	

function changeMe(e) {
	contacts.indexedDB.addContacts(name, title, adress, email, telephone, website);
}


	
	
	
	
	
	
	
