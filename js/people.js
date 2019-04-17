window.onload = () => {
  const searchField = document.getElementById("search");
  const peopleContainer = document.getElementById("people-container");
  let people = [
    { name: "Mamoon Hamid", title: "General Partner", company: "KPCB", bio: "Mamoon Hamid is a Pakistani-American venture capitalist currently serving as a Managing Member and General Partner at the venture capital firm Kleiner Perkins.", grad: "2000", major: "Electrical Engineering", linkedin: "https://www.linkedin.com/in/mamoonha/", image: "https://dwhs7eit3h8mr.cloudfront.net/assets/images/partners/show/mamoon-hamid-2.jpg", industry: "Venture Capital", location: "SF Bay Area"  },
    
  ];

  let results = [];


  let personElement = document.createElement("div");
  let peopleText = `
      <a href="person-linkedin" class="people-card-overlay">
        <div class="services people">
          <div class="desc">
            <div class="person-header">
              <img src="person-image" class="person-img">
            </div>
            <h3 class="name">person-name</h3>
            <p class="title"><strong>person-title</strong></p>
            <p class="industry">person-industry | person-location</p>
            <p>person-bio</p>
            <p class="remove-p-margin">person-major person-grad</p>
            <a class="btn btn-primary intro-btn" href="mailto:contact@anvilstartups.com?subject=Intro Request to: person-name">Request an intro</a>
          </div>
        </div>
      </a>
  `

  const filterPeople = (person, query) => {
    const q = query.toLowerCase();

    return person.name.toLowerCase().includes(q) || person.major.toLowerCase().includes(q) || person.company.toLowerCase().includes(q) || person.title.toLowerCase().includes(q)  || person.grad.toLowerCase().includes(q) || person.industry.toLowerCase().includes(q) || person.location.toLowerCase().includes(q);
  }

  const getCompanies = (people) => {
    return people.map(person => person.company)
  }

  const getIndustries = (people) => {
    return people.map(person => person.industry)
  }

  const getLocations = (people) => {
    return people.map(person => person.location)
  }

  const dedupe = (arrArg) => {
    return arrArg.filter(function(elem, pos,arr) {
      return arr.indexOf(elem) == pos;
    });
  };

  const updateDropdowns = () => {
    const companies = dedupe(getCompanies(results));
    const industries = dedupe(getIndustries(results));
    const locations = dedupe(getLocations(results));

    const companySelect = document.getElementById("company-select");
    const industrySelect = document.getElementById("industry-select");
    const locationSelect = document.getElementById("location-select");

    companies.forEach(company => {
      const element = document.createElement("OPTION");
      element.value = company;
      element.innerHTML = company;

      companySelect.appendChild(element);
    })

    industries.forEach(industry => {
      const element = document.createElement("OPTION");
      element.value = industry;
      element.innerHTML = industry;

      industrySelect.appendChild(element);
    })

    locations.forEach(location => {
      const element = document.createElement("OPTION");
      element.value = location;
      element.innerHTML = location;

      locationSelect.appendChild(element);
    })
  }

  const updatePeople = () => {
    if(results.length === 0) {
      peopleContainer.innerHTML =`<h1 class="text-center white-text">No people found</h1>`;
      return;
    }

    peopleContainer.innerHTML = "";

    results.forEach(person => {
      personElement = document.createElement("div");
      personElement.setAttribute("class", "col-md-4 text-center people-card");
      // personElement.style.background = `white url(${person.image})`;
      personElement.innerHTML = peopleText;

      personElement.innerHTML = personElement.innerHTML.replace("person-linkedin", person.linkedin);
      personElement.innerHTML = personElement.innerHTML.replace("person-image", person.image);
      personElement.innerHTML = personElement.innerHTML.replace("person-name", person.name);
      personElement.innerHTML = personElement.innerHTML.replace("person-name", person.name);
      personElement.innerHTML = personElement.innerHTML.replace("person-title", person.title + " - " + person.company);
      personElement.innerHTML = personElement.innerHTML.replace("person-industry", person.industry); 
      personElement.innerHTML = personElement.innerHTML.replace("person-location", person.location); 
      personElement.innerHTML = personElement.innerHTML.replace("person-bio", person.bio); 
      personElement.innerHTML = personElement.innerHTML.replace("person-grad", ` (Class of ${person.grad})`);
      personElement.innerHTML = personElement.innerHTML.replace("person-major", person.major);
     
      peopleContainer.appendChild(personElement);
    })
  }

  const filter = () => {
    results = people;

    console.log(results);

    const query = document.getElementById("search").value;
    const selectedCompany = document.getElementById("company-select").value;
    const selectedIndustry = document.getElementById("industry-select").value;
    const selectedLocation = document.getElementById("location-select").value;

    console.log(query, selectedCompany, selectedIndustry, selectedLocation);

    if(query) results = results.filter(person => filterPeople(person, query));

    if(selectedCompany !== "All companies") results = results.filter(person => (person.company === selectedCompany));
    if(selectedIndustry !== "All industries") results = results.filter(person => (person.industry === selectedIndustry));
    if(selectedLocation !== "All locations") results = results.filter(person => (person.location === selectedLocation));

    console.log(results);

    updatePeople();
  }

  const companySelect = document.getElementById("company-select");
  const industrySelect = document.getElementById("industry-select");
  const locationSelect = document.getElementById("location-select");


  searchField.addEventListener("keyup", (e) => {
    filter();
  })

  companySelect.addEventListener("change", (e) => {
    filter();
  })

  industrySelect.addEventListener("change", (e) => {
    filter();
  })

  locationSelect.addEventListener("change", (e) => {
    filter();
  })

  results = people;
  updatePeople();
  updateDropdowns();
}