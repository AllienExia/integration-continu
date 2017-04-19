var http = require("http");

module.exports = {
  "Is Brochure avaliable" : function (client) {
    var request = http.request({
        host: "localhost",
        port: 8080,
        path: "/static/brochure.pdf",
        method: "HEAD"
    }, function (response) {
      client
        .assert.equal(response.headers["content-length"], 204207, 'Same file size');
      client.end();
    }).on("error", function (err) {
      console.log(err);
      client.end();
    }).end();
  }
};