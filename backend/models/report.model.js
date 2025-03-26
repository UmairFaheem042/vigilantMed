import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
  {
    claimId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Claim",
      required: true,
    },
    report: {
      type: String,
      required: true,
      enum: ["Genuine", "Fraud", "Pending"],
      default: "Pending",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // probabilityScore: {
    //   type: Number,
    //   required: true,
    // },
    // fraudPrediction: {
    //   type: String,
    //   required: true,
    //   enum: ["Genuine", "Fraud"],
    // },
  },
  { timestamps: true }
);

const Report = mongoose.models.Report || mongoose.model("Report", reportSchema);

export default Report;
