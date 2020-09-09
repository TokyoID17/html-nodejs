const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => { // Path
  response.sendFile(__dirname + "/index.html"); // Index.html
});

const listener = app.listen("80", () => { // Port
  console.log("Your app is listening on port " + listener.address().port);
});
