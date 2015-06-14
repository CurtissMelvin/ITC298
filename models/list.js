    //list.js

    var Backbone = require("backbone");
    var sql = require("../database");
    var

    var List = Backbone.Model.extend({
      defaults: {
        description: "",
        date: "",
        status: ""
      },

      create: function(callback) {
          callback = callback || function() {};
          //get its ownd database
          var data = this.JSON();
          //run an INSERT on the database
          var q = "INSERT INTO list (description, date, status) VALUES ($description, $date, $status);";
          //pass in its database
          sql.connection.run(q, {
            $description: data.task,
            $date: data.date,
            $status: data.status,
          }, function() {
            callback();
          });
    },
    load: function(callback) {
        var self = this;
        var q = "SELECT * FROM lists WHERE rowid = $id;";
        //get a single  result
        sql.connection.get(q, {
          $id: this.get("id")
        }, function(err, results) {
          self.set(results);
          callback();
        });
    }
});

module.exports = List;
