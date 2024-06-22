const projectsData = [
  {
    image: '/assets/projectImages/portfolio2.png',
    title: 'Portfolio V2',
    link: 'https://githuba.netlify.app/hello',
    category: ['react', 'sass', 'ant-design'],
    description:
      'This is the updated version of my portfolio, created using Ant Design principles and components. React with Vite, MDX, and sass also used',
  },
  {
    image: '/assets/projectImages/perfectsquare2.png',
    title: 'Perfect square V2',
    link: 'https://perfectsquare.cc/',
    category: ['react', 'firebase'],
    description:
      'Responsive company website using React, Vite, and Firebase for fast performance and real-time updates.',
  },
  {
    image: '/assets/projectImages/disneyplus.png',
    title: 'Disney Plus Clone',
    link: 'https://disneypluscloneke.netlify.app',
    category: ['react', 'firebase'],
    description:
      'Created a clone of disney plus with firebase authentication and data storage, styled using styled components in react. Login with a goggle account',
  },
  {
    image: '/assets/projectImages/markdownnotes.png',
    title: 'Markdown Notes',
    link: 'https://markdownnoteske.netlify.app/',
    category: ['react', 'firebase'],
    description:
      'An applications that allows a user to write and preview markdown and save to firebase',
  },

  {
    image: '/assets/projectImages/changia.png',
    title: 'Changia',
    link: 'https://changiake.netlify.app/',
    category: ['react', 'sass', 'material-ui'],
    description: `WIP. Startup that seeks to connect various residential care facilities with donors and volunteers, designed in figma implemented in react`,
  },

  {
    image: '/assets/projectImages/portfolio1.png',
    title: 'Portfolio V1',
    link: 'https://resplendent-crepe-5a486a.netlify.app/',
    category: ['react'],
    description:
      'This is the first version of my portfolio built with react + vite, fully responsive, hosted on netifly',
  },
  {
    image: '/assets/projectImages/vanslife.png',
    title: 'Vans Life',
    link: 'https://githubavanslife.netlify.app/',
    category: ['react'],
    description:
      'This is a project done in react with heavy use of react router dom v6 to practice on their data API routes with loaders and auth',
  },
  {
    image: '/assets/projectImages/perfectsquare1.png',
    title: 'Perfect Square v1',
    link: 'https://perfectsquareke.netlify.app/',
    category: ['react'],
    description:
      'Fully functional first iteration of the perfectsquare website, done as a prototype and used in prod',
  },
  {
    image: '/assets/projectImages/bootstrapportfolio.png',
    title: 'Bootstrap Portfolio',
    link: 'https://bootstrap-portfolio-githuba.netlify.app/',
    category: ['bootstrap', 'react', 'sass'],
    description:
      'A mini project of a portflio website done in bootstrap as a the css framework and scss as the css preprocessor',
  },
  {
    image: '/assets/self-driving.png',
    title: 'Self Driving Car',
    link: 'https://bright-youtiao-5596fa.netlify.app/',
    category: ['javascript'],
    description:
      'A self driving car simulation that works with nerual networks created with javascript',
  },
  {
    image: '/assets/tenzies.png',
    title: 'Tenzies Game',
    link: 'https://relaxed-dusk-ebfe6c.netlify.app/',
    category: ['react'],
    description:
      'A game whreby you roll until all dice are the same. Click each die to freeze it at its current value between rolls.',
  },
  {
    image: '/assets/adam-gethin-ujmv-UBQ0uE-unsplash.png',
    title: ' Blockchain Covid Certificates ',
    link: 'https://github.com/githubarj/Blockchain-Covid-Certificates',
    category: ['solidity'],
    description:
      'This is a covid vaccine certificate issuing and authentication system. Done for the Africa Blockchain Centre web3 hackathon',
  },
  {
    image: '/assets/ec552d0fc0fed9c2538a39799caaf957.png',
    title: 'Web 3 Crowd Funding Application',
    link: 'https://github.com/githubarj/Web-3-CrowdFunding-App#web-3-crowd-funding-application',
    category: ['solidity'],
    description:
      'This is an application that allows a user to receive funds from multiple people and only the user/deployer can later withdraw.',
  },
  {
    image: '/assets/6775355aae42326ce21aee81340220ed.png',
    title: 'Baby Blockchain',
    link: 'https://github.com/githubarj/Baby-Blockchain',
    category: ['javascript'],
    description:
      'It is an implementation of my own minimal version of the blockchain (without decentralization and consensus, only basic mechanics).',
  },
  {
    image: '/assets/carl-raw-m3hn2Kn5Bns-unsplash.png',
    title: 'Snake Game',
    link: 'https://github.com/githubarj/SnakeGame ',
    category: ['c++'],
    description:
      'A game created with OpenGL and written in C++. A simple game where a snake increases in size as it consumes food that appears randomly in the map',
  },
  {
    image: '/assets/drawkit-illustrations-8iIUDnRq87o-unsplash.png',
    title: 'BPESA-ERC20-Token',
    link: ' https://github.com/githubarj/BPESA-ERC20-Token ',
    category: ['solidity'],
    description:
      'Created and deployed an ERC-20 token on an Ethereum testnet. Used remix and metamask.',
  },
];

const menuItems = [
  {
    name: 'all',
    icon: '/icons/icons8-code-50.png',
  },
  {
    name: 'React',
    icon: '/icons/reactjs-line.png',
  },
  {
    name: 'Javascript',
    icon: '/icons/javascript-fill.png',
  },
  {
    name: 'Solidity',
    icon: '/icons/icons8-solidity-24.png',
  },

  {
    name: 'Kotlin',
    icon: '/icons/icons8-kotlin-50.png',
  },
  {
    name: 'C++',
    icon: '/icons/icons8-c-50.png',
  },
  {
    name: 'Firebase',
    icon: '/icons/icons8-firebase-24.png',
  },
  {
    name: 'HTML',
    icon: '/icons/html5-fill.png',
  },
  {
    name: 'CSS',
    icon: '/icons/css3-fill.png',
  },
];

export { menuItems, projectsData };
