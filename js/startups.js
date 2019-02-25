window.onload = () => {
  const searchField = document.getElementById("search");
  const startupContainer = document.getElementById("startup-container");
  let startups = [];

  fetch('https://api.typeform.com/forms/AKnZpn/responses', {
    method: 'GET',
    headers: { "Authorization": "Bearer 7LvnQ4CV5UjXGA62TRh9xu4GKD6RJ34cJSJm65ivRHuD" }
  })
  .then(response => response.json())
  .then((response) => {
    response.items.forEach(item => {
      const answers = item.answers;

      if(!answers) return;

      let startup = {
        founders: answers[0].text,
        name: answers[1].text,
        industry: answers[2].text,
        description: answers[4].text,
        link: answers[5].url,
        image: answers[6].file_url
      }

      startups.push(startup);
    })

    updateStartups(startups);
  })
  .catch(error => console.error('Error:', error));


  let startupElement = document.createElement("div");
  let startupText = `
      <a href="startup-link" class="startup-card-overlay">
        <div class="services startup">
          <div class="desc">
            <h3>startup-name</h3>
            <p><strong>startup-industry</strong></p>
            <p>startup-description</p>
            <p>startup-founders</p>
          </div>
        </div>
      </a>
  `

  const updateStartups = (startups) => {
    if(startups.length === 0) {
      startupContainer.innerHTML =`<h1 class="text-center white-text">No startups found</h1>`;
      return;
    }

    startupContainer.innerHTML = "";

    startups.forEach(startup => {
      startupElement = document.createElement("div");
      startupElement.setAttribute("class", "col-md-4 text-center startup-card");
      startupElement.style.background = `white url(${startup.image})`;
      startupElement.innerHTML = startupText;

      startupElement.innerHTML = startupElement.innerHTML.replace("startup-link", startup.link);
      startupElement.innerHTML = startupElement.innerHTML.replace("startup-image", startup.image);
      startupElement.innerHTML = startupElement.innerHTML.replace("startup-name", startup.name);
      startupElement.innerHTML = startupElement.innerHTML.replace("startup-industry", startup.industry);
      startupElement.innerHTML = startupElement.innerHTML.replace("startup-description", startup.description);
      startupElement.innerHTML = startupElement.innerHTML.replace("startup-founders", startup.founders);

      startupContainer.appendChild(startupElement);
    })
  }

  searchField.addEventListener("keyup", (e) => {
    startupContainer.innerHTML = "";

    if(searchField.value != "") {
      updateStartups(startups.filter(startup => startup.name.toLowerCase().includes(searchField.value.toLowerCase())));
    } else {
      updateStartups(startups);
    }
  })

  updateStartups(startups);
}