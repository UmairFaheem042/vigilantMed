import { create } from "zustand";

const useReportStore = create((set, get) => ({
  reports: [],
  report: null,
  fetchReports: async () => {
    try {
      const res = await fetch("http://localhost:3000/api/reports", {
        credentials: "include",
      });
      const data = await res.json();

      set({ reports: data.data });
    } catch (error) {
      console.log(error);
    }
  },

  fetchReport: async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/reports/${id}`, {
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      set({ report: data });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useReportStore;
