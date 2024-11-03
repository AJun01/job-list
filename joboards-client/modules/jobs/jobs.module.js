// jobs.module.js
const getJobsUrl = `http://localhost:3000/job`;

const getJobs = async () => {
  try {
    const response = await axios.get(getJobsUrl);
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
  }
}

export {
  getJobs
};