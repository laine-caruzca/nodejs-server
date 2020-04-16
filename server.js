const express = require("express");
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.get("/test", (req, res) => {
  res.json({
    name: "Laine",
  });
});

app.listen(PORT, () => console.log("Server is running on PORT " + PORT));
