// job.model.js

export default class Job {
    constructor(data) {
      this.jobId = data.job_id;
      this.postingDate = this.formatDate(data.posting_date);
      this.expiresDate = this.formatDate(data.expires_date);
      const company = data.company;
      this.companyName = company.name;
      const position = company.position;
      this.title = position.title;
      this.description = position.description;
      this.skills = position.skills;
      this.department = position.department;
      this.yearsExperience = position.years_experience;
      this.employmentType = position.employment_type;
      this.contractual = position.contractual;
      this.languages = position.languages;
      const address = company.address;
      this.location = `${address.city}, ${address.state}`;
    }
  
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const dateObj = new Date(dateString);
      return dateObj.toLocaleDateString(undefined, options);
    }
  
    // Additional helper methods can be added here
  }