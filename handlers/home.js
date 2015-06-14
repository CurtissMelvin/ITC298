  var Lists = require("../models/Lists");

  module.exports = function(req, reply) {
    var list = new Lists();
    list.load(function) {
      var data = list.JSON();
      console.log(data);
    });
  });
