var localtunnel = require("localtunnel");
localtunnel(5000, { subdomain: "rbsflvrtwn" }, function(err, tunnel) {
  console.log("LT running");
});
