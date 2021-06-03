/**
 * Users DataService
 * Uses embedded, hard-coded data model; acts asynchronously to simulate
 * remote data service call(s).
 *
 * @returns {{loadAll: Function}}
 * @constructor
 */
function UsersDataService($q) {
  var users = [
    {
      name: "Home",

      names: "",
      header:
        "I'm Themba Ntuli, a full-stack Web Application Developer and Software Developer, currently living in Johannesburg.",
      content: "",
    },
    {
      name: "About",

      names: "About me",
      header: "",
      content:
        "I'm passionate about software development and cybersecurity. I admire companies that have robust security systems for the prevention of cyber-crime.In the long-term, I want to have made my own contributions to the development of software products and security technologies.I am both driven and self-motivated, and I am constantly experimenting with new technologies and techniques. I am very passionate about Web Development, and strive to better myself as a developer, and the development community as a whole.",
    },
    {
      name: "Skills",

      names: "Skills",
      header: "",
      content:
        "I have been studying web development since 2017 and I develop in both Javascript and Python, though I primarily use Javascript. I am experienced in both front and back-end development, and I am proficient in HTML, CSS, JavaScript, jQuery, Agularjs, and SQL to name a few. I am also proficient in many non-web-based languages, including but not limited to Java, C,and Golang. I have also worked on some smaller Python projects, and have used the language to create one-time use tools for data processing and similar purposes.",
    },
    {
      name: "Contact",

      names: "contact",
      header: "",
      content:
        "Thank you for your continued interest in my portfolio and work experience. Feel free to message me on my email: majawonke@gmail.com or call me on 0711825511",
    },
  ];

  // Promise-based API
  return {
    loadAllUsers: function () {
      // Simulate async nature of real remote calls
      return $q.when(users);
    },
  };
}

export default ["$q", UsersDataService];
