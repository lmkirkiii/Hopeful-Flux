const express = require("express");
const router = express.Router();
const fluxController = require("../controllers/flux");

router.post("/", fluxController.requireAuth, fluxController.create);
router.get("/new", fluxController.requireAuth, fluxController.new);
router.get("/:id", fluxController.show);
router.put("/:id", fluxController.requireAuth, fluxController.update);
router.delete("/:id" fluxController.requireAuth, fluxController.delete);

module.exports = router;