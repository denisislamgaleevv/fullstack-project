 
import './App.css';
 
import { MainContent } from './components/MainContent/MainContent';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import { Register } from './components/Register/Register';
import { Entrance } from './components/Entrance/Entrance';
import { Programs } from './components/Programs/Programs';
import { TrialLesson } from './components/TrialLesson/TrialLesson';
import { Reviews } from './components/Reviews/Reviews';
 
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element = { <>  <MainContent/> <Footer/> </>} />
        <Route path='/register' element = { <Register/>} />
        <Route path = '/entrance' element = {<Entrance/> }/>
        <Route path = '/programs' element = {<> <Programs/> <Footer/></>}/>
        <Route path = '/trial-lessons' element = {<> <TrialLesson/> <Footer/></>}/>
        <Route path = '/reviews' element = {<> <Reviews/> <Footer/></>}/>
      </Routes>
      
       
       
       </div>
       
  );
}

export default App;
