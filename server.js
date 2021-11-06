const express = require("express");
const app = express();

//LOCAL PORT
const PORT = process.env.PORT || 3001;

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

//ROUTES
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.use(express.static('public'));

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});