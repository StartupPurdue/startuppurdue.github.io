window.onload = () => {
  const searchField = document.getElementById("search");
  const peopleContainer = document.getElementById("people-container");
  let people = [
    { name: "Mamoon Hamid", title: "General Partner", company: "KPCB", bio: "Mamoon Hamid is a Pakistani-American venture capitalist currently serving as a Managing Member and General Partner at the venture capital firm Kleiner Perkins.", grad: "2000", major: "Electrical Engineering", linkedin: "https://www.linkedin.com/in/mamoonha/", image: "https://dwhs7eit3h8mr.cloudfront.net/assets/images/partners/show/mamoon-hamid-2.jpg"  },
    { name: "Mamoon Hamid", title: "General Partner", company: "DC", bio: "Mamoon Hamid is a Pakistani-American venture capitalist currently serving as a Managing Member and General Partner at the venture capital firm Kleiner Perkins.", grad: "2000", major: "Electrical Engineering", linkedin: "https://www.linkedin.com/in/mamoonha/", image: "https://dwhs7eit3h8mr.cloudfront.net/assets/images/partners/show/mamoon-hamid-2.jpg"  },
    { name: "Mamoon Hamid", title: "General Partner", company: "KPCB", bio: "Mamoon Hamid is a Pakistani-American venture capitalist currently serving as a Managing Member and General Partner at the venture capital firm Kleiner Perkins.", grad: "2000", major: "Electrical Engineering", linkedin: "https://www.linkedin.com/in/mamoonha/", image: "https://dwhs7eit3h8mr.cloudfront.net/assets/images/partners/show/mamoon-hamid-2.jpg"  },
  ];

  let results = [];


  let personElement = document.createElement("div");
  let peopleText = `
      <a href="person-linkedin" class="people-card-overlay">
        <div class="services people">
          <div class="desc">
            <img src="person-image" class="person-img">
            <h3 class="name">person-name</h3>
            <p class="title"><strong>person-title</strong></p>
            <p>person-bio</p>
            <p class="remove-p-margin">person-major</p>
            <p class="remove-p-margin">person-grad</p>
          </div>
        </div>
      </a>
  `

  const filterPeople = (person, query) => {
    const q = query.toLowerCase();

    return person.name.toLowerCase().includes(q) || person.major.toLowerCase().includes(q) || person.company.toLowerCase().includes(q) || person.title.toLowerCase().includes(q)  || person.grad.toLowerCase().includes(q);
  }

  const getCompanies = (people) => {
    return people.map(person => person.company)
  }

  const getMajors = (people) => {
    return people.map(person => person.major)
  }

  const getGradYears = (people) => {
    return people.map(person => person.grad)
  }

  const dedupe = (arrArg) => {
    return arrArg.filter(function(elem, pos,arr) {
      return arr.indexOf(elem) == pos;
    });
  };

  const updateDropdowns = () => {
    const companies = dedupe(getCompanies(results));
    const majors = dedupe(getMajors(results));
    const gradYears = dedupe(getGradYears(results));

    const companySelect = document.getElementById("company-select");
    const majorSelect = document.getElementById("major-select");
    const gradYearSelect = document.getElementById("grad-year-select");

    companies.forEach(company => {
      const element = document.createElement("OPTION");
      element.value = company;
      element.innerHTML = company;

      companySelect.appendChild(element);
    })

    majors.forEach(major => {
      const element = document.createElement("OPTION");
      element.value = major;
      element.innerHTML = major;

      majorSelect.appendChild(element);
    })

    gradYears.forEach(gradYear => {
      const element = document.createElement("OPTION");
      element.value = gradYear;
      element.innerHTML = gradYear;

      gradYearSelect.appendChild(element);
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
      personElement.innerHTML = personElement.innerHTML.replace("person-title", person.title + " - " + person.company);
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
    const selectedMajor = document.getElementById("major-select").value;
    const selectedGradYear = document.getElementById("grad-year-select").value;

    console.log(query, selectedCompany, selectedMajor, selectedGradYear);

    if(query) results = results.filter(person => filterPeople(person, query));

    if(selectedCompany !== "All companies") results = results.filter(person => (person.company === selectedCompany));
    if(selectedMajor !== "All majors") results = results.filter(person => (person.major === selectedMajor));
    if(selectedGradYear !== "All years") results = results.filter(person => (person.grad === selectedGradYear));

    console.log(results);

    updatePeople();
  }

  const companySelect = document.getElementById("company-select");
  const majorSelect = document.getElementById("major-select");
  const gradYearSelect = document.getElementById("grad-year-select");


  searchField.addEventListener("keyup", (e) => {
    filter();
  })

  companySelect.addEventListener("change", (e) => {
    filter();
  })

  majorSelect.addEventListener("change", (e) => {
    filter();
  })

  gradYearSelect.addEventListener("change", (e) => {
    filter();
  })

  results = people;
  updatePeople();
  updateDropdowns();
}