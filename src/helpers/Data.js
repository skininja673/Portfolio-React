import Proj1 from '../assets/proj1.jpg';
import Proj2 from '../assets/proj2.jpg';
import Proj3 from '../assets/proj3.jpg';
import Proj4 from '../assets/proj4.jpg';
import Proj5 from '../assets/proj5.jpg';
import Proj6 from '../assets/proj6.jpg';
import pic from '../assets/pic.jpeg';
import junoClg from '../assets/junoClg.jpg';
import yorkUni from '../assets/yorkUni.jpg';
import humberClg from '../assets/humberClg.jpg';
import {
    IoLogoHtml5,
    IoLogoCss3,
    IoLogoJavascript,
    IoLogoSass,
    IoLogoReact,
    IoLogoFirebase,
    IoLogoGithub,
    IoAccessibility,
    IoCallSharp,
    IoCalendarNumber,
    IoLogoLinkedin,
    IoMail,
} from 'react-icons/io5';

// --my raw  information-------
const aboutMe = {
    myName: {
        firstName: 'Ankit',
        lastName: 'Saxena',
        nickName: 'AL',
        fullName: function () {
            return `${this.firstName} ${this.lastName}`;
        },
    },
    myPhone: {
        phoneNumber: '(581) 397-7738',
        icon: <IoCallSharp />,
    },
    myEmail: {
        email: 'sharma.akalpit@gmail.com',
        icon: <IoMail />,
    },
    myCalendly: {
        calendlyLink: 'https://calendly.com/akalpit',
        icon: <IoCalendarNumber />,
    },
};

//---my info rendered on web pages----------
export const myInfo = {
    firstName: `${aboutMe.myName.firstName}`,
    fullName: `${aboutMe.myName.fullName()}`,
    heading: `Hi my name is ${aboutMe.myName.firstName}`,
    title: 'A Frontend Web Developer with a passion for learning and creating',
    introduction: function () {
        return `I'm ${aboutMe.myName.fullName()}, a Front End Web Developer with a Computer Science degree from York University and a Web Development Certificate from Juno College of Technology. I am a hardworking and innovative thinker who loves creating user-friendly, responsive, clean, engaging and accessible applications. I bring strong communication and interpersonal skills to every team that I work with. When I am not coding, I enjoy watching foreign movies and listen to music. I also enjoy hopping on my bike and go for a long ride. You can catch me with a cup of coffee glued to a mobile at times!`;
    },
    pic: aboutMe.myPic,
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
        { id: 1, name: 'html', icon: <IoLogoHtml5 /> },
        { id: 2, name: 'css', icon: <IoLogoCss3 /> },
        { id: 3, name: 'java script', icon: <IoLogoJavascript /> },
        { id: 4, name: 'sass', icon: <IoLogoSass /> },
        { id: 5, name: 'react', icon: <IoLogoReact /> },
        { id: 6, name: 'git', icon: <IoLogoGithub /> },
        { id: 7, name: 'firebase', icon: <IoLogoFirebase /> },
        { id: 8, name: 'accessibility', icon: <IoAccessibility /> },
    ],
    socialLinks: [
        {
            id: 1,
            name: 'linkedin',
            link: 'https://www.linkedin.com/in/akalpit-sharma/',
            icon: <IoLogoLinkedin />,
        },
        {
            id: 2,
            name: 'github',
            link: 'https://github.com/skininja673?tab=repositories',
            icon: <IoLogoGithub />,
        },
        {
            id: 3,
            name: 'email',
            link: `mailto: ${aboutMe.myEmail.email}`,
            icon: <IoMail />,
        },
        {
            id: 4,
            name: 'calendly',
            link: 'https://calendly.com/akalpit',
            icon: <IoCalendarNumber />,
        },
    ],
    colleges: [
        {
            id: 1,
            clgName: 'juno college',
            clgSite: 'https://junocollege.com',
            image: junoClg,
        },
        {
            id: 2,
            clgName: 'york university',
            clgSite: 'https://www.yorku.ca/',
            image: yorkUni,
        },
        {
            id: 3,
            clgName: 'humber college',
            clgSite: 'https://humber.ca/',
            image: humberClg,
        },
    ],
};

export const myProjects = {
    projectsIntro:
        'Welcome to my projects page! I enjoy coding in React, Javascript, HTML and CSS, and am consistently upgrading my skills to tackle more complex problems. You are welcome to view the code and any comments or suggestions are highly appreciated 🙏',

    projectList: [
        {
            id: 1,
            name: 'Find Me a Meal',
            image: Proj1,
            skills: 'JavaScript,HTML,SASS',
            liveLink: 'https://find-me-a-meal.netlify.app/',
            codeLink: 'https://github.com/findMeAMealApp/Project2-FindMeAMeal',
            dataSource: 'https://www.themealdb.com/api.php',
            about: 'This is a Java Script app, in which third party mealdb-api is used to fetch data, and user can search his favorite meal',
        },
        {
            id: 2,
            name: 'Search Your Favorite Cocktail',
            image: Proj2,
            skills: 'HTML, CSS, React,',
            liveLink: 'https://cocktail-main.netlify.app/',
            codeLink: 'https://github.com/skininja673/Project3-Cocktail',
            dataSource: 'https://www.thecocktaildb.com/api.php',
            about: 'This is a React app, in which third party cocktaildb-api is used to fetch data, and user can search his favorite cocktail',
        },
        {
            id: 3,
            name: 'Color Generator App',
            image: Proj3,
            skills: 'HTML, CSS, React',
            liveLink: 'https://boisterous-kataifi-ff43c6.netlify.app/',
            codeLink: 'https://github.com/skininja673/color-generator-app',
            dataSource: 'https://github.com/noeldelgado/values.js',
            about: 'This is a React app, where user can choose different color and shades. The data is coming from Values.js library',
        },
        {
            id: 4,
            name: 'Sidebar & Modal',
            image: Proj4,
            skills: 'HTML, CSS, React',
            liveLink: 'https://silly-rabanadas-de5545.netlify.app/',
            codeLink: 'https://github.com/skininja673/sidebar-modal',
            dataSource: '',
            about: 'This is a React app, its a very common UI seen in many websites',
        },
        {
            id: 5,
            name: 'Slider App',
            image: Proj5,
            skills: 'HTML, CSS, React',
            liveLink: 'https://frabjous-zuccutto-a14ec4.netlify.app/',
            codeLink: 'https://github.com/skininja673/sliderApp',
            dataSource: '',
            about: 'This is a React app, its a slider and it changes in every 2 second',
        },
        {
            id: 6,
            name: 'Todo App',
            image: Proj6,
            skills: 'React, JavaScript, HTML, CSS',
            liveLink: 'https://golden-eclair-7f9d75.netlify.app/',
            codeLink: 'https://github.com/skininja673/GroceryBud',
            dataSource: '',
            about: 'This is a list, where user can add/delete/edit items in list. This is a React project',
        },
    ],
};
