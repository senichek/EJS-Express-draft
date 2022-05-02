const express = require("express");
const app = express();

const cityRoutes = require("./my_modules/router");

// EJS setup
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./public'));

app.use("/city", cityRoutes);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

app.use((req, res) => {
  res.status(404);
  res.send("Page not found");
});
