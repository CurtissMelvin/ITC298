  //database.js

  var sqlite = require("sqlite3");

  var facade = {
    connection: null,
    init: function(callback) {
        var db = new sqlite.Database("#.db");
        facade.connection = db;
        db.run("CREATE TABLE IF NOT EXISTS 'tablename' (tablecolumn(task),tablecolumn(complete))", function(){
          callback();
      });
    }
  };

  module.exports = facade;
