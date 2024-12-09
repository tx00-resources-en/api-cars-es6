import Car from "../models/carModel.js";

// GET /cars
export const getAllCars = (req, res) => {
  const cars = Car.getAll();
  res.json(cars);
};

// POST /cars
export const createCar = (req, res) => {
  const newCar = Car.addOne({ ...req.body });

  if (newCar) {
    res.json(newCar);
  } else {
    res.status(500).json({ message: "Failed to create car" });
  }
};

// GET /cars/:carId
export const getCarById = (req, res) => {
  const carId = req.params.carId;
  const car = Car.findById(carId);
  if (car) {
    res.json(car);
  } else {
    res.status(404).json({ message: "Car not found" });
  }
};

// PUT /cars/:carId
export const updateCar = (req, res) => {
  const carId = req.params.carId;
  const updatedCar = Car.updateOneById(carId, { ...req.body });

  if (updatedCar) {
    res.json(updatedCar);
  } else {
    res.status(404).json({ message: "Car not found" });
  }
};

// DELETE /cars/:carId
export const deleteCar = (req, res) => {
  const carId = req.params.carId;
  const isDeleted = Car.deleteOneById(carId);

  if (isDeleted) {
    res.json({ message: "Car deleted successfully" });
  } else {
    res.status(404).json({ message: "Car not found" });
  }
};