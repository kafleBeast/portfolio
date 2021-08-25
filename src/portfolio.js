/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Abhishek Kafle",
  title: "Hi all, I'm Abhishek",
  subTitle: emoji(
    "A Mechanical Engineer with an interest in Computer Vision and Machine learning and their applications in Automated systems. I also like building web applications on the side."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1G2CQjoOcEcZlDgYYFy_hD3kuo50XSIrl/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kafleBeast",
  linkedin: "https://www.linkedin.com/in/kafleabhishek/",
  gmail: "abhishek.kafle@stonybrook.edu",
  facebook: "https://www.facebook.com/this.kafle",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Make use of following tools to design CAD models, write programs, run simulations, perform calculations, and do data analysis",
  skills: [
    // emoji(
    //   "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    // ),
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    // emoji(
    //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "MATLAB",
      fontAwesomeClassname: "fas fa-chart-area"
    },
    {
      skillName: "Illustrator & Photoshop",
      fontAwesomeClassname: "fab fa-adobe"
    },
    {
      skillName: "Solidworks",
      fontAwesomeClassname: "fab fa-stripe-s"
    },
    {
      skillName: "Autodesk",
      fontAwesomeClassname: "fab fa-amilia"
    },
    {
      skillName: "LaTex",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    }
    
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Stony Brook University",
      logo: require("./assets/images/stonybrook.png"),
      subHeader: "Bachelor of Engineering in Mechanical Engineering & Bachelor of Science in Applied Mathematics and Statistics",
      duration: "August 2019 - May 2020",
      desc: "One-year home campus experience",
      descBullets: [
        "Couses taken in Mechanical Engineering: Solid mechanics, Fluid Mechanics, Thermodynamics, Control system Analysis and Design, Machine design, Modern Machine shops",
        "Courses taken in Applied Mathematics and Statistics: Linear Algebra, Statistics and Probablity, Graph theory, Financial Mathematics, Data Analysis with R, Calculus I-IV, Numerical Analysis"
      ]
    },
    {
      schoolName: "State University of New York, South Korea",
      logo: require("./assets/images/stonybrook.png"),
      subHeader: "Bachelor of Engineering in Mechanical Engineering & Bachelor of Science in Applied Mathematics and Statistics",
      duration: "August 2018 - June 2022",
      desc: "CUM GPA - 3.79",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "CAD Design",
      progressPercentage: "80%"
    },
    {
      Stack: "Simulink simulation",
      progressPercentage: "70%"
    },
    {
      Stack: "Website Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Assistant",
      company: "Stony Brook University",
      companylogo: require("./assets/images/stonybrook.png"),
      date: "June 2021 – Present",
      desc: "Optimal control and Sweeping process",
      descBullets: [
        "Working on Optimal Control and application algorithm of sweeping process with the research team",
        "Studying the assigned reading tasks weekly and preparing presentations for the supervisor and fellow research assistants"
      ]
    },
    {
      role: "Academic Peer Tutor",
      company: "Stony Brook University",
      companylogo: require("./assets/images/stonybrook.png"),
      date: "August 2020 – Present",
      desc: "Courses tutored: Linear Algebra, Multi-variable calculus, and Classical Physics",
      descBullets: [
        "Organizing one-to-one tutoring sessions with students",
        "Helping the students understand the fundamental concepts in the courses and providing them problem solving tips"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some of my big projects",
  projects: [
    {
      image: require("./assets/images/greLandingPage.png"),
      projectName: "GRE Verbal Road to 160+",
      projectDesc: "A React app with Dictionary API integration to create a personalized word-lists. " +
      "Flash cards and Quizzes are designed for efficient vocabulary learning",
      
      footerLink: [
        {
          name: "Visit Website",
          url: "http://abhishekkafle.com.np/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/siteUnderConstruction.png"),
      projectName: "Stock Market Analysis - FINFA",
      projectDesc: "Created a Web application that uses time series analysis and sentiment analysis to forecast the stock returns",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://abhishekkafle.com.np/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc


// Blogs Section



const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+82-1025280496",
  email_address: "abhishekkafle5@gmail.com"
};



export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  contactInfo,
};
