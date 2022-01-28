let info = {
  name: "José Luis Valdés Gómez",
  logo_name: "José Luis Valdés",
  flat_picture: require("./src/assets/Pepe1.jpg"),
  config: {
    use_cookies: false,
    navbar: {
      blur: false,
    },
  },
  description:
    "I'm José Luis, a Frontend developer specialized in <b>Javascript, React, NodeJS, HTML, CSS</b>. Dynamic, proactive and motivated. Seeking an opportunity to expand my programming and profesional skills. ",
  links: {
    linkedin: "https://www.linkedin.com/in/jose-luis-valdes-frontend",
    github: "https://github.com/ValdesDev",
  },
  education: [
    {
      name: "KFS University",
      place: "Kafr Elsheikh",
      date: "sep, 2018 - currently",
      degree: "bachelor in software engineering",
      gpa: "3.1/4.0",
      description: "",
      skills: [
        "Software Engineering",
        "web programming",
        "UI/UX design",
        "Front-end developing",
        "C#",
      ],
    },
  ],
  skills: [
    {
      title: "Javascript",
      info: ["ES6", "SOLID Principles", "JQuery"],
      image: require("./src/assets/logos/JavaScript_logo.png"),
    },
    {
      title: "React",
      info: ["Material UI", "Boostrap", "React Hooks"],
      image: require("./src/assets/logos/React-logo.png"),
    },
    {
      title: "CSS/SCSS",
      info: ["CSS3", "Sass", "HTML5", "Responsive"],
      image: require("./src/assets/logos/CSS-logo.png"),
    },
    {
      title: "Node JS",
      info: ["Express JS", "Postman", "Web API"],
      image: require("./src/assets/logos/Node-logo.png"),
    },
    {
      title: "MongoDB",
      info: ["Mongoose", "Database Design"],
      image: require("./src/assets/logos/Mongo-logo.png"),
    },
    {
      title: "Git",
      info: ["GitHub", "Gitflow", "CI"],
      image: require("./src/assets/logos/Git-logo.png"),
    },
    {
      title: "Vue",
      image: require("./src/assets/logos/Vue-logo.png"),
      learning: true,
    },
    {
      title: "Redux",
      image: require("./src/assets/logos/Redux-logo.png"),
      learning: true,
    },
  ],

  portfolio_design: [
    {
      name: "TimeLine",
      title: "TimeLine - Vanilla JavaScript Game",
      pictures: [
        {
          img: require("./src/assets/designs/timeline/TimeLine1.png"),
          title: "TimeLine",
        },
        {
          img: require("./src/assets/designs/timeline/TimeLine3.png"),
          title: "Flip effects",
        },
        {
          img: require("./src/assets/designs/timeline/TimeLine2.png"),
          title: "Rules",
        },
      ],
      technologies: ["JavaScript", "DOM", "CSS", "Animations"],
      category: "Vanilla JavaScript Game",
      github: "https://github.com/ValdesDev/Timeline",
      visit: "https://valdesdev.github.io/Timeline/",
      description:
        "<p> Timeline is an online version of a board game with the same name.</p>" +
        "<p>In this version, all the cards are from Spanish history events.</p>" +
        "<p>General rules: You have to choose a card and put in in the correct place of the time line. If you fail three times putting the card, the game ends. </p>" +
        "<p>Have fun!</p>",
    },
    {
      name: "Psychological Agenda",
      title: "Psychological Agenda - Web App",
      pictures: [
        {
          img: require("./src/assets/designs/agenda/1.png"),
          title: "Landing page",
        },
        {
          img: require("./src/assets/designs/agenda/3.png"),
          title: "Calendar",
        },
        {
          img: require("./src/assets/designs/agenda/Web 1.png"),
          title: "Appointments",
        },
        {
          img: require("./src/assets/designs/agenda/2.png"),
          title: "Client management",
        },
      ],
      technologies: [
        "JavaScript",
        "Bootstrap",
        "CSS",
        "Node",
        "Express",
        "MongoDB",
      ],
      category: "Scheduler Web App",
      github: "https://github.com/ValdesDev/Psychological-Agenda",
      visit: "https://psychology-clinic.herokuapp.com/",
      description:
        "<p>This project is a psychologist agenda, to unified your clients and take a control fo your appointments. Taking advantage of my previous experience, " +
        "I created a calendar view to make it easy to manage your appointments. </p>" +
        "<p>Beside that, there's also a landing page where you find out more about the website, and take in contact with administration.</p>" +
        "<p>The project is ready to manage several psychologists and different clients.</p>",
    },
    {
      name: "Grouping-HR-App",
      title: "HR Management - Dashboard",
      pictures: [
        {
          img: require("./src/assets/designs/grouping/Web 1 (1).png"),
          title: "Landing page",
        },
        {
          img: require("./src/assets/designs/grouping/Web 1 (2).png"),
          title: "Time off requests",
        },
        {
          img: require("./src/assets/designs/grouping/Web 1 (3).png"),
          title: "HR Calendar",
        },
        {
          img: require("./src/assets/designs/grouping/Web 1 (4).png"),
          title: "Clock in and out",
        },
      ],
      technologies: ["React", "JavaScript", "CSS", "MUI", "Node"],
      category: "MERN Project",
      github: "https://github.com/ValdesDev/HR-App",
      visit: "https://grouping-rh.herokuapp.com",
      description:
        "<p>Grouping is a software focus on automatize HR tasks. User can manage employee's holidays and sick leaves and track working hours.</p>" +
        " <ul> " +
        "<li><strong>Time Off:</strong> Manage time off requests from employees.</li>" +
        "<li><strong>Time Tracking:</strong> Daily clock in/out and work time table reports.</li>" +
        "<li><strong>Task Management:</strong> Track employee's tasks.</li>" +
        "<li><strong>Employees &amp; Company portal:</strong> Different access and roles.</li>" +
        "</ul>",
    },
  ],
};

export default info;
