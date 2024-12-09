let carArray = [];
let nextId = 1;

function getAll() {
  return carArray;
}

function addOne(carData) {
  const { model, color, age } = carData;
  if (!model || !color || !age) {
    return false;
  }

  const newItem = {
    id: nextId++,
    ...carData,
  };

  carArray.push(newItem);
  return newItem;
}

function findById(id) {
  const numericId = Number(id);
  const item = carArray.find((item) => item.id === numericId);
  return item || false;
}

function updateOneById(id, updatedData) {
  const car = findById(id);
  if (car) {
    Object.assign(car, updatedData);
    return car;
  }
  return false;
}

function deleteOneById(id) {
  const item = findById(id);
  if (item) {
    const initialLength = carArray.length;
    carArray = carArray.filter((item) => item.id !== Number(id));
    return carArray.length < initialLength;
  }
  return false;
}

const Car = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};

export default Car;
