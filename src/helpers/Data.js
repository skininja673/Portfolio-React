import Proj1 from '../assets/proj1.jpg';
import Proj2 from '../assets/proj2.jpg';
import Proj3 from '../assets/proj3.jpg';
import Proj4 from '../assets/proj4.jpg';
import Proj5 from '../assets/proj5.jpg';
import Proj6 from '../assets/proj6.jpg';
import Proj7 from '../assets/proj7.jpg';
import junoClg from '../assets/junoClg.jpg';
import yorkUni from '../assets/yorkUni.jpg';
import humberClg from '../assets/humberClg.jpg';
import morganStanley from '../assets/morganStanley.jpg';
import aps from '../assets/aps.jpg';
import mcDonald from '../assets/mcDonald.jpg';
import apiIcon from '../assets/apiIcon.png';
import codeIcon from '../assets/codeIcon.png';
import backIcon from '../assets/backIcon.png';
import {
    IoLogoHtml5 as HtmlIcon,
    IoLogoCss3 as CssIcon,
    IoLogoJavascript as JavascriptIcon,
    IoLogoSass as SassIcon,
    IoLogoReact as ReactIcon,
    // IoLogoFirebase as FirebaseIcon,
    IoLogoGithub as GithubIcon,
    // IoAccessibility as AccessibilityIcon,
    IoCallSharp as CallIcon,
    IoCalendarNumber as CalendarIcon,
    IoLogoLinkedin as LinkedinIcon,
    IoMail as MailIcon,
    IoSchoolOutline as SchoolIcon,
    IoCaretDownSharp as DownIcon,
    IoCaretUpSharp as UpIcon,
} from 'react-icons/io5';
import { MdOutlineWorkOutline as WorkIcon } from 'react-icons/md';
import {
    SiMysql as SqlIcon,
    SiStyledcomponents as StyledIcon,
    SiContentful as ContentfulIcon,
} from 'react-icons/si';

// --my raw  information-------
const aboutMe = {
    myName: {
        firstName: 'Akalpit',
        lastName: 'Sharma',
        nickName: 'AL',
        fullName: function () {
            return `${this.firstName} ${this.lastName}`;
        },
    },
    myPhone: {
        phoneNumber: '(581) 397-7738',
        icon: <CallIcon />,
    },
    myEmail: {
        email: 'sharma.akalpit@gmail.com',
        icon: <MailIcon />,
    },
    myCalendly: {
        calendlyLink: 'https://calendly.com/akalpit',
        icon: <CalendarIcon />,
    },
};

