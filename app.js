const express = require("express");
const cors = require("cors");

const app = express();

const speciesController = require("./controllers/speciesController");
const productsController = require("./controllers/productsController");
const tankLogsController = require("./controllers/tankLogsController");
const tankmatesController = require("./controllers/tankmatesController");
const tanksController = require("./controllers/tanksController");
const usersController = require("./controllers/usersController");
const productImagesController = require("./controllers/productImagesController");
const productReviewsController = require("./controllers/productReviewsController");
const plantsController = require("./controllers/plantsController");
const plantImagesController = require("./controllers/plantImagesController");
const plantReviewsController = require("./controllers/plantReviewsController");

app.use(cors());
app.use(express.json());

app.use("/species", speciesController);
app.use("/products", productsController);
app.use("/tanklogs", tankLogsController);
app.use("/tankmates", tankmatesController);
app.use("/tanks", tanksController);
app.use("/users", usersController);
app.use("/product-images", productImagesController);
app.use("/product-reviews", productReviewsController);
app.use("/plants", plantsController);
app.use("/plant-images", plantImagesController);
app.use("/plant-reviews", plantReviewsController);

app.get("/", (_, response) => {
	response.send("Welcome to Tankmates app");
});

app.get("*", (_, response) => {
	response.send("404 Page not found");
});

module.exports = app;
