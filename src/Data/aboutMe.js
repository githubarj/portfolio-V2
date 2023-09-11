const filterIcons = [
  {
    tag: "code",
    icon: "/icons/terminal-box.png",
  },
  {
    tag: "personal",
    icon: "/icons/personal.png",
  },
  {
    tag: "hobbies",
    icon: "/icons/hobbies.png",
  },
];

const menus = [
  {
    id:1,
    heading: "personal-info",
    menuItems: [
      {
        icon: "/icons/bio.png",
        text: "bio",
        context: [
          {
            title: "personal-info",
            text: "",
          },
          {
            title: "interests",
            text: "",
          },
        ],
      },
      {
        icon: "/public/icons/interests.png",
        text: "experience",
        context: [
          {
            title: "Freelance Developer",
            text: "",
          },
          {
            title: "Front-End Lead",
            text: "",
          },
          {
            title: "Volunteer Librarian",
            text: "",
          },
          {
            title: "Junior Developer Attachee",
            text: "",
          },
          {
            title: "Volunteer Lab Technician ",
            text: "",
          },
        ],
      },
      {
        icon: "/public/icons/education.png",
        text: "education",
        context: [
          {
            title: "Strathmore University",
            text: "",
          },
          {
            title: "Alliance High School",
            text: "",
          },
          {
            title: "Musa Gitau Primary School",
            text: "",
          },
        ],
      },
    ],
  },

  {
    id: 2,
    heading: "contacts",
    display: "none",
    menuItems: [
      {
        icon: "/icons/mail.png",
        text: "gitihuba9520@gmail.com",
        context: [],
      },
      {
        icon: "/public/icons/phone.png",
        text: "+254798320724",
        context: [],
      },
      {
        icon: "/public/icons/whatsapp.png",
        text: "+254798320724",
        context: [],
      },
    ],
  },
];
export { filterIcons, menus };
