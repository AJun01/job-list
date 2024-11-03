import { getJobs } from "./modules/jobs/jobs.module.js";
import Job from "./modules/jobs/job.model.js";

window.addEventListener("DOMContentLoaded", async () => {
  const jobsData = await getJobs();
  const jobs = jobsData.map(jobData => new Job(jobData));
  displayJobs(jobs);
});

function displayJobs(jobs) {
  const root = document.getElementById('root');
  root.innerHTML = ''; 

  jobs.forEach((job, index) => {
    const jobCard = document.createElement('div');
    jobCard.classList.add('job-card', 'card', 'mb-4');
    
    jobCard.innerHTML = `
      <div class="card-header">
        <h2 class="job-title mb-0">
          <button class="btn btn-link text-left" data-toggle="collapse" data-target="#collapse${index}">
            ${job.title}
          </button>
        </h2>
        <h3 class="company-name mb-0">${job.companyName}</h3>
      </div>
      <div id="collapse${index}" class="collapse" data-parent="#root">
        <div class="card-body">
          <p>${job.description}</p>
          <ul class="job-details list-unstyled">
            <li><strong>Location:</strong> ${job.location}</li>
            <li><strong>Experience:</strong> ${job.yearsExperience}</li>
            <li><strong>Employment Type:</strong> ${job.employmentType}</li>
            <li><strong>Languages:</strong> ${job.languages.join(', ')}</li>
            <li><strong>Skills:</strong> ${job.skills.join(', ')}</li>
            <li><strong>Posted on:</strong> ${job.postingDate}</li>
            <li><strong>Expires on:</strong> ${job.expiresDate}</li>
          </ul>
        </div>
      </div>
    `;

    root.appendChild(jobCard);
  });
}