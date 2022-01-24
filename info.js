let info = {
  name: "José Luis Valdés Gómez",
  logo_name: "José Luis Valdés",
  flat_picture: require("./src/assets/Pepe1.jpg"),
  config: {
    use_cookies: true,
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
  experience: [
    {
      name: "MONT",
      place: "Kafr elSheikh, Egypt",
      date: "July, 2021 - currently",
      position: "ReactJS Engineer",
      description: "",
      skills: [
        "HTML5",
        "CSS3",
        "Bootstrap",
        "JQuery",
        "Json",
        "JavaSript",
        "TypeSript",
        "es6",
        "VueJS",
      ],
    },
    {
      name: "ITI",
      place: "Kafr elSheikh, Egypt",
      date: "1,sep, 2021 - 28,sep, 2021",
      position: "VueJS web developer",
      description: "",
      skills: [
        "HTML5",
        "CSS3",
        "Bootstrap",
        "JQuery",
        "Json",
        "JavaSript",
        "TypeSript",
        "es6",
        "VueJS",
      ],
    },
    {
      name: "Udacity",
      place: "Egypt",
      date: "jun, 2021 - sep, 2021",
      position: "React Web Developer",
      description: "",
      skills: [
        "Javascript",
        "Typescript",
        "ReactJS",
        "React-Redux",
        "webpack",
        "NLP",
      ],
    },
    {
      name: "IEEE",
      place: "Alexandria, Egypt",
      date: "Jan, 2020 - Feb, 2020",
      position: "Frontend Developer",
      description: "",
      skills: ["HTML", "CSS", "JavaSript"],
    },
  ],
  skills: [
    {
      title: "Language",
      info: ["Python", "Javascript", "TypeScript", "Java", "C#"],
      icon: "fa fa-code",
    },
    {
      title: "Front-end",
      info: ["HTML5", "CSS3", "Bootstrap3", "JQuery", "Es6", "json"],
      icon: "fa fa-cubes",
    },
    {
      title: "web technologies",
      info: ["Vue", "React", "Node"],
      icon: "fas fa-laptop-code",
    },
    {
      title: "Databases",
      info: ["MongoDB", "MySQL", "SQL Server"],
      icon: "fa fa-database",
    },
    {
      title: "Operating systems & tools",
      info: ["Ubuntu", "Windows", "Agile", "Scrum", "JIRA", "Firebase"],
      icon: "fas fa-tools",
    },
    {
      title: "Design",
      info: ["Illustrator", "XD", "Photoshop", "Gimp"],
      icon: "fa fa-pencil-square-o",
    },
  ],
  portfolio: [
    {
      name: "TimeLine",
      pictures: [
        {
          img: require("./src/assets/portfolio/diary/1.png"),
        },
        {
          img: require("./src/assets/portfolio/diary/2.png"),
        },
        {
          img: require("./src/assets/portfolio/diary/3.png"),
        },
      ],
      technologies: ["javascript", "css", "local storage"],
      category: "Web App",
      date: "Aug, 2021 - 20 days",
      github: "https://github.com/mahy209/notes-react-app.git",
      visit: "https://github.com/mahy209/notes-react-app.git",
      description:
        " Timeline is an online version of a boardgame with the same name. You can check rules and get more info about it here: https://boardgamegeek.com/boardgame/128664/timeline",
    },
    {
      name: "Consulta",
      pictures: [
        {
          img: require("./src/assets/portfolio/online examination/exam (1).png"),
        },
        {
          img: require("./src/assets/portfolio/online examination/exam (2).png"),
        },
        {
          img: require("./src/assets/portfolio/online examination/exam (3).png"),
        },
        {
          img: require("./src/assets/portfolio/online examination/exam (4).png"),
        },
        {
          img: require("./src/assets/portfolio/online examination/exam (5).png"),
        },
      ],
      technologies: ["HTML", "CSS", "JavaSript", "JQuery", "PHP", "MySQL"],
      category: "Web App",
      date: "Apr, 2021 - May, 2021",
      github: "https://github.com/mahy209/online-examination.git",
      visit: "https://github.com/mahy209/online-examination.git",
      description:
      "This project is a psychologist agenda, to unified your clients and take a control for your appointments."
    },
    {
      name: "MyFlix.com",
      pictures: [
        {
          img: require("./src/assets/portfolio/myflix.com/1.png"),
        },
        {
          img: require("./src/assets/portfolio/myflix.com/2.png"),
        },
        {
          img: require("./src/assets/portfolio/myflix.com/3.png"),
        },
        {
          img: require("./src/assets/portfolio/myflix.com/4.png"),
        },
      ],
      technologies: ["react", "css", "TMDB"],
      category: "Web App",
      date: "Aug, 2021 - 10 days",
      github: "https://github.com/mahy209/MyFlix-react-app.git",
      visit: "https://github.com/mahy209/MyFlix-react-app.git",
      description:
        " flix.com is a netflix clone using React JS and TMDB with courusal and search engine. ",
    },
  ],
  portfolio_design: [
    {
      name: "Examia",
      title: "Online Examination - UI Design",
      pictures: [
        {
          img: require("./src/assets/designs/online examination/exam (2).png"),
          title: "MoodBoard",
        },
        {
          img: require("./src/assets/designs/online examination/exam (1).png"),
          title: "Mockups 1",
        },
        {
          img: require("./src/assets/designs/online examination/exam (3).png"),
          title: "Mockups 2",
        },
        {
          img: require("./src/assets/designs/online examination/exam (4).png"),
          title: "App Elements",
        },
        {
          img: require("./src/assets/designs/online examination/exam (5).png"),
          title: "App Elements",
        },
        {
          img: require("./src/assets/designs/online examination/exam (6).png"),
          title: "App Elements",
        },
      ],
      technologies: ["XD", "Photoshop"],
      category: "Visual Design",
      github: "",
      date: "Jan, 2021 - Feb, 2021",
      visit: "",
      description:
        " Examia is a open source project , <br> <br> with Ui/UX design and full stack developing(HTML/CSS/JQuery/PHP).",
    },
    {
      name: "Pill Reminder",
      title: "Pill Reminder - Mockup Design",
      pictures: [
        {
          img: require("./src/assets/designs/pill reminder/Web 1.png"),
          title: "Moodboard",
        },
        {
          img: require("./src/assets/designs/pill reminder/1.png"),
          title: "Mockups 1",
        },
        {
          img: require("./src/assets/designs/pill reminder/2.png"),
          title: "Mockups 2",
        },
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "Apr, 2021 - Apr, 2021",
      visit: "",
      description: "pill reminder app for nessecary drugs for the day.",
    },
    {
      name: "Taxes Burger",
      title: "Taxes Burger - UI design",
      pictures: [
        {
          img: require("./src/assets/designs/burger/Web 1 (1).jpg"),
          title: "Moodboard",
        },
        {
          img: require("./src/assets/designs/burger/Web 1 (1).png"),
          title: "Mockup 1",
        },
        {
          img: require("./src/assets/designs/burger/Web 1 (2).png"),
          title: "Mockup 2",
        },
        {
          img: require("./src/assets/designs/burger/Web 1 (3).png"),
          title: "Mockup 3",
        },
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "May, 2021 - May, 2021",
      visit: "",
      description: " Burger restuarant UI design",
    },
  ],
};

export default info;
