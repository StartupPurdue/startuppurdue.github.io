window.onload = () => {
  const searchField = document.getElementById("search");
  const jobContainer = document.getElementById("job-container");
  let jobs = [];

  fetch('https://api.typeform.com/forms/jZzRNQ/responses', {
    method: 'GET',
    headers: { "Authorization": "Bearer 7LvnQ4CV5UjXGA62TRh9xu4GKD6RJ34cJSJm65ivRHuD" }
  })
  .then(response => response.json())
  .then((response) => {
    console.log(response)
    response.items.forEach(item => {
      const answers = item.answers;

      if(!answers) return;

      let job = {
        company: answers[0].text,
        companyDescription: answers[1].text,
        majors: answers[2].text,
        title: answers[3].text,
        stage: answers[5].choice.label,
        location: answers[7].text.split(",")[1] + ", " + answers[7].text.split(",")[2],
        skills: answers[8].text,
        link: answers[10].url,
        image: buildFile(answers[0].text),
        date: convertDate(item.submitted_at)
      }

      jobs.unshift(job);
    })

    updateJobs(jobs);
  })
  .catch(error => console.error('Error:', error));

  let jobElement = document.createElement("div");
  let jobText = `
        <a href="job-link" class="startup-card-overlay job-posting">
          <div class="services startup">
            <div class="desc">
              <h3>company-name</h3>
              <p style="font-size: 2rem"><strong>job-title</strong></p>
              <p>company-description</p>
              <p><strong>Skills:</strong> job-skills</p>
              <p><strong>Seeking:</strong> majors students</p>
              <p><strong>Posted:</strong> posting-date</p>
            </div>
          </div>
        </a>
  `

  const filterJob = (job, query) => {
    let q = query.toLowerCase();

    return job.company.toLowerCase().includes(q) || job.majors.toLowerCase().includes(q) || job.title.toLowerCase().includes(q);
  }

  const updateJobs = (jobs) => {
    if(jobs.length === 0) {
      jobContainer.innerHTML =`<h1 class="text-center white-text">No jobs found</h1>`;
      return;
    }

    jobContainer.innerHTML = "";

    jobs.forEach(job => {
      jobElement = document.createElement("div");
      jobElement.setAttribute("class", "col col-md-4 text-center startup-card job-variant");
      jobElement.style.background = `white url(${job.image})`;
      jobElement.innerHTML = jobText;

      jobElement.innerHTML = jobElement.innerHTML.replace("job-link", job.link);
      jobElement.innerHTML = jobElement.innerHTML.replace("company-image", job.image);
      jobElement.innerHTML = jobElement.innerHTML.replace("company-name", job.company);
      jobElement.innerHTML = jobElement.innerHTML.replace("company-description", job.companyDescription);
      jobElement.innerHTML = jobElement.innerHTML.replace("majors", job.majors);
      jobElement.innerHTML = jobElement.innerHTML.replace("job-title", job.title);
      jobElement.innerHTML = jobElement.innerHTML.replace("job-skills", job.skills);
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


  const buildFile = (company) => {
    let file = "images/companies/" + company + ".png"

    if(!fileExists(file)) {
      file = "images/purdue.png"
    }

    return file;
  }

  const fileExists = (url) => {
    let img = new Image();
    img.src = url;
    return img.height != 0;
  }

  const convertDate = (dateString) => {
    const date = new Date(dateString);

    console.log(date.getMonth())

    return (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear();
  }
}