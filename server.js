const express = require('express');
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");
const PORT = process.env.PORT || 3001;
const app = express();



app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });