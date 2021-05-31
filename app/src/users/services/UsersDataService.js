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

      content: "I'm Themba Ntuli, a web developer...",
    },
    {
      name: "About",

      content:
        "I'm passionate about software development and cybersecurity. I admire companies that have robust security systems for the prevention of cyber-crime.In the long-term, I want to have made my own contributions to the development of software products and security technologies. I am therefore excited about the opportunity this learnership presents for developing my expertise and experience",
    },
    {
      name: "Skills",

      content: "",
    },
    {
      name: "Projects",

      content: "",
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
