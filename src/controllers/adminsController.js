import Admin from "../models/Admin.js";

export const getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).json(admins);
  } catch (err) {
    console.error("Error in getAllAdmins controller", err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const createAdmin = async (req, res) => {
  try {
    const { email } = req.body;
    const admin = new Admin({ email });

    const savedAdmin = await admin.save();
    res.status(201).json(savedAdmin);
  } catch (err) {
    console.error("Error in createAdmin controller", err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const updateAdmin = async (req, res) => {
  try {
    const { email } = req.body;
    const updatedAdmin = await Admin.findByIdAndUpdate(req.params.id, {
      email,
    });
    if (!updatedAdmin) {
      return res.status(404).json({
        message: "Admin not found",
      });
    }
    res.status(200).json(updatedAdmin);
  } catch (err) {
    console.error("Error in updateAdmin controller", err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const deleteAdmin = async (req, res) => {
  try {
    const deletedAdmin = await Admin.findByIdAndDelete(req.params.id);
    if (!deletedAdmin) {
      return res.status(404).json({
        message: "Admin not found",
      });
    }
    res.status(200).json({
      message: "Admin deleted successfully",
    });
  } catch (err) {
    console.error("Error in deleteAdmin controller", err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
