 
import './App.css';
 
import { MainContent } from './components/MainContent/MainContent';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import { Register } from './components/Register/Register';
import { Entrance } from './components/Entrance/Entrance';
import { Programs } from './components/Programs/Programs';
import { TrialLesson } from './components/TrialLesson/TrialLesson';
 
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element = { <>  <MainContent/> <Footer/></>} />
        <Route path='/register' element = { <Register/>} />
        <Route path = '/entrance' element = {<Entrance/> }/>
        <Route path = '/programs' element = {<> <Programs/> <Footer/></>}/>
        <Route path = '/trial-lessons' element = {<> <TrialLesson/> <Footer/></>}/>
      </Routes>
      
       
       
       </div>
       
  );
}

export default App;
