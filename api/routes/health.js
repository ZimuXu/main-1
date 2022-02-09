import express from "express";
import * as healthController from "../controllers/health.js";


const router = express.Router();


router.route('/healthz')
.get(healthController.index)
 


export default router;