  //reminder.js

  var Backbone = require("backbone");
  var sql = require("../database");

  var Reminder = Backbone.Model.extend({
    defaults: {
      task: "",
      complete: false
    },

    create: function(callback) {
      callback = callback || function() {};
      //get its own data
      var data = this.toJSON();
      //run on INSERT on the database
      var q = "INSERT INTO reminders (columnname,columnname) VALUES ($columnname, $columnname);";
      //pass in its database
      sql.connection.run(q, {
        $columnname: data.columnname,
        $columnname: data.columnname
      }, callback);
      //when done, call the callback
    }
  });

  module.exports = Reminder;
