import Entity from "../models/Entity.js";

export const getAllEntities = async (req, res) => {
  try {
    const entities = await Entity.find();
    res.status(200).json(entities);
  } catch (err) {
    res.status(500).json({ message: "Error fetching entities", error: err });
  }
};

export const getEntityByName = async (req, res) => {
  try {
    const entity = await Entity.findOne({ name: req.params.name });
    if (!entity) return res.status(404).json({ message: "Entity not found" });
    res.status(200).json(entity);
  } catch (err) {
    res.status(500).json({ message: "Error fetching entity", error: err });
  }
};

export const createEntity = async (req, res) => {
  try {
    const entity = new Entity(req.body);
    await entity.save();
    res.status(201).json(entity);
  } catch (err) {
    res.status(400).json({ message: "Error creating entity", error: err });
  }
};

export const updateEntity = async (req, res) => {
  try {
    const entity = await Entity.findOneAndUpdate(
      { name: req.params.name },
      req.body,
      { new: true }
    );
    if (!entity) return res.status(404).json({ message: "Entity not found" });
    res.status(200).json(entity);
  } catch (err) {
    res.status(400).json({ message: "Error updating entity", error: err });
  }
};

export const deleteEntity = async (req, res) => {
  try {
    const entity = await Entity.findOneAndDelete({ name: req.params.name });
    if (!entity) return res.status(404).json({ message: "Entity not found" });
    res.status(200).json({ message: "Entity deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: "Error deleting entity", error: err });
  }
};
