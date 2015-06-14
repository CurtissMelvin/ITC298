  //database.js

  var sqlite = require("sqlite3");

  var facade = {
    connection: null,
    init: function(callback) {
        var db = new sqlite.Database("ToDoList.db");
        facade.connection = db;
        db.run("CREATE TABLE IF NOT EXISTS 'Description', 'Date', 'Status')", function(){
          callback();
      });
    }
  };

  module.exports = facade;
