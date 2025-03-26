import React, { useEffect } from "react";
import useClaimStore from "../store/claimStore";
import { useNavigate, useParams } from "react-router-dom";
import Details from "../components/details";
import Loading from "../components/Loading";
import { useState } from "react";
import { Link } from "react-router-dom";


const Claim = () => {
  const { id } = useParams();
  const { getClaim, claim, isLoading } = useClaimStore();
  const navigate = useNavigate();

  const [report, setReport] = useState(false);

  // let report = !true;

  function handleGenerateReport() {
    setReport(true);
  }

  useEffect(() => {
    getClaim(id);
  }, [id]);

  const handleCheckClaimStatus = () => {
    console.log("Checking Claim Status");
    // createReport upon successfull generation, redirect to report page

    // reportId is the id of the report that is created
    navigate(`/reports/${claim?._id}`);
  };

  if (isLoading) return <Loading />;

  return (
    <div className="flex-1 p-4 flex flex-col gap-4 items-center justify-center ">
      <h1 className="text-2xl font-bold">Claim Details</h1>
      {claim && <Details claim={claim} />}

      {!report && (
        // <button onClick={handleCheckClaimStatus} className="btn btn-warning ">
        //   Generate Report
        // </button>
        <button onClick={handleGenerateReport} className="btn btn-warning ">
          Check Claim Status
        </button>
      )}

      {report && (
        <>
          {" "}
          <h1 className="text-success font-bold uppercase">Approved</h1>
          <button className="btn btn-neutral text-white font-semibold">
            <Link to={`/create-report/${claim?._id}`}>Generate Report</Link>
          </button>
        </>
      )}
    </div>
  );
};

export default Claim;
