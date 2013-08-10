function onStart() {
		const dbName = "Contacts";

		var request = indexedDB.open(dbName, 2);

		request.onerror = function(event) {
  // Handle errors.
  			return 0;
		};
		request.onupgradeneeded = function(event) {
  			var db = event.target.result;.
  		}
  	var objectStore = db.createObjectStore("contacts", { keyPath: "number" });
  	objectStore.createIndex("name", "name", { unique: false });
