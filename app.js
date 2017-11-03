let express = require("express");
let app = express();
require('dotenv').config();
var bodyParser = require('body-parser');

// app.use(bodyParser);
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

let routes = require("./routes/");

app.use(`/`, routes);

app.use((req, res, next) => {
  let err = new Error("Not Found");
  err.status = 404;
  next("Moving Along");
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  console.log('err', err);  
  res.json({
    message: "Error, Time Warp",
    err: err
  });
});

let port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});