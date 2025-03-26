import React, { useState } from "react";
import useClaimStore from "../store/claimStore";
import { useNavigate } from "react-router-dom";

const CreateClaim = () => {
  const { createClaim } = useClaimStore();
  const navigate = useNavigate();

  const [patientName, setPatientName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [procedure, setProcedure] = useState("");
  const [admissionDate, setAdmissionDate] = useState("");
  const [dischargeDate, setDischargeDate] = useState("");
  const [totalBill, setTotalBill] = useState("");
  const [insuranceProvider, setInsuranceProvider] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const result = await createClaim({
      patientName,
      hospitalName,
      diagnosis,
      procedure,
      admissionDate,
      dischargeDate,
      totalBill,
      insuranceProvider,
    });

    console.log(result);
    
    if (result?.success) {
      setPatientName("");
      setHospitalName("");
      setDiagnosis("");
      setProcedure("");
      setAdmissionDate("");
      setDischargeDate("");
      setTotalBill("");
      setInsuranceProvider("");

      navigate("/dashboard");
    } else {
      alert("Failed to create claim");
    }
  }

  return (
    // a form with fields for the claim
    <div className="flex-1 flex flex-col items-center justify-center gap-6 p-4">
      <h1 className="mt-8 text-2xl font-bold">Create Claim</h1>
      <form
        onSubmit={handleSubmit}
        className="mb-8 border border-gray-300 rounded-md flex flex-col gap-4  p-4 md:max-w-[600px] w-full text-sm"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="patientName">Patient Name</label>
          <input
            id="patientName"
            type="text"
            placeholder="John Doe"
            className="input w-full"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="hospitalName">Hospital Name</label>
          <input
            id="hospitalName"
            type="text"
            placeholder="Hospital Name"
            className="input w-full"
            value={hospitalName}
            onChange={(e) => setHospitalName(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="diagnosis">Diagnosis</label>
          <input
            id="diagnosis"
            type="text"
            placeholder="Diagnosis"
            className="input w-full"
            value={diagnosis}
            onChange={(e) => setDiagnosis(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="procedure">Procedure</label>
          <input
            id="procedure"
            type="text"
            placeholder="Procedure"
            className="input w-full"
            value={procedure}
            onChange={(e) => setProcedure(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="admissionDate">Admission Date</label>
          <input
            id="admissionDate"
            type="date"
            placeholder="Admission Date"
            className="input w-full"
            value={admissionDate}
            onChange={(e) => setAdmissionDate(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="dischargeDate">Discharge Date</label>
          <input
            id="dischargeDate"
            type="date"
            placeholder="Discharge Date"
            className="input w-full"
            value={dischargeDate}
            onChange={(e) => setDischargeDate(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="totalBill">Total Bill</label>
          <input
            id="totalBill"
            type="number"
            placeholder="0.00"
            className="input w-full"
            value={totalBill}
            onChange={(e) => setTotalBill(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="insuranceProvider">Insurance Provider</label>
          <input
            id="insuranceProvider"
            type="text"
            placeholder="Insurance Provider"
            className="input w-full"
            value={insuranceProvider}
            onChange={(e) => setInsuranceProvider(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success text-white">
          Create Claim
        </button>
      </form>
    </div>
  );
};

export default CreateClaim;
