const express = require("express");
const router = express.Router();

const capitals = require("./data");
const path = require("path");

const dateTime = require("./dateTime");

//Routes
router.get("/", (req, res) => {
  res.set("Content-Type", "text/html;charset=UTF-8");
  res.status(200);
  res.sendFile(path.join(__dirname, "../views/index.html"));
});

router.get("/:cityName", (req, res) => {
  res.set("Content-Type", "text/html;charset=UTF-8");
  res.status(200);
  let cityFromCollection;
  // Looking for a match between url param and the city in the collection.
  capitals.forEach((capital) => {
    if (capital.name.toLowerCase() === req.params.cityName) {
      cityFromCollection = capital;
    }
  });
// If the match has been found send the response.
  if (cityFromCollection) {
    res.render('city', {city: cityFromCollection, dateTime, goBack: req.baseUrl});
  } else {
    res.render('notFound', {urlParam: req.params.cityName, goBack: req.baseUrl});
  }
});

module.exports = router;
