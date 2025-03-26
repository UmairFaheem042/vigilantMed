import Claim from "../models/claim.model.js";
import User from "../models/user.model.js";
import Report from "../models/report.model.js";

export const getClaims = async (req, res) => {
  try {
    console.log("req.user: ", req.user); // this is undefined but why?

    const userId = req.user.id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }
    const claims = await Claim.find({ user: userId });

    res.status(200).json({
      success: true,
      message: "Claims fetched successfully",
      data: claims,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error getting claims",
      error: error.message,
    });
  }
};

export const getClaim = async (req, res) => {
  try {
    const { id } = req.params;
    const claim = await Claim.findById(id);
    if (!claim) {
      return res.status(404).json({
        success: false,
        message: "Claim not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Claim fetched successfully",
      data: claim,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error getting claim",
      error: error.message,
    });
  }
};

export const createClaim = async (req, res) => {
  try {
    const userId = req.user.id;
    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }
    const {
      patientName,
      hospitalName,
      diagnosis,
      procedure,
      admissionDate,
      dischargeDate,
      totalBill,
      insuranceProvider,
    } = req.body;
    if (
      !patientName ||
      !hospitalName ||
      !diagnosis ||
      !procedure ||
      !admissionDate ||
      !dischargeDate ||
      !totalBill ||
      !insuranceProvider
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const claim = await Claim.create({
      user: userId,
      patientName,
      hospitalName,
      diagnosis,
      procedure,
      admissionDate,
      dischargeDate,
      totalBill,
      insuranceProvider,
      fraudPrediction: "Pending",
    });

    // push to user claims array
    await User.findByIdAndUpdate(userId, {
      $push: { claims: claim._id },
    });

    res.status(201).json({
      success: true,
      message: "Claim created successfully",
      data: claim,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating claim",
      error: error.message,
    });
  }
};

export const deleteClaim = async (req, res) => {
  try {
    const userId = req.user.id;
    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Claim ID is required",
      });
    }
    const claim = await Claim.findByIdAndDelete(id);
    if (!claim) {
      return res.status(404).json({
        success: false,
        message: "Claim not found",
      });
    }

    // delete report
    await Report.findByIdAndDelete(claim.report);

    // pull from user claims array
    await User.findByIdAndUpdate(userId, {
      $pull: { claims: id },
    });

    res.status(200).json({
      success: true,
      message: "Claim deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting claim",
      error: error.message,
    });
  }
};
