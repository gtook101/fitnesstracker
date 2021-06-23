const { resolve } = require("path");
const path = require("path");

module.exports = function (app) {
  app.get("*", function (app) {
    res.sendFile(path.join(_dirname, "../public/index.html"));
  });
  app.get("*", function (app) {
    res.sendFile(path.join(_dirname, "../public/exercise.html"));
  });
  app.get("*", function (app) {
    res.sendFile(path.join(_dirname, "../public/stats.html"));
  });
};
