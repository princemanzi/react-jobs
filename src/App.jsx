import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJob from "./pages/AddJob";


const App = () => {
  const addJob = ( newJob ) => {
    const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
    jobs.push(newJob);
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element= {<JobsPage />} />
      <Route path="/jobs/:id" element= {<JobPage />} loader = {jobLoader} />  
      <Route path="/add-job" element={<AddJob addJobSubmit={addJob} />} />
      <Route path="*" element={<div>404 Not Found</div>} />
      {/* <Route path="/jobs/:id" element={<JobDetails />} /> */} 
    </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
