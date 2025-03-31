import React from 'react';
import { useLoaderData } from "react-router-dom";

export const editJobLoader = async ({ params }) => {
  const response = await fetch(`/api/jobs/${params.id}`);
  if (!response.ok) {
    throw new Error("Failed to load job data");
  }
  return response.json();
};

const EditJob = () => {
      const job = useLoaderData();
  return (
    <div>
      { job.title }
    </div>
  )
}

export default EditJob
