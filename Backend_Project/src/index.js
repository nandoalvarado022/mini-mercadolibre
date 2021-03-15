const { response } = require("express");
const express = require("express")
const app = express();

// config
app.set("port", process.env.PORT || 8080);
app.set("json spaces", 2);

// middlewares
app.use(express.urlencoded({ extended: false }))

// routes
app.use(require("./routes/index"));

app.listen(app.get("port"), () => {
  console.log(`Server on ${app.get("port")}`)
})