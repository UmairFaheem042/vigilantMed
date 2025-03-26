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
      set({ report: data });
    } catch (error) {
      console.log(error);
    }
  },

  createReport: async (report) => {
    try {
      console.log(report);
      // const res = await fetch("http://localhost:3000/api/reports", {
      //   method: "POST",
      //   credentials: "include",
      //   body: JSON.stringify(report),
      // });
      // const data = await res.json();

      // set((state) => ({
      //   reports: [...state.reports, data],
      // }));

      return true;
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useReportStore;
