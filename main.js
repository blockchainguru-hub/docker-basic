const express = require("express");
const app = express();

const PORT = process.env.PORT || 9000;

app.get("/", (req, res) => {
  return res.json({ message: "Hey, I am node js server inside a container" });
});

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
