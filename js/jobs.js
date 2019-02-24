window.onload = () => {
  const searchField = document.getElementById("search");
  const jobContainer = document.getElementById("job-container");

  let jobs = [
    { 
      company: "Mimir", 
      company_description: "Mimir Classroom provides the tools for instructors to efficiently teach Computer Science courses of any scale without compromising quality of education for students.",
      image: "https://pbs.twimg.com/profile_images/720662602599129088/F20WzdeB_400x400.jpg",
      job_title: "Software Engineer Intern - W '19",
      majors: "Computer Science, Computer Engineering, Electrical Engineering",
      application_link: "http://google.com",
      date: "December 2nd, 2019",
      link: "mimir-job-posting"
    },
    { 
      company: "Mimir", 
      company_description: "Mimir Classroom provides the tools for instructors to efficiently teach Computer Science courses of any scale without compromising quality of education for students.",
      image: "https://pbs.twimg.com/profile_images/720662602599129088/F20WzdeB_400x400.jpg",
      job_title: "Software Engineer Intern - W '19",
      majors: "Computer Science, Computer Engineering, Electrical Engineering",
      application_link: "http://google.com",
      date: "December 2nd, 2019",
      link: "mimir-job-posting"
    },
    { 
      company: "Mimir", 
      company_description: "Mimir Classroom provides the tools for instructors to efficiently teach Computer Science courses of any scale without compromising quality of education for students.",
      image: "https://pbs.twimg.com/profile_images/720662602599129088/F20WzdeB_400x400.jpg",
      job_title: "Software Engineer Intern - W '19",
      majors: "Computer Science, Computer Engineering, Electrical Engineering",
      application_link: "http://google.com",
      date: "December 2nd, 2019",
      link: "mimir-job-posting"
    },
  ]

  let jobElement = document.createElement("div");
  let jobText = `
        <div class="services job">
          <span class="icon">
            <img src="company-image" width="150px" height="150px">
          </span>
          <div class="desc">
            <h3>company-name</h3>
            <h4><strong>job-title</strong></h4>
            <p class="job-descrip">majors</p>
            <a class="more-info" href="jobs/job-link">Apply Now</a>
            <p>posting-date</p>
          </div>
        </div>
  `

  const filterJob = (job, query) => {
    let q = query.toLowerCase();
    return job.company.toLowerCase().includes(q) || job.majors.toLowerCase().includes(q) || job.job_title.toLowerCase().includes(q);
  }

  const updateJobs = (jobs) => {
    if(jobs.length === 0) {
      jobContainer.innerHTML =`<h1 class="text-center white-text">No jobs found</h1>`;
      return;
    }

    jobContainer.innerHTML = "";

    jobs.forEach(job => {
      jobElement = document.createElement("div");
      jobElement.setAttribute("class", "col col-md-4 text-center job-card");
      jobElement.innerHTML = jobText;

      jobElement.innerHTML = jobElement.innerHTML.replace("job-link", job.link);
      jobElement.innerHTML = jobElement.innerHTML.replace("company-image", job.image);
      jobElement.innerHTML = jobElement.innerHTML.replace("company-name", job.company);
      jobElement.innerHTML = jobElement.innerHTML.replace("majors", job.majors);
      jobElement.innerHTML = jobElement.innerHTML.replace("job-title", job.job_title);
      jobElement.innerHTML = jobElement.innerHTML.replace("posting-date", job.date);

      jobContainer.appendChild(jobElement);
    })
  }

  searchField.addEventListener("keyup", (e) => {
    jobContainer.innerHTML = "";

    if(searchField.value != "") {
      updateJobs(jobs.filter(job => filterJob(job, searchField.value)));
    } else {
      updateJobs(jobs);
    }
  })

  updateJobs(jobs);
}