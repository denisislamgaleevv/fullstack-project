
import './Programs.css'
import smartphoneWhite from '../../images/services/smartphone_white.png'
import smartphone from '../../images/services/smartphone.png'
import programs from '../../programs.json'
import { useState, useEffect } from 'react'
import { FormWindow } from '../FormWindow/FormWindow'
export const Programs = () =>{

    const [formVisibility, setFormVisibility] = useState(false)
 
    const [formElem, setFormElem]= useState([])
    const viewForm = (elem) =>{
       setFormElem(elem)
       setFormVisibility(true)
   
       window.scrollTo(0,0);
    }
    const hideForm = () =>{
        setFormVisibility(false)
        window.removeEventListener('scroll', handleScroll);
    }
     
    const handleScroll = () => {
        window.scrollTo(0, 0);
    };

    useEffect(()=>{
        console.log(formVisibility)
       
        if (formVisibility) {
            window.addEventListener('scroll', handleScroll);
        } 
        
        else{
            window.removeEventListener('scroll', handleScroll);
        
        }
         
    }, [formVisibility] )
  
    

    return (
 
    <div className='Programs'>
    
    {formVisibility && <FormWindow elem = {formElem} hideForm={hideForm}/>}
    <div class = 'services' id = "servicing">
      <h2>Наши программы</h2>
      <div class = "services-text-container">  
      <p class="services-text">
        Программы нашей школы программирования предназначены для вдохновления и развития молодых умов, которые хотят стать мастерами кода и 
        создателями цифрового мира. 
        В Code-R мы предлагаем интенсивные и увлекательные курсы, которые помогут детям освоить основы программирования и разработки программного обеспечения.</p>
    </div>
    </div>
    
    
    <div class="services-blocks">
     {/**  
       formVisibility ? <FormWindow elem = {formElem} scrollTop = {scrollTop}  />: <></>
     */}
       {programs.map((elem) =>
        <div class="services-card">
             
        <div class = "services-img-container"> 
          <img class ="services-img" src= {smartphone}/>
          <img class ="services-img-white" src= {smartphoneWhite}/>
        </div>
        <h3>{elem.title}</h3>
        <p>{elem.description}</p>
        <button class="services-btn" 
        onClick = {() =>viewForm(elem)}
        >Подробнее</button>
        </div>
      )}
 
    </div>


    </div>)
}