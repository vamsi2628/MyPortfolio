import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000,
};

// Summary And Greeting Section

const illustration = {
  animated: true, // Set to false to use static SVG
};

const greeting = {
  username: "P VAMSI KRISHNA",
  title: "Hi all, I'm VAMSI",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink: require("./20211A04F8_Vamsi Krishna .pdf"), // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/vamsi2628",
  linkedin: "https://www.linkedin.com/in/vamsi-krishna-805031240/",
  gmail: "20211a04f8@bvrit.ac.in",
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for web applications"
    ),
    emoji("⚡ Progressive Web Applications "),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java",
    },
  ],
  display: true,
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "B V RAJU INSTITUTE OF TECHNOLOGY",
      subHeader: "Electronics and Communication Engineering",
      duration: "2020 - 2024",
    },
    {
      schoolName: "Narayana Jr College",
      subHeader: "MPC",
      duration: "2018 - 2020",
    },
    {
      schoolName: "St. Joseph's English School",
      subHeader: "CBSE",
      duration: "2017 - 2018",
    },
  ],
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend/Design",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "60%",
    },
  ],
  displayCodersrank: false,
};

const openSource = {
  showGithubProfile: "true",
  display: true,
};

const bigProjects = {
  title: "Projects",
  projects: [
    {
      image: require("./assets/images/bookbird.png"),
      projectName: "Book Bird",
      projectDesc:
        "The automated washing machine can be modeled using a finite state machine (FSM) in Verilog HDL, which can be implemented on an FPGA The FSM will have several states, including start, water_in ,Rotate and Water_out, with transitions between states triggered by various inputs such as start, stop.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://vamsi2628.github.io/LibraryManagmentProject/",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/puzzle.png"),
      projectName: "Puzzle Game",
      projectDesc:
        "It is an exciting adventure game that requires players to overcome a variety of puzzles and challenges in order achieve their ultimate goal.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://vamsi2628.github.io/elitmuspuzzle/login.html",
        },
      ],
    },
    {
      projectName: "Automated washing machine using Verilog HDL",
      projectDesc:
        "The automated washing machine can be modeled using a finite state machine (FSM) in Verilog HDL, which can be implemented on an FPGA The FSM will have several states, including start, water_in ,Rotate and Water_out, with transitions between states triggered by various inputs such as start, stop.",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  number: "+919502210668",
  email_address: "20211a04f8@bvrit.ac.in",
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  openSource,
  bigProjects,
  contactInfo,
  isHireable,
};
