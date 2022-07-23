import './App.css';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Tech from './components/tech worked/Tech';
import Education from './components/education/Education';
import Dev from './components/dev experience/Dev';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <div>
      <Intro />
      <About/>
      <Tech/>
      <Education/>
      <Dev/>
      <Contact/>
    </div>
  )

};

export default App;