//---my info rendered on web pages----------
export const myInfo = {
    UpIcon,
    DownIcon,
    firstName: `${aboutMe.myName.firstName}`,
    fullName: `${aboutMe.myName.fullName()}`,
    heading: `Hi,  i'm ${aboutMe.myName.firstName}`,
    title: 'A Frontend Web Developer with a passion for learning and creating',
    introduction: function () {
        return `I'm ${aboutMe.myName.fullName()}, a Front End Web Developer with a Computer Science degree from York University and a Web Development Certificate from Juno College of Technology. I am a hardworking and innovative thinker who loves creating user-friendly, responsive, clean, engaging and accessible applications. I bring strong communication and interpersonal skills to every team that I work with. When I am not coding, I enjoy watching foreign movies and listen to music. I also enjoy hopping on my bike and go for a long ride. You can catch me with a cup of coffee glued to a mobile at times!`;
    },
    autoTypeSkills: ['Tech Savvy !', 'CS Graduate !'],
    primaryContact: [
        {
            id: 1,
            type: 'phone',
            icon: aboutMe.myPhone.icon,
            data: aboutMe.myPhone.phoneNumber,
        },
        {
            id: 2,
            type: 'email',
            icon: aboutMe.myEmail.icon,
            data: aboutMe.myEmail.email,
        },
    ],
    skills: [
        { id: 1, name: 'html', icon: <HtmlIcon /> },
        { id: 2, name: 'css', icon: <CssIcon /> },
        { id: 3, name: 'java script', icon: <JavascriptIcon /> },
        { id: 4, name: 'sass', icon: <SassIcon /> },
        { id: 5, name: 'react', icon: <ReactIcon /> },
        { id: 6, name: 'git', icon: <GithubIcon /> },
        // { id: 7, name: 'firebase', icon: <FirebaseIcon /> },
        // { id: 8, name: 'accessibility', icon: <AccessibilityIcon /> },
        { id: 11, name: 'contentful cms', icon: <ContentfulIcon /> },
        { id: 9, name: 'SQL', icon: <SqlIcon /> },
        { id: 10, name: 'styled components', icon: <StyledIcon /> },
    ],
    socialLinks: [
        {
            id: 1,
            name: 'linkedin',
            link: 'https://www.linkedin.com/in/akalpit-sharma/',
            icon: <LinkedinIcon />,
        },
        {
            id: 2,
            name: 'github',
            link: 'https://github.com/skininja673',
            icon: <GithubIcon />,
        },
        {
            id: 3,
            name: 'email',
            link: `mailto: ${aboutMe.myEmail.email}`,
            icon: <MailIcon />,
        },
        {
            id: 4,
            name: 'calendly',
            link: 'https://calendly.com/akalpit',
            icon: <CalendarIcon />,
        },
    ],
    timeline: [
        {
            id: 1,
            name: 'aps immigration',
            companySite: 'https://www.facebook.com/apsimmigration',
            image: aps,
            year: 'Current',
            tag: 'employee',
            icon: <WorkIcon />,
            title: 'volunteer job',
            about: [
                'Supporting senior front-end web developers with everyday tasks like the creation of webpages and updating existing web applications.',
                'Collaborating with the development team by utilizing the knowledge of HTML, CSS, JavaScript and React to create a dynamic and responsive user interface.',
                'Organize client’s data, making calls and scheduling appointment.',
            ],
        },
        {
            id: 2,
            name: 'juno college',
            site: 'https://junocollege.com/bootcamp/web-development-toronto/',
            image: junoClg,
            about: 'Graduated in Immersive Frontend Web Development bootcamp maintaing gpa of approx 4.0 throughout. ',
            title: 'immersive frontend web development bootcamp',
            year: 'Graduated 2022',
            tag: 'student',
            icon: <SchoolIcon />,
            companySite: 'https://junocollege.com/',
        },
        {
            id: 3,
            name: 'morgan stanley',
            companySite: 'https://www.morganstanley.ca/',
            image: morganStanley,
            about: [
                'Supporting and monitoring application that acts as the central database repository that stores fixed income distributed sales trades that handle manual and electronic cash, credit, and interest rate derivative trades. This helps keep the system’s uptime.',
                'Handling the user request for extracting data from the database using SQL queries. This helps users with data analysis.',
                'Monitored underline hardware infrastructure alerts and AutoSys jobs for setting up and transferring feed files of clients from one team to the other as an upstream data source.',
                'Acted as the primary point of contact in providing Level 2 support for production issues in North American time zone. This helps other IT teams and users (Salespeople/sales assistants / Traders) to resolve their queries in a timely manner.',
                "This role required skills such as Linux command line, Python scripting, and scheduling tools like Autosys, and SQL to query database various databases, ticketing tools like ServiceNow and use Morgan Stanley's internal monitoring tool (Sockeye) to monitor the alerts (database alerts, infrastructure alerts, Autosys job failure).",
                'Diagnose and coordinate root cause analysis and problem-prevention efforts. This helps system improvement and improves the system’s reliability.',
            ],
            year: 'April 2021 - November 2021',
            tag: 'employee',
            icon: <WorkIcon />,
            title: 'application support analyst',
        },
        {
            id: 4,
            name: 'york university',
            site: 'https://futurestudents.yorku.ca/program/computer-science',
            image: yorkUni,
            about: 'Graduated in Bachelor of Computer Science maintaining gpa of approx 3.3 throughout.',
            year: 'Graduated 2020',
            tag: 'student',
            icon: <SchoolIcon />,
            title: 'bachelor in computer science',
            companySite: 'https://www.yorku.ca/',
        },
        {
            id: 5,
            name: 'humber college',
            site: 'https://appliedtechnology.humber.ca/programs/computer-systems-technician-information-technology-infrastructure-and-services.html',
            image: humberClg,
            about: 'Graduated in Computer Support Technician program maintaining 3.5 gpa throughout.',
            year: 'Graduated 2013',
            tag: 'student',
            icon: <SchoolIcon />,
            title: 'computer support technician',
            companySite: 'https://www.humber.ca/',
        },
        {
            id: 6,
            name: 'mc donalds',
            companySite: 'https://www.mcdonalds.com/ca/en-ca.html',
            image: mcDonald,
            year: '2008 - 2019',
            tag: 'employee',
            about: [
                'Trained workers in food preparation, money handling and cleaning roles to facilitate restaurant operations.',
                'Collaborated with trainees in the understanding of project management, safety and inventory waste.',
                "Ensured compliance with all quality standards, guidelines and principles of McDonald's.",
            ],
            icon: <WorkIcon />,
            title: 'crew trainer',
        },
    ],
};

