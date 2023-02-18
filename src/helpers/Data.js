import Proj1 from '../assets/proj1.jpg';
import Proj2 from '../assets/proj2.jpg';
import Proj3 from '../assets/proj3.jpg';
import Proj4 from '../assets/proj4.jpg';
import Proj5 from '../assets/proj5.jpg';
import Proj6 from '../assets/proj6.jpg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import { CalendarToday } from '@material-ui/icons';

export const ProjectList = [
    {
        id: 1,
        name: 'Find Me a Meal',
        image: Proj1,
        skills: 'JavaScript,HTML,SASS',
        liveLink: 'https://find-me-a-meal.netlify.app/',
        codeLink: 'https://github.com/findMeAMealApp/Project2-FindMeAMeal',
        about: 'This is a Java Script app, in which third party mealdb-api is used to fetch data, and user can search his favorite meal',
        dataSource: 'https://www.themealdb.com/api.php',
    },
    {
        id: 2,
        name: 'Search Your Favorite Cocktail',
        image: Proj2,
        skills: 'HTML, CSS, React,',
        liveLink: 'https://cocktail-main.netlify.app/',
        codeLink: 'https://github.com/skininja673/Project3-Cocktail',
        about: 'This is a React app, in which third party cocktaildb-api is used to fetch data, and user can search his favorite cocktail',
        dataSource: 'https://www.thecocktaildb.com/api.php',
    },
    {
        id: 3,
        name: 'Color Generator App',
        image: Proj3,
        skills: 'HTML, CSS, React',
        liveLink: 'https://boisterous-kataifi-ff43c6.netlify.app/',
        codeLink: 'https://github.com/skininja673/color-generator-app',
        about: 'This is a React app, where user can choose different color and shades. The data is coming from Values.js library',
        dataSource: 'https://github.com/noeldelgado/values.js',
    },
    {
        id: 4,
        name: 'Sidebar & Modal',
        image: Proj4,
        skills: 'HTML, CSS, React',
        liveLink: 'https://silly-rabanadas-de5545.netlify.app/',
        codeLink: 'https://github.com/skininja673/sidebar-modal',
        about: 'This is a React app, its a very common UI seen in many websites',
        dataSource: '',
    },
    {
        id: 5,
        name: 'Slider App',
        image: Proj5,
        skills: 'HTML, CSS, React',
        liveLink: 'https://frabjous-zuccutto-a14ec4.netlify.app/',
        codeLink: 'https://github.com/skininja673/sliderApp',
        about: 'This is a React app, its a slider and it changes in every 2 second',
        dataSource: '',
    },
    {
        id: 6,
        name: 'Todo App',
        image: Proj6,
        skills: 'React, JavaScript, HTML, CSS',
        liveLink: 'https://golden-eclair-7f9d75.netlify.app/',
        codeLink: 'https://github.com/skininja673/GroceryBud',
        about: 'This is a list, where user can add/delete/edit items in list. This is a React project',
        dataSource: '',
    },
];

export const MyInfo = {
    name: 'Akalpit Sharma',
    nickname: 'AL',
    heading: 'Hi my name is Akalpit',
    title: 'A Frontend Web Developer with a passion for learning and creating',
    aboutMe:
        "I'm Akalpit Sharma, a Front End Web Developer with a background in computer science. I am a hardworking and innovative thinker. I love creating user-friendly, responsive and accessible application. I make sure that my applications are clean and engaging. I bring a strong communication and interpersonal skills to every team that I work with to bring positive work envronment. When I am not coding I enjoy watching foreign movies and  listen to music. I also enjoy hopping on my bike and go for a long ride. You can catch me with a cup of coffee glued to a mobile at times.",
    mobile: '(581)-397-7738',
    email: 'sharma.akalpit@gmail.com',
    SocialLinksList: [
        {
            id: 1,
            name: 'linkedin',
            link: 'https://www.linkedin.com/in/akalpit-sharma/',
            icon: <LinkedInIcon />,
        },
        {
            id: 2,
            name: 'github',
            link: 'https://github.com/skininja673?tab=repositories',
            icon: <GitHub />,
        },
        {
            id: 3,
            name: 'email',
            link: 'mailto: sharma.akalpit@gmail.com',
            icon: <EmailIcon />,
        },
        {
            id: 4,
            name: 'calendly',
            link: 'https://calendly.com/akalpit',
            icon: <CalendarToday />,
        },
    ],
};

export const Disclaimer =
    "The project's idea/designs are taken from one of the courses I enrolled at Udemy. The aim of making these projects is to showcase and get comfortable with using React library. I enjoy coding in React and regularly upgrading my skills to tackle more complex problems. You are welcome to view the code and any comments or suggestions are highly appreciated. 🙏";
