import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJob from "./pages/AddJob";
import NotFoundPage from "./pages/NotFoundPage";


const App = () => {
  // This function will be used to add a new job
  // It will be passed as a prop to the AddJob component
  // and will be called when the form is submitted
  // It will send a POST request to the server with the new job data
  // and will return the response from the server
  // The new job data will be passed as an argument to this function
  // The new job data will be in the form of an object
  const addJob = async( newJob ) => {
    const response = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    if (!response.ok) {
      throw new Error('Failed to add job');
    }
    return response.json();
    
  }

  //function to delete a job
  const deleteJob = async (id) => {
    const response = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete job');
    }
    return response.json();
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/jobs" element= {<JobsPage />} />
      <Route path="/jobs/:id" element= {<JobPage deleteJob= {deleteJob} />} loader = {jobLoader} />  
      <Route path="/add-job" element={<AddJob addJobSubmit={addJob} />} />
      <Route path="*" element={ <NotFoundPage/> } />
      {/* <Route path="/jobs/:id" element={<JobDetails />} /> */} 
    </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
