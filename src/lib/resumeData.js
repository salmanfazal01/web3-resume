import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import DataArrayIcon from "@mui/icons-material/DataArray";
import DataObjectIcon from "@mui/icons-material/DataObject";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import StorageIcon from "@mui/icons-material/Storage";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Resume from "../assets/files/salmanFazalResume.pdf";
import { portfolioImages } from "./portfolioImages";
import profilePicture from "../assets/images/displayImage.jpg";

export default {
  profilePicture: profilePicture,
  name: "Salman Fazal",
  title: "Full-Stack Developer",

  email: "salmanfazal01@gmail.com",
  address: "Toronto, Ca",

  socials: {
    twitter: {
      link: "https://twitter.com/Nephew_Sam_",
      text: "Nephew_Sam_",
      icon: TwitterIcon,
    },
    linkedIn: {
      link: "https://linkedin.com/in/salmanfazal",
      text: "SalmanFazal",
      icon: LinkedInIcon,
    },
    gitHub: {
      link: "https://github.com/salmanfazal01",
      text: "SalmanFazal01",
      icon: GitHubIcon,
    },
  },

  resume: Resume,

  about:
    "Experienced front-end engineer with a proven track record of developing complex web applications with both small and large teams.\n\nSkilled in JavaScript and adept at utilizing modern technologies like React/Next, Redux, and Firebase.",
  experiences: [
    {
      institute: "Freedom Communication (DSM, TZ)",
      title: "IT Sales & Support",
      date: "May 16/7 - Sep 16/7",
      description:
        "• Completed a 4-month internship program after my first and second years in the university.\n• Scaled the company services from sales only to technical by training a group of employees on maintaining and fixing PC software and hardware related matters.\n• Performed installation & maintenance of workstations as needed.\n• Provided sales assistance/support in the electronics and networking department.",
    },
    {
      institute: "Freedom Communication (DSM, TZ)",
      title: "Web and Database Developer",
      date: "May 2018 - Dec 2018",
      description:
        "• Streamlined stock management for all company warehouses by transforming the mainstream, paperbased warehouse stock system into a desktop app, databased solution.\n• Maintained existing database-driven web interfaces for rapid file transfer and data communication using SQL Servers and utilizing various jQuery plugins.\n• Modified databases according to requests, performed tests and solved database usage issues and malfunctions.",
    },
    {
      institute: "Trading Room App (Contract)",
      title: "Full-stack Developer",
      date: "May 2019 - Sep 2019",
      description:
        "• Developed a trading platform similar to 3Commas that brings all major exchanges under one roof and added advanced and added unique algorithmic features not offered by the exchanges.\n• Created procedures for requirements gathering, needs analysis, testing, scripting and documentation to strengthen the quality and functionality of the trading app.",
    },
    {
      institute: "Code-It Hacks (Toronto, CA)",
      title: "Lead Educator",
      date: "Jan 2020 - Jul 2020",
      description:
        "• Lead instructor for elementary and middle school students S.T.E.M related topics, including Robotics and Coding (SCRATCH and Python).\n• Conducted two full day Web Development workshops for working professionals and delivered Webdevelopment focused tech skills sessions to address skill gaps.\n• Stayed abreast of developments in web applications and programming languages to maintain and enhance web development expertise. ",
    },
    {
      institute: "ForexLens (Toronto, CA)",
      title: "Part-Time Developer",
      date: "Jun 2020 - Jul 2021",
      description:
        "• Partnered with Your Fuse and worked on trading-related dev tasks, including scoping, building, implementing, testing, and deploying new features and versions of core applications and databases.\n• Used Python to develop an automated Discord and Telegram bot that managed the company trading signals and subscription system.\n• Built a Metatrader copy-trading system with analytics and monitored analytics and server logs to block unauthorized data scrapers and spiders.\n• Enhanced the company’s website front-end to a modern-looking UI using HTML5, CSS3, JavaScript and ReactJS.",
    },
    {
      institute: "Your Fuse (Toronto, CA)",
      title: "Full-stack Developer",
      date: "Jun 2020 - Jul 2021",
      description:
        "• Handled full stack development for clients' web application projects daily utilizing technologies such as ReactJS and Firebase (authentication, firestore, storage and cloud functions).\n• Used ReactJS to create stable, maintainable and testable codebases.\n• Built new features and functionalities on the web applications in line with functional specifications and business requirements.\n• Leveraged strong attention to detail and knowledge of the web development to accurately write effective APIs and tests and perform bug fixes and code reviews. ",
    },
    {
      institute: "Flight Centre (Toronto, CA)",
      title: "Front-end Developer",
      date: "Jul 2021 - Feb 2022",
      description:
        "• Execute several high-end front-end projects and tasks using a variety of technologies such as ReactJS, React Native, Redux and Material-UI.\n• Leverage integrated Cypress to effectively perform unit testing and end to end testing.\n• Work collaboratively with the product designing team to bring Figma prototypes to life.\n• Multitask between managing and maintaining inhouse NPM package SDKs (software development kits) and native mobile app SDKs.",
    },
    {
      institute: "MakerDAO (Remote)",
      title: "Full-stack Developer",
      date: "Feb 2022 - Present",
      description:
        "• Developed Maker Academy web app from scratch with modern architecture and design patterns\n• Converted Figma designs to functional, responsive code with seamless user experience\n• Implemented tech stack: React, NextJS, Redux, Emotion, Material UI, Firebase\n• Incorporated web3 authentication using Rainbow kit and Alchemy\n• Worked with cross-functional teams in agile environment to deliver high-quality UX\n• Launched Maker Academy, improving user engagement and education on MakerDAO\n• Contributed to MakerDAO ecosystem by building an educational platform for learners and experts",
    },
  ],

  educations: [
    {
      title: "ACCP",
      institute: "Aptech College, TZ",
      date: "Mar 2015",
      description: "Completed the foundation year with an overall Distinction.",
    },
    {
      title: "BSc COMPUTER SCIENCE",
      institute: "Coventry University, UK",
      date: "Apr 2018",
      description:
        "Graduated a Bachelors of Science degree with a first-class Honours.",
    },
    {
      title: "Financial Technology",
      institute: "Seneca College, Ca",
      date: "May 2020",
      description:
        "Completed the Financial Technology post-graduate certificate program.",
    },
  ],

  services: [
    {
      title: "React JS",
      description: "React.js framework",
      icon: DataObjectIcon,
      percent: 90,
    },
    {
      title: "Next JS",
      description: "next.js framework (SSR)",
      icon: DataArrayIcon,
      percent: 70,
    },
    {
      title: "Firebase",
      description: "Auth / Firestore / Functions",
      icon: StorageIcon,
      percent: 80,
    },
    {
      title: "Web3",
      description: "Solidity + EtherJS",
      icon: CurrencyBitcoinIcon,
      percent: 40,
    },
    {
      title: "Github",
      description: "Source Control",
      icon: GitHubIcon,
      percent: 70,
    },
  ],

  skills: [
    {
      title: "FRONT-END",
      description: [
        "ReactJS",
        "React Native",
        "JavaScript",
        "TypeScript",
        "Bootstrap",
        "Material UI",
      ],
    },
    {
      title: "BACK-END",
      description: ["Firebase", "NodeJS", "Java", "Python", "Solidity"],
    },
    {
      title: "DATABASES",
      description: ["Firebase", "Ms SQL Server", "MySQL", "MongoDB"],
    },
    {
      title: "SOURCE CONTROL",
      description: ["Git", "GitHub", "Bitbucket", "SCRUM/Agile"],
    },
  ],

  projects: [
    {
      tag: "React",
      images: [...portfolioImages.react.makeracademy],
      title: "Maker Academy",
      caption: "Maker Academy",
      description:
        "(Turn on full screen view for these images)\n\nThis is the fully-responsive, localized and themed Maker Academy project created during my time at MakerDAO. Users can read articles or take courses with assessments. Users with special permissions can also contribute to the app by submitting a new article or course – which goes through an admin approval process. The project allows users to authenticate via gmail, email/password or web3 auth. \n\nWe worked in a team of 5; A product manager, a designer, me as the full-stack developer and 2 content writers. \n\nTechnologies used:\n• Front-end => NextJS and Material UI as the design library, Redux, Rainbow Kit UI for the web3 auth.\n• Back-end => Firebase Firestore, Storage, Cloud Functions and Google Analytics.",
      links: [
        {
          link: "https://makerdao.academy/",
          icon: LanguageIcon,
        },
        {
          link: "https://github.com/MakerAcademy/maker-academy-v2",
          icon: GitHubIcon,
        },
      ],
    },
    {
      tag: "React",
      images: [...portfolioImages.react._1inch],
      title: "1inch",
      caption: "1inch network aggregator",
      description:
        "(Turn on full screen view for these images)\n\nI've created a clone of the 1inch network aggregator! I built out the front-end landing page, swapping page, and implemented the swapping features. It's been a really challenging but rewarding experience.\n\nTechnologies I used:\n• ReactJS and Material UI as the design library\n• thirdweb sdk to connect metamask wallet, fetch wallet details and perform transactions\n• 1inch Network API to fetch best conversion prices and TX data to perform transactions.\n\nI also recorded a youtube video of me creating the landing page from scratch in under 4 hours - https://lnkd.in/gDvrBMUu",
      links: [
        {
          link: "https://web3-1inch-clone.vercel.app/",
          icon: LanguageIcon,
        },
        {
          link: "https://github.com/salmanfazal01/web3-1inch-clone",
          icon: GitHubIcon,
        },
        {
          link: "https://youtu.be/4MrDn0ClJDQ",
          icon: YouTubeIcon,
        },
      ],
    },
    {
      tag: "React",
      images: [...portfolioImages.react.thebig6ix],
      title: "TheBig6ix",
      caption: "Score Predictor Game",
      description:
        "This was collaboration game with the biggest football podcast show on YouTube - The Big 6ix show. I created full responsive football predictor app where users can sign up, join leagues, and predict scores to compete against other users and against the official TheBig6ix team too. n\nTechnologies used:\n• Front-end => NextJS and Material UI v5 as the design library.\n• Back-end => Firebase Firestore and Cloud Functions, api-sports API to fetch latest game fixtures and results. \n•Deployement => Vercel",
      links: [
        {
          link: "https://www.thebig6ix.com/",
          icon: LanguageIcon,
        },
      ],
    },
    {
      tag: "React",
      images: [...portfolioImages.react.crowdfunding],
      title: "Crowdfunding",
      caption: "Web3 Crowdfunding",
      description:
        "I created a simple, fully responsive web3 crowdfunding application over the weekend where you can sign in with metamask, create a campaign and donate to campaigns using your Goerli testnet ETH.\n\nTechnologies used:\nFrontend => ReactJS + Material UI for the design library + thirdweb to connect to metamask and read/call the smart contract.\nBackend => Solidity + hardhat + thirdweb for contract deployment.",
      links: [
        {
          link: "https://web3-crowdfunding-nine.vercel.app/",
          icon: LanguageIcon,
        },
        {
          link: "https://github.com/salmanfazal01/web3-crowdfunding",
          icon: GitHubIcon,
        },
      ],
    },
    {
      tag: "React",
      images: [...portfolioImages.react.nft],
      title: "NFT Marketplace",
      caption: "NFT Marketplace",
      description:
        "(Turn on full screen view for these images)\n\nThis app is still under development. You can track my progress on my LinkedIn activity.\nWhilst learning web3 programming using Moralis, I chose to build a complete NFT marketplace. The UI is almost complete and the backend features are now being developed.\n\nTechnologies used:\n• Front-end => ReactJS and Material UI.\n• Back-end => Moralis, Metamask Authentication and Firebase.",
      links: [
        {
          link: "https://nft-marketplace-kohl.vercel.app/",
          icon: LanguageIcon,
        },
        {
          link: "https://github.com/salmanfazal01/nft-marketplace",
          icon: GitHubIcon,
        },
      ],
    },
    {
      tag: "React",
      images: [...portfolioImages.react.forexlens],
      title: "ForexLens",
      caption: "ForexLens Portal",
      description:
        "This project was with ForexLens that includes features and services for Forex and crypto education, signals and portfolio management.\n\nTechnologies used:\n• ReactJS\n• Redux\n• Material UI\n• Firebase",
      links: [{ link: "https://portal.forexlens.com/", icon: LanguageIcon }],
    },
    {
      tag: "React",
      images: [...portfolioImages.react.receipts],
      title: "Web3 Receipts",
      caption: "Company registration + receipts",
      description:
        "I've created a mini company registration and receipt system dApp. I developed a system where companies can register themselves and wait for an authorized admin to approve their registration. Once approved, they can issue receipts on sales, all authenticated using Metamask.\n\nTechnologies used:\n• Reactjs and Material-UI as my design library.\n• Solidity to write the smart contract\n• Thirdweb to deploy, test and interact with the smart contract, and also for Metamask authenticaion.",
      links: [
        {
          link: "https://web3-receipts-registration.vercel.app/",
          icon: LanguageIcon,
        },
        {
          link: "https://github.com/salmanfazal01/web3-receipts",
          icon: GitHubIcon,
        },
        {
          link: "https://youtu.be/wpg08Bx2Z7Y",
          icon: YouTubeIcon,
        },
      ],
    },
    {
      tag: "React",
      images: [...portfolioImages.react.rightdrive],
      title: "Right Drive",
      caption: "Right Drive ca",
      description:
        "Right Drive is a car dealership based in Ontario. This website is their official landing and inventory page. I had created this project alongside a UI designer at my time at YourFuse inc. \n\nTechnologies used:\n• ReactJS\n• Material UI\n• Firebase",
      links: [{ link: "https://www.rightdrive.ca/", icon: LanguageIcon }],
    },
    {
      tag: "React",
      images: [...portfolioImages.react.positionsize],
      title: "Position Sizing",
      caption: "Trading position size calculator",
      description:
        "A position size calculator web-app for the Forex and Crypto markets.\nThis website gets a daily average traffic of 40-60 users.\n\nTechnologies used:\n• Next JS\n• Material UI",
      links: [{ link: "https://positionsize.web.app/", icon: LanguageIcon }],
    },

    {
      tag: "React",
      images: [...portfolioImages.react.shakepay],
      title: "Shakepay",
      caption: "Shakepay Landing Page",
      description:
        "Quick little project where I created a crypto company landing page by cloning the Shakepay's official website.\n\nTechnologies used:\n• Next JS\n• Material UI\n• Coingecko API\n• React Reveal",
      links: [
        { link: "https://react-shakepay.vercel.app/", icon: LanguageIcon },
        {
          link: "https://github.com/salmanfazal01/react-shakepay",
          icon: GitHubIcon,
        },
      ],
    },

    {
      tag: "React",
      images: [...portfolioImages.react.windows11],
      title: "Windows 11",
      caption: "Windows 11 UI clone",
      description:
        "In just under 2 hours, we will build a Windows 11 UI clone using NextJS, MaterialUI for the design library and ReactDND for the drag and drop feature.",
      links: [
        {
          link: "https://windows-11-clone-gamma.vercel.app/",
          icon: LanguageIcon,
        },
        {
          link: "https://github.com/salmanfazal01/windows-11-clone",
          icon: GitHubIcon,
        },
        {
          link: "https://youtu.be/6MAq2kQkugI",
          icon: YouTubeIcon,
        },
      ],
    },

    {
      tag: "React",
      images: [...portfolioImages.react.portfolio],
      title: "Personal Landing Page",
      caption: "Personal Portfolio Landing Page",
      description:
        "An open source project I built over the weekend for anyone that wants to create their portfolio landing page.\n\nThe UI idea is from the highest viewed portfolio design on Dribbble and the code is built using NextJS, MaterialUI v5 and React-Reveal (for animations).",
      links: [
        {
          link: "https://next-portfolio-one-nu.vercel.app/",
          icon: LanguageIcon,
        },
        {
          link: "https://github.com/salmanfazal01/next-portfolio",
          icon: GitHubIcon,
        },
      ],
    },

    {
      tag: "React",
      images: [...portfolioImages.react.boilerplate],
      title: "NextJS Boilerplate",
      caption: "NextJS Boiletplate with Firebase",
      description:
        "A Next JS starter boilerplate utilizing common and latest NPM packages like Material UI v5 and Firebase v9, with common functionalities, i.e;\n- Theming\n- Localization\n- Authentication\n- Database\n- Admin Tools\n\nTechnologies used:\n• Next JS\n• Material UI",
      links: [
        {
          link: "https://github.com/salmanfazal01/next-boilerplate",
          icon: GitHubIcon,
        },
      ],
    },

    {
      tag: "React",
      images: [...portfolioImages.react.airbnb],
      title: "Airbnb",
      caption: "Airbnb UI Clone",
      description:
        "Homepage UI of the official Airbnb website, including the dates dopdown using an external library.\n\nTechnologies used:\n• ReactJS",
      links: [
        {
          link: "https://github.com/salmanfazal01/react-airbnb-clone",
          icon: LanguageIcon,
        },
      ],
    },

    {
      tag: "React",
      images: [...portfolioImages.react.alanai],
      title: "Alan AI",
      caption: "Alan AI News App",
      description:
        "React web-app that utilizes Alan AI's API to integrate voice feature where one can search and speak to the website, like SIRI.\n\nTechnologies used:\n• ReactJS\n• Alan AI Api",
      links: [
        {
          link: "https://github.com/salmanfazal01/react-alan-ai-news",
          icon: GitHubIcon,
        },
      ],
    },

    {
      tag: "React",
      images: [...portfolioImages.react.google],
      title: "Google Search",
      caption: "Full Google Search Clone",
      description:
        "Styled clone of the Google.com Homepage and web search page.\n\nTechnologies used:\n• ReactJS\n• Material UI\n• Google Search API",
      links: [
        {
          link: "https://github.com/salmanfazal01/react-google-clone",
          icon: GitHubIcon,
        },
      ],
    },

    {
      tag: "React",
      images: [...portfolioImages.react.resume],
      title: "Resume Website",
      caption: "This Resume Tutorial Series",
      description:
        "Recorded a YouTube playlist where I teach how to build this exact resume website from scratch.\n\nTechnologies used:\n• ReactJS\n• Material UI\n• Bootstrap\n• Firebase",
      links: [
        {
          link: "https://www.youtube.com/playlist?list=PLISG6SSQ9nqyuuTjr2cDApJlY9-K3jrn1",
          icon: YouTubeIcon,
        },
      ],
    },

    {
      tag: "React",
      images: [...portfolioImages.react.projectsmern],
      title: "MERN Projects App",
      caption: "MERN Stack Tutorial Series",
      description:
        "I created a full MERN stack tutorial on Youtube from request of some viewers.\n\nTechnologies used:\n• ReactJS\n• Material UI\n• NodeJS\n• Express\n• MongoDB",
      links: [
        {
          link: "https://youtube.com/playlist?list=PLISG6SSQ9nqytPpYmpvt6r9m_vDi_f_ww",
          icon: YouTubeIcon,
        },
      ],
    },

    {
      tag: "React",
      images: [...portfolioImages.react.slack],
      title: "Slack",
      caption: "Full Slack Webapp Clone",
      description:
        "Clone of the web verion of the Slack app, with the ability to create channels and send chats.\n\nTechnologies used:\n• ReactJS\n• Material UI\n• Firebase",
      links: [
        {
          link: "https://github.com/salmanfazal01/react-slack-clone",
          icon: GitHubIcon,
        },
      ],
    },

    {
      tag: "React",
      images: [...portfolioImages.react.productlanding],
      title: "Landing Page",
      caption: "Product Landing Page",
      description:
        "Fully responsive product landing page built purely using ReactJS and Material-UI.\n\nDesign idea taken from Dribbble.",
      links: [
        {
          link: "https://github.com/salmanfazal01/product-landing-page",
          icon: GitHubIcon,
        },
        {
          link: "https://product-landing-page-cd4c2.web.app/",
          icon: LanguageIcon,
        },
      ],
    },

    {
      tag: "React",
      images: [...portfolioImages.react.tinder],
      title: "Tinder",
      caption: "Tinder Webapp Clone",
      description:
        "Tinder clone on a webite where one can swipe cards using an external library and send private messages.",
      links: [
        {
          link: "https://github.com/salmanfazal01/react-tinder-clone",
          icon: GitHubIcon,
        },
      ],
    },

    {
      tag: "React",
      images: [...portfolioImages.react.corona],
      title: "Covid Tracker",
      caption: "Covid-19 Live Tracker",
      description:
        "A Coronavirus dashboard that tracks live data from Mathdro API and displays it using the ChartJS library.\n\nTechnologies used:\n• ReactJS\n• Material UI\n• Mathdro API\n• ChartJS 2",
      links: [
        {
          link: "https://github.com/salmanfazal01/react-coronavirus",
          icon: GitHubIcon,
        },
      ],
    },

    {
      tag: "React",
      images: [...portfolioImages.react.chatroom],
      title: "Chatroom",
      caption: "React Chatroom",
      description:
        "Created a simple chatroom application when learning ReactJS, uses materail UI for the front-end and stores data on a local state.",
      links: [],
    },

    {
      tag: "React Native",
      images: [...portfolioImages.reactNative.bookworm],
      title: "Book Worm",
      caption: "Book Worm App",
      description:
        "React Native Book Worm App as part of learning React Native.\n\nUtilized React Navigation, Redux and Firebase for authentication and database.",
      links: [
        {
          link: "https://github.com/salmanfazal01/react-native-book-worm",
          icon: GitHubIcon,
        },
      ],
    },

    {
      tag: "React Native",
      images: [...portfolioImages.reactNative.whatsapp],
      title: "Whatsapp UI",
      caption: "Whatsapp UI Clone",
      description:
        "Developed a React Native UI similar to the Whatsapp application. All the names, images and chats come dummy data.\nThis was my first project implementing TypeScript.\n\nThe next step to improve this app is integrating Firebase into it.",
      links: [
        {
          link: "https://github.com/salmanfazal01/whatsappClone",
          icon: GitHubIcon,
        },
      ],
    },

    {
      tag: "Java",
      images: [...portfolioImages.java.backtester],
      title: "Backtester",
      caption: "Trading Backtester",
      description:
        "The only free and advanced backtesting tool in the market that includes all features required to place and modify orders.\nBuilt on top of the JForex platform and uses historical data from the Dukascopy broker. Currently shared and tested with over 300 users on Twitter alone. \n\nTechnologies used:\n• Java\n• JForex API",
      links: [
        {
          link: "https://twitter.com/Nephew_Sam_/status/1340811070886326272?s=20",
          icon: TwitterIcon,
        },
      ],
    },

    {
      tag: "Java",
      images: [...portfolioImages.java.schoolmanagement],
      title: "School Management",
      caption: "School Management Desktop App",
      description:
        "This was my absolute first application I created during my time in Aptech college where I hit the highest score in the college history with a 96% mark.\n\nThe UI is implemented using Java Swing and I used a local SQL database to store the application data.",
      links: [
        {
          link: "https://youtu.be/xkZhMNRl2Fc",
          icon: YouTubeIcon,
        },
      ],
    },

    {
      tag: "Java",
      images: [...portfolioImages.java.stockinventory],
      title: "Inventory System",
      caption: "Stock Inventory CRM",
      description:
        "Given a case study for my Software Engineering module, I created a Stock Management desktop application using the Java programming language. I implemented the MVC design pattern to structure my code.\n\nTechnologies used:\n• Java / JavaFX\n•MS SQL Server",
      links: [],
    },

    {
      tag: "Java",
      images: [...portfolioImages.java.skibooking],
      title: "Ski Resort Booking",
      caption: "Ski Booking CRM",
      description:
        "I created this Java application from a given case study during my second year in university. During the project span, I learnt JavaFX from scratch in a matter of 2 weeks in order to create the UI. \n\nTechnologies used:\n• Java / JavaFX\n•MS SQL Server",
      links: [],
    },

    {
      tag: "Web",
      images: [...portfolioImages.web.journal],
      title: "Trading Journal",
      caption: "Trading Journal",
      description:
        "A web-based trading journal specifically for the crypto space/\n• Effortlessly Record journal on a modern UI web-app instead of an excel worksheet.\n• Statistics such as time-based win ratios, fiat and BTC portfolio change and more.\n• Simplified calculators that help users in their daily trading activity.\n• Application is entirely coded on my own using HTML/CSS, Bootstrap, JavaScript for the front-end. NodeJS for the back-end and a cloud-based MongoDB Database.",
      links: [],
    },

    {
      tag: "Web",
      images: [...portfolioImages.web.tra],
      title: "Trading Platform",
      caption: "Crypto Trading Platform",
      description:
        "Developed a trading platform similar to 3Commas that brings all major exchanges under one roof whilst also adding advanced algorithmic features that are not offered by these exchanges.",
      links: [],
    },

    {
      tag: "Web",
      images: [...portfolioImages.web.resume],
      title: "Resume Builder",
      caption: "Resume and Portfolio Builder",
      description:
        "I created this website for my Website Development module at University where I implemented both; the front-end and the back-end on my own. \n\nTechnologies used:\n• Front-end => HTML, CSS and Bootstrap.\n• Back-end => NodeJS.\n• Database => MongoDB on mLab.com",
      links: [],
    },

    {
      tag: "React",
      images: [...portfolioImages.react.hydra],
      title: "Mass Emailer",
      caption: "Gmail Bulk Email Sender",
      description:
        "Built this project for ForexLens that uses a Node library Puppeteer on Chromium browser to send mass emails on the Gmail platform.\nThe code belongs to ForexLens so cannot be shared.",
      links: [],
    },

    {
      tag: "Solidity",
      images: [...portfolioImages.solidity.fortunate],
      title: "Fortunate",
      caption: "ERC-20 Cryptocurrency",
      description:
        'My final year dissertation was titled "using blockchain technology to abate the rate of hunger in the UK" where I discussed the implications of blockchain technology and cryptocurrencies on the homeless. \n\nI also took the time to learn Ethereums Solidity language to create an ERC20 token called "Fortunate" which had the funtionalities to buy (crowdsale) and transfer tokens. \n\nTechnologies used:\n• Front-end => Bootsrap, HTML, JavaScript.\n• Back-end => NodeJS, Solidity.\n• Tests => Truffle (on the Ganache testnet environment).',
      links: [
        {
          link: "https://github.coventry.ac.uk/samfaz01/Fortunate",
          icon: GitHubIcon,
        },
      ],
    },

    {
      tag: "TradingView",
      images: [...portfolioImages.tradingview.orderblocks],
      title: "Orderblocks",
      caption: "ICT Orderblocks Indicator",
      description:
        "An indicator on tradingview that highlight zones that are famously known as 'Orderblocks' by ICT. There are very few OB indicators out there but none work as effeciently as this one.\n\nOptions:\n1. Select 3/5 bar fractal\n2. Plot lines and labels on OB's\n- Ability to filter OB only when a candle is fully engulfed\n3. Change bar color of engulfed candles",
      links: [],
    },

    {
      tag: "TradingView",
      images: [...portfolioImages.tradingview.supplydemand],
      title: "Supply & Demand",
      caption: "Supply and Demand Indicator",
      description:
        "Supply and Demand indicator based on Boring and Explosive candles.",
      links: [],
    },

    {
      tag: "TradingView",
      images: [...portfolioImages.tradingview.stophunt],
      title: "Stop Hunts",
      caption: "Stop Hunts Indicator",
      description:
        "Finds and plots stop hunts / raids between fractal points.\nIf a candle wicks above/below a fractal and close back in its range, it will plot a line and/or dot based on preference.\nAlso able to filter a time period, meaning it will only plot if the stop hunt happened inside the time period.\n\nOther options:\n- Draw fractal points\n- Choose between 3 or 5 bar fractal\n- Set how far back you want to check for a stop hunt\n- Change line color",
      links: [],
    },

    {
      tag: "TradingView",
      images: [...portfolioImages.tradingview.range],
      title: "Range Box",
      caption: "Time-based Range Box",
      description:
        "Creates a box around a specified time range with the ability to extend the lines to a later time.\n\nOther Options:\n- Background in box\n- Remove historical boxes\n- Extend lines in future instead of only till current price",
      links: [],
    },

    {
      tag: "TradingView",
      images: [...portfolioImages.tradingview.marketstructure],
      title: "Market Structure",
      caption: "Market Structure Indicator",
      description:
        "This indicator consists of 3 features:\n1. Plots label to the right for current market structur\n2. Plots dashed line to show where the next market structure would b\n3. Draws arrows above/below historical market structure break \n\nCredits to @SimpleCryptoLife for the source code\nThis script is take from the indicator 'True Market Structure' which is created by the above mentioned user",
      links: [],
    },

    {
      tag: "TradingView",
      images: [...portfolioImages.tradingview.fractals],
      title: "Fractals",
      caption: "Fractals Indicator",
      description:
        "Plots regular and Williams fractal. \n1. Plots 3 and 5 bar fractal poin. \n2. Plots significant highs/lows lines",
      links: [],
    },

    {
      tag: "TradingView",
      images: [...portfolioImages.tradingview.levels],
      title: "Levels",
      caption: "Price Levels Indicator",
      description:
        "This indicator plots different price levels. \n\n1. Plots Asian Range based on time provided\n- option to extend line to end of day\n- option to fill range with background\n\n2. Plots significant highs/low using fractals\n\n3. Plot Daily/Weekly/Monthly OHLC",
      links: [],
    },

    {
      tag: "TradingView",
      images: [...portfolioImages.tradingview.sessions],
      title: "Sessions",
      caption: "Time Sessions Indicator",
      description:
        "Indicator combines the 3;\n1. 3 Sessions - with an option to set your own times\n2. 4 Killzones- with an option to set your own times\n3. Daily Dividers",
      links: [],
    },

    {
      tag: "TradingView",
      images: [...portfolioImages.tradingview.fvg],
      title: "FVG",
      caption: "Fair Value Gaps Indicator",
      description:
        "Plots fair value gaps or imbalances on the charts.\n\nImbalances are a skip in liquidity, zones where prices move quickly away from, which causes orders to not be fully filled in there. Think of it as weekend gaps, but during trading hours.\n\nSettings:\n1. Line Length - length of plotted lines\n2. Delete Lines - Delete lines after FVG is filled\n3. Fill Option - is fill candle close above/below fvg or if candle wick touches end of fvg.\n4. Color - change color of FVG bull and bear lines",
      links: [],
    },

    {
      tag: "TradingView",
      images: [...portfolioImages.tradingview.smt],
      title: "SMT Divergence",
      caption: "Smart Money Divergence",
      description:
        "Concept taught by ICT that plots divergence between correlated pairs.\n\nIe. EURUSD - XAUUSD - DX\nNJDJPY - AUDJPY - NZD Inde\nXAU - XA\nUSOIL - UKOI\nBTCUSD - ALTPERP",
      links: [],
    },
  ],
};
