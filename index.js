  //index.js
  var hapi = require("hapi");
  var server = new hapi.Server();
  server.connection({ port: 8000 });
  server.start();

  //view config
  server.views({
    //path: "templates",
    engines: {
      html: require("handlebars")
    },
    path: "./views/templates",
    layoutPath: "layouts",
    layout: "defaults",
    isCached: false
  });

  var List = require("./models/list");

  var sql = require("./database");
  sql.init(function() {
    console.log("database ready");
    var list = new Lists({
      task: "Start server"
    });
    //console.log(list.toJSON());
    list.create(function(err){
      if(err) {
        console.error(err);
      }
    });r

    server.start();
  });

  var routes = require("./routes");
  server.route(routes);
