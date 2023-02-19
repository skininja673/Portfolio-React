import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';
import ContactForm from './pages/ContactForm';
import Experience from './pages/Experience';
import ErrorPage from './pages/ErrorPage';

function App() {
    return (
        <div className='App'>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/project/:id' element={<ProjectDisplay />} />
                    <Route path='/experience' element={<Experience />} />
                    <Route path='/contact' element={<ContactForm />} />
                    {/* <Route path='*' element={<ErrorPage />} /> */}
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
