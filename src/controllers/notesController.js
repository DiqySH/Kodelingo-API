import Note from "../models/Note.js";

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (err) {
    console.error("Error in getAllNotes controller", err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });

    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (err) {
    console.error("Error in createNote controller", err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    await Note.findByIdAndUpdate(req.params.id, { title, content });
    res.status(200).json({
      message: "Note updated successfully",
    });
  } catch (err) {
    console.error("Error in updateNote controller", err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
