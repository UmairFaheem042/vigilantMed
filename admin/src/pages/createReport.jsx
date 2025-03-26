import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useReportStore from "../store/reportStore";
const CreateReport = () => {
  //   const { createClaim } = useClaimStore();
  const { createReport } = useReportStore();
  const navigate = useNavigate();
  const { id } = useParams();

  const [remarks, setRemarks] = useState("");

  const claimStatus = "Approved";

  async function handleSubmit(e) {
    e.preventDefault();

    const result = await createReport({
      claimId: id,
      claimStatus,
      remarks,
    });

    if (result) {
      setRemarks("");

      navigate("/dashboard");
    } else {
      alert("Failed to create claim");
    }
  }

  return (
    // a form with fields for the claim
    <div className="flex-1 flex flex-col items-center justify-center gap-6 p-4">
      <h1 className="mt-8 text-2xl font-bold">Create Report</h1>
      <form
        onSubmit={handleSubmit}
        className="mb-8 border border-gray-300 rounded-md flex flex-col gap-4  p-4 md:max-w-[600px] w-full text-sm"
      >
        <div className="flex flex-col gap-2 cursor-not-allowed">
          <label>Reference Claim ID</label>
          <input
            type="text"
            className="input w-full pointer-events-none bg-gray-100 outline-none"
            // disabled
            value={id}
            readOnly
          />
        </div>
        <div className="flex flex-col gap-2 cursor-not-allowed">
          <label htmlFor="hospitalName">Claim Status</label>
          <input
            type="text"
            className={`input w-full font-semibold pointer-events-none bg-gray-100 ${
              claimStatus === "Approved" ? "text-success" : "text-error"
            }`}
            value={claimStatus}
            readOnly
            // disabled
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="diagnosis">Remarks</label>
          <textarea
            id="remarks"
            placeholder="Remarks"
            className="textarea w-full"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-success text-white">
          Create Report
        </button>
      </form>
    </div>
  );
};

export default CreateReport;
