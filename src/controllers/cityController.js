import City from "../models/City.js";
import Entity from "../models/Entity.js";

export const getAllCities = async (req, res) => {
  try {
    const cities = await City.find();
    res.status(200).json(cities);
  } catch (err) {
    res.status(500).json({ message: "Error fetching cities", error: err });
  }
};

export const getCityByName = async (req, res) => {
  try {
    const city = await City.findOne({ name: req.params.name });
    if (!city) return res.status(404).json({ message: "City not found" });

    const entityNames = city.levels.map((lvl) => lvl.entityName);
    const entities = await Entity.find({ name: { $in: entityNames } });

    const levelsWithEntity = city.levels.map((lvl) => ({
      ...lvl,
      entity: entities.find((e) => e.name === lvl.entityName),
    }));

    res.status(200).json({ ...city.toObject(), levels: levelsWithEntity });
  } catch (err) {
    res.status(500).json({ message: "Error fetching city", error: err });
  }
};

export const createCity = async (req, res) => {
  try {
    const city = new City(req.body);
    await city.save();
    res.status(201).json(city);
  } catch (err) {
    res.status(400).json({ message: "Error creating city", error: err });
  }
};

export const updateCity = async (req, res) => {
  try {
    const city = await City.findOneAndUpdate(
      { name: req.params.name },
      req.body,
      { new: true }
    );
    if (!city) return res.status(404).json({ message: "City not found" });
    res.status(200).json(city);
  } catch (err) {
    res.status(400).json({ message: "Error updating city", error: err });
  }
};

export const deleteCity = async (req, res) => {
  try {
    const city = await City.findOneAndDelete({ name: req.params.name });
    if (!city) return res.status(404).json({ message: "City not found" });
    res.status(200).json({ message: "City deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: "Error deleting city", error: err });
  }
};
