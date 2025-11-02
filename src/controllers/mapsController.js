import KotaDetails from "../models/Kota.js";

// ✅ GET semua data kota
export const getAllKota = async (req, res) => {
  try {
    const kotas = await KotaDetails.find();
    res.status(200).json(kotas);
  } catch (err) {
    console.error("Error in getAllKota controller", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ✅ GET 1 kota berdasarkan ID
export const getKotaById = async (req, res) => {
  try {
    const kota = await KotaDetails.findById(req.params.id);
    if (!kota) {
      return res.status(404).json({ message: "Kota not found" });
    }
    res.status(200).json(kota);
  } catch (err) {
    console.error("Error in getKotaById controller", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ✅ CREATE kota baru
export const createKota = async (req, res) => {
  try {
    const { title, boss, challenge } = req.body;

    const kota = new KotaDetails({
      title,
      boss,
      challenge,
    });

    const savedKota = await kota.save();
    res.status(201).json(savedKota);
  } catch (err) {
    console.error("Error in createKota controller", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ✅ UPDATE kota
export const updateKota = async (req, res) => {
  try {
    const { title, boss, challenge } = req.body;

    const updatedKota = await KotaDetails.findByIdAndUpdate(
      req.params.id,
      { title, boss, challenge },
      { new: true }
    );

    if (!updatedKota) {
      return res.status(404).json({ message: "Kota not found" });
    }

    res.status(200).json(updatedKota);
  } catch (err) {
    console.error("Error in updateKota controller", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ✅ DELETE kota
export const deleteKota = async (req, res) => {
  try {
    const deletedKota = await KotaDetails.findByIdAndDelete(req.params.id);

    if (!deletedKota) {
      return res.status(404).json({ message: "Kota not found" });
    }

    res.status(200).json({ message: "Kota deleted successfully" });
  } catch (err) {
    console.error("Error in deleteKota controller", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