export const myProjects = {
    projectsIntro:
        'Welcome to my projects page! I enjoy coding in React, Javascript, HTML and CSS, and am consistently upgrading my skills to tackle more complex problems. You are welcome to view the code and any comments or suggestions are highly appreciated 🙏',

    codeIcon: codeIcon,
    apiIcon: apiIcon,
    backIcon: backIcon,

    projectList: [
        {
            id: 1,
            name: 'Digital Society Lab',
            image: Proj7,
            skills: 'Html, Sass, React, Contentful',
            liveLink: 'https://dslproject-al-feature-branch.netlify.app/',
            codeLink:
                'https://github.com/DSL-Project/dsl-project/tree/al-feature-branch',
            dataSource: 'https://www.contentful.com/',
            about: 'Designed and developed an interactive, user-friendly, and dynamic website for McMaster University’s Digital Society Lab using React and CSS3 / SCSS',
        },
        {
            id: 2,
            name: 'Find Me a Meal',
            image: Proj1,
            skills: 'JavaScript,HTML,SASS',
            liveLink: 'https://find-me-a-meal.netlify.app/',
            codeLink: 'https://github.com/findMeAMealApp/Project2-FindMeAMeal',
            dataSource: 'https://www.themealdb.com/api.php',
            about: 'This is a Java Script app, in which third party mealdb-api is used to fetch data, and user can search his favorite meal',
        },
        {
            id: 3,
            name: 'Search Your Favorite Cocktail',
            image: Proj2,
            skills: 'HTML, CSS, React,',
            liveLink: 'https://cocktail-main.netlify.app/',
            codeLink: 'https://github.com/skininja673/Project3-Cocktail',
            dataSource: 'https://www.thecocktaildb.com/api.php',
            about: 'This is a React app, in which third party cocktaildb-api is used to fetch data, and user can search his favorite cocktail',
        },
        // {
        //     id: 4,
        //     name: 'Color Generator App',
        //     image: Proj3,
        //     skills: 'HTML, CSS, React',
        //     liveLink: 'https://boisterous-kataifi-ff43c6.netlify.app/',
        //     codeLink: 'https://github.com/skininja673/color-generator-app',
        //     dataSource: 'https://github.com/noeldelgado/values.js',
        //     about: 'This is a React app, where user can choose different color and shades. The data is coming from Values.js library',
        // },
        // {
        //     id: 5,
        //     name: 'Sidebar & Modal',
        //     image: Proj4,
        //     skills: 'HTML, CSS, React',
        //     liveLink: 'https://silly-rabanadas-de5545.netlify.app/',
        //     codeLink: 'https://github.com/skininja673/sidebar-modal',
        //     dataSource: '',
        //     about: 'This is a React app, its a very common UI seen in many websites',
        // },
        // {
        //     id: 6,
        //     name: 'Slider App',
        //     image: Proj5,
        //     skills: 'HTML, CSS, React',
        //     liveLink: 'https://frabjous-zuccutto-a14ec4.netlify.app/',
        //     codeLink: 'https://github.com/skininja673/sliderApp',
        //     dataSource: '',
        //     about: 'This is a React app, its a slider and it changes in every 2 second',
        // },
        // {
        //     id: 7,
        //     name: 'Todo App',
        //     image: Proj6,
        //     skills: 'React, JavaScript, HTML, CSS',
        //     liveLink: 'https://golden-eclair-7f9d75.netlify.app/',
        //     codeLink: 'https://github.com/skininja673/GroceryBud',
        //     dataSource: '',
        //     about: 'This is a list, where user can add/delete/edit items in list. This is a React project',
        // },
    ],
};
