import Level from "../models/Level.js";

export const getAllLevels = async (req, res) => {
  try {
    const levels = await Level.find();
    res.status(200).json(levels);
  } catch (err) {
    console.error("Error in getAllLevels controller", err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const getLevelById = async (req, res) => {
  try {
    const level = await Level.findById(req.params.id);
    if (!level) {
      return res.status(404).json({
        message: "Level not found",
      });
    }
    res.status(200).json(level);
  } catch (err) {
    console.error("Error in getLevelById controller", err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const createLevel = async (req, res) => {
  try {
    const { levelIndex, title, content } = req.body;
    const level = new Level({ levelIndex, title, content });

    const savedLevel = await level.save();
    res.status(201).json(savedLevel);
  } catch (err) {
    console.error("Error in createLevel controller", err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const updateLevel = async (req, res) => {
  try {
    const { levelIndex, title, content } = req.body;
    const updatedLevel = await Level.findByIdAndUpdate(
      req.params.id,
      {
        levelIndex,
        title,
        content,
      },
      {
        new: true,
      }
    );
    if (!updatedLevel) {
      return res.status(404).json({
        message: "Level not found",
      });
    }
    res.status(200).json(updatedLevel);
  } catch (err) {
    console.error("Error in updateLevel controller", err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const deleteLevel = async (req, res) => {
  try {
    const deletedLevel = await Level.findByIdAndDelete(req.params.id);
    if (!deletedLevel) {
      return res.status(404).json({
        message: "Level not found",
      });
    }
    res.status(200).json({
      message: "Level deleted successfully",
    });
  } catch (err) {
    console.error("Error in deleteLevel controller", err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
