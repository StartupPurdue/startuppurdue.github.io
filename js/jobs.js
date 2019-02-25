window.onload = () => {
  const searchField = document.getElementById("search");
  const jobContainer = document.getElementById("job-container");
  let jobs = [];

  // fetch('https://api.typeform.com/forms/AKnZpn/responses', {
  //   method: 'GET',
  //   headers: { "Authorization": "Bearer 7LvnQ4CV5UjXGA62TRh9xu4GKD6RJ34cJSJm65ivRHuD" }
  // })
  // .then(response => response.json())
  // .then((response) => {
  //   response.items.forEach(item => {
  //     const answers = item.answers;

  //     if(!answers) return;

  //     let job = {
  //       title: answers[0].text,
  //       description: answers[1].text,
  //       company: answers[2].text,
  //       majors: answers[3].date.split("-")[0],
  //       description: answers[4].text,
  //       link: answers[5].url,
  //       image: "images/companies/" + answers[1].text + ".png"
  //     }

  //     startups.push(startup);
  //     console.log(startup)
  //     console.log(answers)
  //   })

  //   updateStartups(startups);
  // })
  // .catch(error => console.error('Error:', error));

  // let jobs = [
  //   { 
  //     company: "Mimir", 
  //     company_description: "Mimir Classroom provides the tools for instructors to efficiently teach Computer Science courses of any scale without compromising quality of education for students.",
  //     image: "https://media.licdn.com/dms/image/C4E0BAQGP0AkapCt8qA/company-logo_400_400/0?e=1553126400&v=beta&t=YG9LSpZfHRgqZ1xfDJkzr4D3udM-sIsz67zXxtsXiJk",
  //     job_title: "Software Engineer Intern - W '19",
  //     majors: "Computer Science, Computer Engineering, Electrical Engineering",
  //     application_link: "http://google.com",
  //     date: "December 2nd, 2019",
  //     link: "mimir-job-posting"
  //   }
  // ]

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