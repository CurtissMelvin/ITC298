    //Lists.js

    var Backbone = require("backbone");
    var sql = require("../database");
    var list = require("./list");

    var Lists = Backbone.Collection.extend({
      model: list,
      load: function(callback){
        var self = this;
        var q = "SELECT rowid AS id, description, date, status FROM lists;"
        sql.connection.all(q, function(err, results) {
          self.reset(results);
          callback();
        });
      }
    });

    module.exports = Lists;
