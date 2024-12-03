var express = require("express");
var router = express.Router();
var dashboardController = require("../controllers/dashboardController");

router.post("/inserirDadosSensor", function (req, res) {
    dashboardController.inserirDadosSensor(req, res);
});

router.post("/inserirAlerta", function (req, res) {
    dashboardController.inserirAlerta(req, res);
});

router.get("/obterDadosDashboard/:idSensor", function (req, res) {
    dashboardController.obterDadosDashboard(req, res);
});

module.exports = router;
