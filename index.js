const express = require("express");
const app = express();
const router = require("./routes");
const db = require("./models/_db");

require("dotenv").config();

const port = process.env.PORT || 3000;

app.set("port", port);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

db.sync({ force: false })

  .then(() => {
    app.listen(app.get("port"), () =>
      console.log(`Servidor escuchando en el puerto ${app.get("port")}`)
    );
  })
  .catch(console.error);
