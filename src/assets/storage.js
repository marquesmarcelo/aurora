//setp on
window.indexedDB = window.indexedDB || window.mozindexedDB || window.msindexedDB;

//step two
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;

//step three
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

if (!window.indexedDB) {
    alert("Your browser is not supported indexDB");
}

var db;
// version number = 1
var request = window.indexedDB.open("aurora", 1);

request.onerror = function (event) {
    console.log("error: "+ event.target.result);
};

request.onsuccess = function (event) {
    db = request.result;
    console.log("sucess: " + db);
};

request.onupgradeneeded = function (event) {
    var db = event.target.result;
    var objectStore = db.createObjectStore("aurora");
};