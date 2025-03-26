import React from "react";
import { formatDateTime } from "../utils/date-time";


const Details = ({ claim }) => {
  return (
    <div className="w-full max-w-[600px] flex flex-col gap-4 border border-gray-300 rounded-md p-4">
      <p>
        Patient Name: <span className="font-bold">{claim.patientName}</span>
      </p>
      <p>
        Hospital Name: <span className="font-bold">{claim.hospitalName}</span>
      </p>
      <p>
        Insurance Provider:{" "}
        <span className="font-bold">{claim.insuranceProvider}</span>
      </p>
      <p>
        Diagnosis: <span className="font-bold">{claim.diagnosis}</span>
      </p>
      <p>
        Procedure: <span className="font-bold">{claim.procedure}</span>
      </p>
      <p>
        Admission Date:{" "}
        <span className="font-bold">{formatDateTime(claim.admissionDate)}</span>
      </p>
      <p>
        Discharge Date:{" "}
        <span className="font-bold">{formatDateTime(claim.dischargeDate)}</span>
      </p>
      <p>
        Total Bill: <span className="font-bold">{claim.totalBill}</span>
      </p>
      <p>
        Fraud Prediction:{" "}
        <span className="font-bold">{claim.fraudPrediction}</span>
      </p>
    </div>
  );
};

export default Details;
