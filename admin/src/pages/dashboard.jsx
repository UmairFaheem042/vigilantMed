import React, { useEffect } from "react";
// import useAuthStore from "../store/authStore";
import { Link } from "react-router-dom";
// import useClaimStore from "../store/claimStore";
// import useReportStore from "../store/reportStore";
// import Loading from "../components/Loading";

const Dashboard = () => {
  //   const { user, checkAuth, isLoading } = useAuthStore();
  //   const { claims, fetchClaims } = useClaimStore();
  //   const { reports, fetchReports } = useReportStore();

  //   useEffect(() => {
  //     checkAuth();
  //     fetchClaims();
  //     fetchReports();
  //   }, []);

  //   const claimsToShow = claims?.data?.slice(0, 3);
  //   const reportsToShow = reports?.slice(0, 3);

  //   if (isLoading) return <Loading />;

  return (
    <div className="max-w-[1600px] mx-auto w-full flex-1 p-4 flex flex-col gap-6">
      <div className="flex justify-between items-center gap-2 mt-6">
        <h1 className="text-2xl font-bold">Welcome Admin</h1>
        {/* <button className="btn btn-neutral">
          <Link to="/create-claim">Create Claim</Link>
        </button> */}
      </div>

      {/* stats */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        <div className="border border-gray-300 rounded-md p-4">
          <h1 className="text-2xl font-bold">Total Claims</h1>
          <p className="text-sm text-gray-500">1</p>
        </div>
        <div className="border border-gray-300 rounded-md p-4">
          <h1 className="text-2xl font-bold">Approved Claims</h1>
          <p className="text-sm text-gray-500">1</p>
        </div>
        <div className="border border-gray-300 rounded-md p-4">
          <h1 className="text-2xl font-bold">Rejected Reports</h1>
          <p className="text-sm text-gray-500">1</p>
        </div>
      </div>
      {/* <Stats /> */}

      <div className="flex flex-col gap-2 border border-gray-300 rounded-md p-4">
        <h3 className="text-2xl font-bold">Recent Claims</h3>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h1>John Doe</h1>
            <p className="text-sm text-gray-500">
              @Hospital Name
            </p>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-success text-white">
              <Link
                to={`/claims/123`}
                className="flex items-center gap-2"
              >
                <span className="hidden sm:flex">View</span> Claim
              </Link>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 border border-gray-300 rounded-md p-4">
        <h3 className="text-2xl font-bold">Recent Reports</h3>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h1>John Doe</h1>
            <p className="text-sm text-gray-500">
              @Hospital Name
            </p>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-success text-white">
              {/* ! this is routing taking report Id but we can try with claimId also later on */}
              <Link to={`/reports/123`} className="flex items-center gap-2">
                <span className="hidden sm:flex">View</span> Report
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
