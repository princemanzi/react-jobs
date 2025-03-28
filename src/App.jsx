import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJob from "./pages/AddJob";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<MainLayout />}>
    <Route index element={<HomePage />} />
    <Route path="/jobs" element= {<JobsPage />} />
    <Route path="/jobs/:id" element= {<JobPage />} loader = {jobLoader} />  
    <Route path="/add-job" element={<AddJob />} />
    <Route path="*" element={<div>404 Not Found</div>} />
    {/* <Route path="/jobs/:id" element={<JobDetails />} /> */} 
  </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
