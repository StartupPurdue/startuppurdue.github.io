window.onload = () => {
  const searchField = document.getElementById("search");
  const peopleContainer = document.getElementById("people-container");
  // let people = [
  //   { name: "Mamoon Hamid", title: "General Partner", company: "KPCB", bio: "Mamoon Hamid is a Pakistani-American venture capitalist currently serving as a Managing Member and General Partner at the venture capital firm Kleiner Perkins.", grad: "2000", major: "Electrical Engineering", linkedin: "https://www.linkedin.com/in/mamoonha/", image: "https://dwhs7eit3h8mr.cloudfront.net/assets/images/partners/show/mamoon-hamid-2.jpg", industry: "Venture Capital", location: "SF Bay Area"  },
    
  // ];

  let people = [
      {
       "name": "Lila Ibrahim",
       "title": "Chief Operating Officer at DeepMind",
       "company": "DeepMind",
       "industry": "AI",
       "location": "UK",
       "bio": "Throughout my 20+ years as a leader, builder, and operator in the global technology space, I’ve been driven first and foremost by organizational mission and impact. I am deeply committed to servant leadership and authenticity, and believe my role as a leader is to help everyone in the organization develop their unique talents and realize their full potential to contribute.",
       "linkedin": "http://www.linkedin.com/in/librahim",
       "major": "BSEE",
       "grad": 1993
     },
     {
       "name": "Sven Strohband",
       "title": "CTO Khosla Ventures",
       "company": "Khosla Ventures",
       "industry": "VC",
       "location": "Bay Area",
       "bio": "Partner at Khosla Ventures",
       "linkedin": "https://www.linkedin.com/in/sven-strohband-348b841/",
       "major": "n/a",
       "grad": "-"
     },
     {
       "name": "Mary Jane Elmore",
       "title": "Angel Investor at Broadway Angels",
       "company": "Broadway Angels",
       "industry": "VC",
       "location": "Bay Area",
       "bio": "Investor at Broadway Angels",
       "linkedin": "https://www.linkedin.com/in/mary-jane-elmore-a7525817/",
       "major": "Math",
       "grad": "-"
     },
     {
       "name": "Nabeel Hyatt",
       "title": "Investor at Spark Capital",
       "company": "Spark Capital",
       "industry": "VC",
       "location": "Bay Area",
       "bio": "I've worked at scrappy small scale, in hyper-growth mode, and at large public company scale several times over the last couple decades as a CEO, COO, and head of product. I now spend time with my fine friends here at Spark Capital partnering with ambitious founders out to build amazing things.",
       "linkedin": "https://www.linkedin.com/in/nabeelhyatt",
       "major": "-",
       "grad": "-"
     },
     {
       "name": "Mamoon Hamid",
       "title": "Partner at Kleiner Perkins",
       "company": "Kleiner Perkins",
       "industry": "VC",
       "location": "Bay Area",
       "bio": "Mamoon is a Partner at Kleiner Perkins. Prior to joining Kleiner Perkins, Mamoon was a Co-Founder and General Partner at Social Capital. Social Capital is an early stage Venture Capital firm that funds breakthrough healthcare, education, financial services, mobile, and enterprise software companies.",
       "linkedin": "https://www.linkedin.com/in/mamoonha/",
       "major": "ECE",
       "grad": 1997
     },
     {
       "name": "Edith Yeung",
       "title": "Partner at Proof of Capital + 500 Startups",
       "company": "Proof of Capital + 500 Startups",
       "industry": "VC",
       "location": "Bay Area",
       "bio": "Edith is a venture capitalist, technology executive, and a China Internet expert",
       "linkedin": "https://www.linkedin.com/in/edithyeung/",
       "major": "IM",
       "grad": ""
     },
     {
       "name": "Arnold Chen",
       "title": "Managing Director at Burton D. Morgan Center for Entrepreneurship",
       "company": "Purdue University",
       "industry": "Academic",
       "location": "West Lafayette, IN",
       "bio": "Director of Burton D. Morgan: Purdue's faculty entrepreneurship program",
       "linkedin": "https://www.linkedin.com/in/arnold-chen-029268/",
       "major": "EE",
       "grad": 1991
     },
     {
       "name": "Adam Weinstein",
       "title": "Senior Director at DataRobot",
       "company": "DataRobot",
       "industry": "Entrepreneur",
       "location": "Bay Area",
       "bio": "Prior to Bright/LinkedIn, I was the founder of enGreet, a print-on-demand greeting card company that merged crowd-sourcing with social expressions. Earlier, I worked at ExactTarget and Deloitte Consulting, where I helped high-tech and financial services clients optimize business and technology processes.",
       "linkedin": "https://www.linkedin.com/in/ajweinstein/",
       "major": "BS, IE, CS",
       "grad": 2005
     },
     {
       "name": "Michael Stoppelman",
       "title": "Angel Investor",
       "company": "Self employed",
       "industry": "VC",
       "location": "LA",
       "bio": "I invest in talented early stage entrepreneurs that are trying to change the world for the better. I’mfocused on digital health, infrastructure, and security.",
       "linkedin": "https://www.linkedin.com/in/michaelstoppelman/",
       "major": "CS",
       "grad": 2003
     },
     {
       "name": "Rouz Jazayeri",
       "title": "Director at Catapult Ventures",
       "company": "Catapult Ventures",
       "industry": "VC",
       "location": "Bay Area",
       "bio": "Experienced business and technical executive with a strong background of venture capital investing, building new businesses, creating winning products, and establishing influential strategic partnerships.",
       "linkedin": "https://www.linkedin.com/in/rouz-jazayeri-01485346/",
       "major": "BSEE, MSEE",
       "grad": 2004
     },
     {
       "name": "Darwin Ling",
       "title": "Partner at Good AI Capital",
       "company": "Good AI Capital",
       "industry": "VC",
       "location": "Bay Area",
       "bio": "Darwin Ling is the founding general partner of Good AI Capital, a venture fund focusing on early-stage AI companies in fintech, healthcare, and enterprise SaaS",
       "linkedin": "https://www.linkedin.com/in/darwinling/",
       "major": "BS, MS",
       "grad": 1990
     },
     {
       "name": "Blake Matheny",
       "title": "Engineering Director at Facebook",
       "company": "Facebook",
       "industry": "Tech",
       "location": "Bay Area",
       "bio": "I have typically been responsible for building scalable, secure and highly available distributed systems for large and small companies including high traffic web sites and wireless carriers.",
       "linkedin": "https://www.linkedin.com/in/bmatheny/",
       "major": "Math",
       "grad": 2003
     },
     {
       "name": "Guru Chahal",
       "title": "Partner at Lightspeed Venture Partners",
       "company": "Lightspeed Ventures",
       "industry": "VC",
       "location": "Bay Area",
       "bio": "Early Stage Investor at Lightspeed Venture Partners, Product Management and Marketing Executive, Entrepreneur",
       "linkedin": "https://www.linkedin.com/in/guruchahal/",
       "major": "MS, EE",
       "grad": "-"
     },
     {
       "name": "Matt Shobe",
       "title": "Faculty",
       "company": "UW",
       "industry": "Entrepreneur",
       "location": "Seattle",
       "bio": "I've spent the balance of my professional life in the entrepreneurial, small company trenches, but stints in large company environments have helped frame and broaden my experience and problem-tackling approach",
       "linkedin": "http://www.linkedin.com/in/mshobe",
       "major": "English/Econ",
       "grad": 1993
     },
     {
       "name": "Jeremy Wacksman",
       "title": "President, Zillow at Zillow Group",
       "company": "Zillow",
       "industry": "Entrepreneur",
       "location": "Seattle",
       "bio": "Founder of Zillow",
       "linkedin": "https://www.linkedin.com/in/jeremywacksman/",
       "major": "BS, CompE",
       "grad": 1999
     },
     {
       "name": "Kenny Stone",
       "title": "Making Stuff",
       "company": "-",
       "industry": "Entrepreneur",
       "location": "Bay Area",
       "bio": "Making Stuff",
       "linkedin": "https://www.linkedin.com/in/kenny-stone-a239a4a/",
       "major": "CompE",
       "grad": 2004
     },
     {
       "name": "Akshay Kothari",
       "title": "COO",
       "company": "Notion",
       "industry": "Tech",
       "location": "Bay Area",
       "bio": "-",
       "linkedin": "https://www.linkedin.com/in/akothari/",
       "major": "EE",
       "grad": 2007
     },
     {
       "name": "T.A. McCann",
       "title": "MD@PSL",
       "company": "Pioneer Square Labs",
       "industry": "Entrepreneur",
       "location": "Seattle",
       "bio": "I am a co-founder of Rival IQ – marketing analytics with a competitive edge. I was previously VP of Product Strategy at Blackberry, focused on BBM (Blackberry Messenger), social applications (Facebook, LinkedIn, Twitter…) as well as the native Contacts apps.",
       "linkedin": "https://www.linkedin.com/in/tamccann/",
       "major": "ME",
       "grad": 1989
     },
     {
       "name": "Matt Garratt",
       "title": "Managing Partner, Salesforce Ventures",
       "company": "Salesforce",
       "industry": "VC",
       "location": "Bay Area",
       "bio": "Managing Partner at Salesforce Ventures and led investments in leading software companies including, Mulesoft, Twilio, Docusign, Anaplan, nCino and Gainsight.",
       "linkedin": "https://www.linkedin.com/in/matthewgarratt/",
       "major": "Materials Science",
       "grad": "-"
     },
     {
       "name": "Curtis McKee",
       "title": "Venture Investor @ Intel Capital",
       "company": "Intel",
       "industry": "VC",
       "location": "Bay Area",
       "bio": "Curtis McKee is a Venture Investor and Corporate Development Executive at Intel Capital with over 17 years of combined operating and venture capital experience. Curtis has led investments and strategic transactions for Intel's Datacenter, IOT and New Technology business segments. He is passionate about investing in AI, Fintech, and IOT, and discovering new technologies disrupting traditional markets. Prior to Intel Capital, Curtis led Operations as Chief of Staff & Technical Assistant for the Datacenter Group's Enterprise Software Division, and joined Intel via the Fulcrum Microsystems acquisition where he drove BD for cloud service providers and tier 1 networking accounts at AWS, Microsoft, Cisco, Oracle/SUN and Arista. His prior experience involves engineering roles at notable public companies like Broadcom, Marvell and LSI Logic. Curtis holds a BSEE from Purdue University and an MBA from the Wharton School of the University of Pennsylvania where he majored in Finance.",
       "linkedin": "https://www.linkedin.com/in/curtismckee/",
       "major": "BSEE",
       "grad": 2001
     },
     {
       "name": "John Hamm",
       "title": "Leadership Coach",
       "company": "Self employed",
       "industry": "Advisor",
       "location": "Bay Area",
       "bio": "Executive Coach",
       "linkedin": "https://www.linkedin.com/in/jdhamm/",
       "major": "Engineering MGMT",
       "grad": 1983
     },
     {
       "name": "Alvin Ang",
       "title": "Vice President at Turn/River Capital",
       "company": "Turn/River Capital",
       "industry": "VC",
       "location": "Bay Area",
       "bio": "I'm a VP at Turn/River Capital, a tech private equity firm in San Francisco. We look for Software-as-a-Service businesses with $3-30M in annual revenue to help founders exit & move on to their next exciting idea OR provide founders with growth capital to grow their business to the next level OR a solution where founders are able to take some chips off the table & double down on the business.",
       "linkedin": "https://www.linkedin.com/in/angalvin/",
       "major": "Chemical Engineering",
       "grad": 2011
     },
     {
       "name": "Jim Anderson",
       "title": "Venture Philanthropic Investing",
       "company": "Multiple Orgs",
       "industry": "VC",
       "location": "Bay Area",
       "bio": "Jim Anderson is currently a mentor and a senior advisor to several philanthropic organizations. He has a special interest in supporting the epilepsy research at Stanford University, is an active participate in environmental initiatives around preservation of the Delta and supports several innovative entrepreneurial ventures.",
       "linkedin": "https://www.linkedin.com/in/jimanderson5/",
       "major": "MSEE",
       "grad": 1972
     },
     {
       "name": "David Overhauser",
       "title": "Entrepreneur, Investor, and Author",
       "company": "(multiple)",
       "industry": "Entrepreneur",
       "location": "Bay Area",
       "bio": "I began working with startups in 1980 and have been involved in over 20 startups in a variety of roles over 35 years, including Founder, Vice President, Board Member, investor, consultant and business advisor. I founded Simplex Solutions and saw the company through profitability, IPO and acquisition. I also worked at IBM, AT&T, Texas Instruments and Cadence Design Systems. I was also an Assistant Professor in Electrical Engineering at Duke University, where I founded the Design Automation Technology Center. I have published 3 books and over 40 technical papers, and have been granted 13 patents. I hold degrees in Mathematics, Computer Science and Electrical Engineering.",
       "linkedin": "https://www.linkedin.com/in/david-overhauser-2a8b83/",
       "major": "CS, Math",
       "grad": 1983
     },
     {
       "name": "Mike Hoefflinger",
       "title": "Author and Speaker",
       "company": "Self employed",
       "industry": "Advisor",
       "location": "Bay Area",
       "bio": "Served as Facebook's first Head of Global Business Marketing",
       "linkedin": "https://www.linkedin.com/in/mikehoefflinger/",
       "major": "BS, MS EECS",
       "grad": 1990
     },
     {
       "name": "Rich Redelfs",
       "title": "Chairman of the Board at ACCO",
       "company": "Multiple Orgs",
       "industry": "Advisor",
       "location": "Bay Area",
       "bio": "Serves as board on multiple companies",
       "linkedin": "http://www.linkedin.com/pub/rich-redelfs/6/9bb/a23",
       "major": "BS, IE",
       "grad": 1980
     },
     {
       "name": "Rusty Rueff",
       "title": "Presidential Appointee to the Advisory Committee for the Arts at The John F. Kennedy Center for the Performing Arts",
       "company": "Multiple Orgs",
       "industry": "Advisor",
       "location": "Bay Area",
       "bio": "Rusty serves on a number of corporate and philanthropic Boards and invests in and advises start-ups. He is an appointee of President Obama to the President's Advisory Committee for the Arts for The Kennedy Center. Rusty was the Coordinating National Co-Chair for Technology for Obama. He was the CEO of SNOCAP through the sale of the company to imeem, Inc.in 2008.",
       "linkedin": "http://www.linkedin.com/in/rustyrueff",
       "major": "BA Radio and Television, MS Counseling",
       "grad": 1984
     },
     {
       "name": "Vivek Thakkar",
       "title": "US Carrier Business at Apple",
       "company": "Apple",
       "industry": "Business",
       "location": "Bay Area",
       "bio": "Senior Business Development Executive with a strong product management and cross-functional background. Able to simplify and synthesize complex structures to communicate value effectively by leveraging engineering roots, business acumen, and deep knowledge of wireless industry. Thrives on the opportunity to “make a difference” in fast-paced, high-energy teams that are accountable for results and willing to challenge the status quo.",
       "linkedin": "https://www.linkedin.com/in/vivekvthakkar/",
       "major": "CompE",
       "grad": "n/a"
     },
     {
       "name": "Anand Iyer",
       "title": "CEO at Trusted",
       "company": "Trusted Child Care",
       "industry": "Entrepreneur",
       "location": "Bay Area",
       "bio": "Building companies is my passion. I love solving intractable problems. Systems thinker.",
       "linkedin": "https://www.linkedin.com/in/anandiyer/",
       "major": "CompE",
       "grad": 2001
     },
     {
       "name": "Paul Stahura",
       "title": "Seed Investor",
       "company": "Multiple Orgs",
       "industry": "VC",
       "location": "Seattle",
       "bio": "Co-founder and former CEO Donuts, Inc. Founder and former CEO of eNom, Inc.",
       "linkedin": "https://www.linkedin.com/in/paulstahura/",
       "major": "BS, MS EE",
       "grad": 1987
     },
     {
       "name": "Rehan Jalil",
       "title": "President of Elastica",
       "company": "Multiple Orgs",
       "industry": "VC",
       "location": "Bay Area",
       "bio": "Security Cloud Security SaaS Analytics, Machine Learning Cloud Computing Networking Mobile",
       "linkedin": "https://www.linkedin.com/in/rehanjalil/",
       "major": "MS, EECS",
       "grad": 1998
     },
     {
       "name": "Naveen Jain",
       "title": "Co-Founder at Tari",
       "company": "Tari",
       "industry": "Entrepreneur",
       "location": "Bay Area",
       "bio": "Entrepreneur, inventor & investor.",
       "linkedin": "https://www.linkedin.com/in/naveenkjain/",
       "major": "CompE",
       "grad": 1999
     },
     {
       "name": "Alexander Marquez",
       "title": "Global Managing Director, Head of Experian Ventures",
       "company": "Experian",
       "industry": "VC",
       "location": "Bay Area",
       "bio": "Investor, Advisor, Mentor, Entrepreneur. Built successful corporate venture and innovation programs. Advisor to accelerators, start-ups, and global multinational corporations.",
       "linkedin": "https://www.linkedin.com/in/alexmarquez/",
       "major": "MBA, Finance",
       "grad": 1994
     },
     {
       "name": "Anand Daniel",
       "title": "Partner at Accel",
       "company": "Accel Partners",
       "industry": "VC",
       "location": "India",
       "bio": "Focused on partnering with outstanding entrepreneurs to create category-defining companies across various technology sectors",
       "linkedin": "https://www.linkedin.com/in/ananddaniel/",
       "major": "MSEE",
       "grad": 1997
     },
     {
       "name": "Derrick Ko",
       "title": "CEO & Co-founder at Spin",
       "company": "Spin",
       "industry": "Entrepreneur",
       "location": "Bay Area",
       "bio": "I build products.",
       "linkedin": "http://www.linkedin.com/in/derrickk",
       "major": "CompE",
       "grad": "n/a"
     },
     {
       "name": "Mark Achler",
       "title": "Managing Director at MATH Venture Partners",
       "company": "MATH Venture Partners",
       "industry": "VC",
       "location": "Chicago",
       "bio": "Venture Capital investor, CEO, Serial entrepreneur, faculty member at the Northwestern University Kellogg School of Management and a frequent contributor to Fortune Magazine.",
       "linkedin": "https://www.linkedin.com/pub/mark-achler/0/44/4b4",
       "major": "BA, History",
       "grad": 1980
     },
     {
       "name": "Charles Adler",
       "title": "Kickstarter co-founder",
       "company": "Lost Arts",
       "industry": "Entrepreneur",
       "location": "Chicago",
       "bio": "In '97 I founded Subsystence, '03 launched Source ID, '09 Kickstarter and now working on a new endeavor entitled Lost Arts since '15. The thread across all projects is creative independence for the masses.",
       "linkedin": "http://www.linkedin.com/in/charlesadler",
       "major": "Mechanical Engineering Tech",
       "grad": 1996
     },
     {
       "name": "Jeff Hastings",
       "title": "CEO at BrightSign",
       "company": "BrightSign",
       "industry": "Entrepreneur",
       "location": "Bay Area",
       "bio": "CEO of Brightsign and board of multiple startups such as Roku",
       "linkedin": "https://www.linkedin.com/in/jeffhastings1/",
       "major": "BS, CS",
       "grad": 1987
     },
     {
       "name": "Albert Albert",
       "title": "Co-Founder at Traveloka",
       "company": "Traveloka",
       "industry": "Entrepreneur",
       "location": "Indonesia",
       "bio": "to make our world a better place through art and science",
       "linkedin": "https://www.linkedin.com/in/albert-albert-5918b08",
       "major": "BS, CS, Psychology",
       "grad": 2008
     },
     {
       "name": "Pradyuman Vig",
       "title": "CEO & Co-founder @ Abacus",
       "company": "Abacus",
       "industry": "Entrepreneur",
       "location": "Bay Area",
       "bio": "Founder of Abacus",
       "linkedin": "https://www.linkedin.com/in/pradyumanvig/",
       "major": "BE",
       "grad": "n/a"
     },
     {
       "name": "Feng Hong",
       "title": "Co-Founder at Xiaomi",
       "company": "Xiaomi",
       "industry": "Business",
       "location": "Shanghai",
       "bio": "Internet product management",
       "linkedin": "http://cn.linkedin.com/pub/feng-hong/0/10/81b",
       "major": "MS, CS",
       "grad": 2001
     },
     {
       "name": "Dhruv Saxena",
       "title": "Co-Founder at ShipBob",
       "company": "ShipBob",
       "industry": "Entrepreneur",
       "location": "Chicago",
       "bio": "Founder of ShipBob",
       "linkedin": "http://www.linkedin.com/pub/dhruv-saxena/4/803/456",
       "major": "BS, MS, EE",
       "grad": 2011
     },
     {
       "name": "Susanto Irwan",
       "title": "Co-founder and VP of Engineering at",
       "company": "Xage Security",
       "industry": "Tech",
       "location": "Bay Area",
       "bio": "Entrepreneur, Team Builder, and Technologist.",
       "linkedin": "https://www.linkedin.com/in/susantoirwan/",
       "major": "CS",
       "grad": 2001
     },
     {
       "name": "Daniel Palacio",
       "title": "Angel Investor",
       "company": "Self Employed",
       "industry": "Entrepreneur",
       "location": "New York",
       "bio": "Founder @ Authy (Acquired by Twilio). Led the Authy product at Twilio.",
       "linkedin": "http://www.linkedin.com/in/danielpalacio",
       "major": "CS",
       "grad": 2008
     },
     {
       "name": "Beck Besecker",
       "title": "Founder & CEO Marxent",
       "company": "Marxent",
       "industry": "Entrepreneur",
       "location": "Florida",
       "bio": "-",
       "linkedin": "https://www.linkedin.com/in/bbesecker/",
       "major": "MS",
       "grad": 1999
     },
     {
       "name": "Vijay Subramanian",
       "title": "Advisor",
       "company": "Catalant Tech",
       "industry": "Tech",
       "location": "New York",
       "bio": "Data/technology/product leader with two stints in consumer and enterprise startups.",
       "linkedin": "https://www.linkedin.com/in/vijay-subramanian-8507092/",
       "major": "-",
       "grad": "-"
     },
     {
       "name": "Brett Hellman",
       "title": "CEO & Founder at Matter",
       "company": "Matter",
       "industry": "Entrepreneur",
       "location": "Bay Area",
       "bio": "I am a product leader, entrepreneur, and engineer with 15 years of experience creating beautifully crafted products",
       "linkedin": "https://www.linkedin.com/in/bretthellman/",
       "major": "Operations Research",
       "grad": 2001
     },
     {
       "name": "Mike Harris",
       "title": "President",
       "company": "Ring",
       "industry": "Tech",
       "location": "Philadelphia",
       "bio": "-",
       "linkedin": "https://www.linkedin.com/in/mbrharris/",
       "major": "CompE",
       "grad": 1991
     },
     {
       "name": "Kyle Stoner",
       "title": "Founder & CEO at Abode",
       "company": "Abode",
       "industry": "Entrepreneur",
       "location": "Chicago",
       "bio": "Experienced Chief Executive Officer with a demonstrated history of building startups. Strong entrepreneurship professional skilled in Real Estate, Consumer Goods, Management, Mergers & Acquisitions, and Leadership.",
       "linkedin": "https://www.linkedin.com/in/kylestoner1/",
       "major": "IE",
       "grad": 2007
     },
     {
       "name": "Andy Knosp",
       "title": "Head of Solutions Consulting at Gladly",
       "company": "Gladly",
       "industry": "Tech",
       "location": "Bay Area",
       "bio": "Technology Pre-sales, Services, and Customer Success executive with 20 years of experience leading global teams in high growth businesses, delivering successful customer outcomes, and scaling operations from early stage through IPO at companies including Gladly, Stripe, Gainsight, Hortonworks, and VMware.",
       "linkedin": "https://www.linkedin.com/in/andyknosp/",
       "major": "IM",
       "grad": 1999
     },
     {
       "name": "Keith Krach",
       "title": "Chairman & CEO of Ariba and DocuSign",
       "company": "Ariba and DocuSign",
       "industry": "Entrepreneur",
       "location": "Bay Area",
       "bio": "Krach has led the creation of the categories of Business-to-Business (B2B) Electronic Commerce, Mechanical Design Synthesis, Digital Transaction Management (DTM) and e-Signature and is known as an early pioneer in the robotics industry.",
       "linkedin": "https://www.linkedin.com/in/keithkrach/",
       "major": "Eng",
       "grad": 1979
     },
     {
       "name": "Eric Zimitz",
       "title": "Strategic Advisor",
       "company": "Netzyn, Inc.",
       "industry": "VC",
       "location": "Bay Area",
       "bio": "-",
       "linkedin": "https://www.linkedin.com/in/ericzimits/",
       "major": "Biomedical Engineering",
       "grad": 1983
     },
     {
       "name": "Rami Elkhatib",
       "title": "General Partner at Acero Capital",
       "company": "Acero Capital",
       "industry": "VC",
       "location": "Bay Area",
       "bio": "Rami is general partner at Acero Capital, a venture capital firm focused on investments in business software (mobile, cloud, analytics and infrastructure).",
       "linkedin": "https://www.linkedin.com/in/ramielkhatib/",
       "major": "ECE",
       "grad": 1992
     }
   ]

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
            <div class="top">
            <p class="title"><strong>person-title</strong></p>
            <p class="industry">person-industry | person-location</p>
            </div>
            <a class="btn btn-primary intro-btn" href="mailto:contact@anvilstartups.com?subject=Intro Request to: person-name">Request an intro</a>
          </div>
        </div>
      </a>
  `

  const filterPeople = (person, query) => {
    const q = query.toLowerCase();

    return person.name.toLowerCase().includes(q) || person.major.toLowerCase().includes(q) || person.company.toLowerCase().includes(q) || person.title.toLowerCase().includes(q)  || person.grad.toString().toLowerCase().includes(q) || person.industry.toLowerCase().includes(q) || person.location.toLowerCase().includes(q);
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

  const pullData = () => {
   fetch("https://docs.google.com/spreadsheets/d/AIzaSyByChfGV5HLI6UbAvlTctwJT2kNsUxGydQ/gviz/tq?tqx=out:csv&sheet=1oL2odm5OFetYv5L9476hCXnycqaHqso-BaB30DhZmZI", {
     mode: "no-cors"
   }).then(text => console.log(text))
  }

  const updatePeople = () => {
    if(results.length === 0) {
      peopleContainer.innerHTML =`<h1 class="text-center white-text">No people found</h1>`;
      return;
    }

    peopleContainer.innerHTML = "";

    results.forEach(person => {
      let elementText = peopleText;

      personElement = document.createElement("div");
      personElement.setAttribute("class", "col-md-4 text-center people-card");
      // personElement.style.background = `white url(${person.image})`;

      elementText = elementText.replace("person-linkedin", person.linkedin);
      elementText = elementText.replace("person-image", `images/people/${person.name}.png`);
      elementText = elementText.replace("person-name", person.name);
      elementText = elementText.replace("person-title", person.title);
      elementText = elementText.replace("person-industry", person.industry); 
      elementText = elementText.replace("person-location", person.location); 
      elementText = elementText.replace("person-bio", person.bio.substring(0,140)); 
      elementText = elementText.replace("person-grad", ` (Class of ${person.grad})`);
      elementText = elementText.replace("person-major", person.major);

      personElement.innerHTML = elementText;
     
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
  pullData();
}