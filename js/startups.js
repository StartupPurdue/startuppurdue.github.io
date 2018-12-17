window.onload = () => {
  const searchField = document.getElementById("search");
  const startupContainer = document.getElementById("startup-container");

  let startups = [
    { 
      name: "Mimir", 
      description: "Mimir Classroom provides the tools for instructors to efficiently teach Computer Science courses of any scale without compromising quality of education for students.",
      image: "https://media.licdn.com/dms/image/C4E0BAQGP0AkapCt8qA/company-logo_400_400/0?e=1553126400&v=beta&t=YG9LSpZfHRgqZ1xfDJkzr4D3udM-sIsz67zXxtsXiJk",
      link: "https://www.mimirhq.com/",
      founders: "Prah Veluvolu ('14)"
    },
    { 
      name: "Perceive", 
      description: "We build tools to ensure that your in-store marketing strategies resonate with your target shopper.",
      image: "https://pbs.twimg.com/profile_images/720662602599129088/F20WzdeB_400x400.jpg",
      link: "https://www.perceiveinc.com",
      founders: "Kyle McNulty ('16), Everett Berry ('16)"
    },
    { 
      name: "Mimir", 
      description: "Mimir Classroom provides the tools for instructors to efficiently teach Computer Science courses of any scale without compromising quality of education for students.",
      image: "https://www.mimirhq.com/hubfs/Fall%202018%20Website/mimir-classroom-logotype-color-no-padding.svg",
      link: "",
      founders: "Prah Veluvolu ('16)"
    },

  ]

  let startupElement = document.createElement("div");
  let startupText = `
      <a href="startup-link">
        <div class="services startup">
          <span class="icon">
            <img src="startup-image" width="200px" height="200px">
          </span>
          <div class="desc">
            <h3>startup-name</h3>
            <p>startup-description</p>
            <p>startup-founders</p>
          </div>
        </div>
      </a>
  `

  const updateStartups = (startups) => {
    startupContainer.innerHTML = "";

    startups.forEach(startup => {
      startupElement = document.createElement("div");
      startupElement.setAttribute("class", "col-md-4 text-center startup-card");
      startupElement.innerHTML = startupText;

      startupElement.innerHTML = startupElement.innerHTML.replace("startup-link", startup.link);
      startupElement.innerHTML = startupElement.innerHTML.replace("startup-image", startup.image);
      startupElement.innerHTML = startupElement.innerHTML.replace("startup-name", startup.name);
      startupElement.innerHTML = startupElement.innerHTML.replace("startup-description", startup.description);
      startupElement.innerHTML = startupElement.innerHTML.replace("startup-founders", startup.founders);

      startupContainer.appendChild(startupElement);
    })
  }

  searchField.addEventListener("keyup", (e) => {
    startupContainer.innerHTML = "";

    if(searchField.value != "") {
      updateStartups(startups.filter(startup => startup.name.includes(searchField.value)));
    } else {
      updateStartups(startups);
    }
  })

  updateStartups(startups);
}