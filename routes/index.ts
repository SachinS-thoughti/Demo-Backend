import express from 'express';
const router = express.Router();
const apiRoutes = require("./server.api");

router.use("/api", apiRoutes);

module.exports = router;
