import React, { useEffect } from "react";
import useClaimStore from "../store/claimStore";
import { useNavigate, useParams } from "react-router-dom";
import Details from "../components/details";
import Loading from "../components/Loading";

const Claim = () => {
  const { id } = useParams();
  const { getClaim, claim, isLoading } = useClaimStore();
  const navigate = useNavigate();

  console.log(claim);
  

  let report = true;

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

      {report && (
        <button onClick={handleCheckClaimStatus} className="btn btn-warning ">
          View Report
        </button>
      )}
    </div>
  );
};

export default Claim;
