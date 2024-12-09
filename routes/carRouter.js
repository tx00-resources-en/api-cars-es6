import express from "express";
import {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
} from "../controllers/carControllers.js";

const router = express.Router();

router.get("/", getAllCars);
router.get("/:carId", getCarById);
router.post("/", createCar);
router.put("/:carId", updateCar);
router.delete("/:carId", deleteCar);

export default router;
