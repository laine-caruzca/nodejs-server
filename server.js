const express = require("express");
const app = express();
app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  // res.json({
  //   name: "Laine",
  // });
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(PORT, () => console.log("Server is running on PORT " + PORT));
