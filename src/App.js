import React, {Component} from "react";
import About from './components/About';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Resume from './components/Resume';

class App extends Coomponent {
    render() {
        return(
            <div className="App">
                <About portfolioData={portfolioData}/>
                <Navbar portfolioData={portfolioData}/>
                <Contact portfolioData={portfolioData}/>
                <Projects portfolioData={portfolioData}/>
                <Testimonials portfolioData={portfolioData}/>
                <Skills portfolioData={portfolioData}/>
            </div>
        );
    }
}

export default App;

// export default function App() {
//     return (
//         <main>
//             <Navbar/>
//             <About/>
//             <Projects/>
//             <Skills/>
//             <Testimonials/>
//             <Contact/>

//         </main>
//     );
// }