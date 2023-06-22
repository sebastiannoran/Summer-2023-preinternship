import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import JobCard from './jobCard'
import jobs from './jobs'

function App() {

  const jobCards = jobs.map((job, i) => {
    return <JobCard job={job} key={i} />
  })

  return (
    <div className="container">
      <h1>Job Application Tracker</h1>
      {/* {JobCard(jobs[0])} */}
      {/* <JobCard job={jobs[0]} /> */}
      {jobCards}
    </div>
  );
}

export default App
