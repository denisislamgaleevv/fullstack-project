import './Header.css'
//icons 
 
 
import logo from '../../images/header/logo.png'
import exit from '../../icons/exit.png'
 
import profile from '../../icons/user.png'
import { Context } from '../../index';
import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom"; 
{/*
     <a class = 'header-a' href = "#about">О нас</a>
            
             <a class = 'header-a' href = "#portfolio">Преимущества</a>
             <a class = 'header-a' href = "#team">Команда</a>
             <a class = 'header-a' href = "#location">Местоположение</a>
             <a class = 'header-a' href = "#contact_us">Контакты</a>
*/}

export const Header = () =>{
  const navigate = useNavigate();
  const {users} = useContext(Context)
  const [miniMenuVis, setMiniMenuVis] = useState(false)
 
  const showMenu = () =>{
    setMiniMenuVis(true)
  }
  const hideMenu = () =>{
    setMiniMenuVis(false)
  }

    return(



        <div class="header">
          
              
            <div class="logo">
                <a><img onClick= {() => navigate('/')}width = '100px' src = {logo}/></a>
            </div>

            {miniMenuVis || (window.innerWidth > 1300)?  
            <div class = 'nav'  >
             <div class = 'header-a-div'>  
             <a class = 'header-a' onClick= {() => navigate('/')}>Главная</a>
             <a class = 'header-a' href = "/programs">Программы</a>
             <a class = 'header-a' href = "/trial-lessons">Бесплатный пробный урок</a>
             <a class = 'header-a' href = "/reviews">Отзывы</a>
             {
              miniMenuVis &&  <button className = 'button-reg-header' onClick = {() =>navigate("/register")}>Регистрация</button>
               
             }
             
           </div>
           
           </div>
           : <></> }
              
           
            
            {miniMenuVis ?  
            <div class = 'cross'   onClick = { hideMenu }>&#10006;</div>
              :<div onClick = { showMenu } class = "burger" id = 'burger'>
              <div class = "line"></div>
              <div class = "line"></div>
              <div class = "line"></div>
             
             </div>}
             { (window.innerWidth > 1300)?  <>   {
              users.loggedIn ? 
              <div className='profile-container'>
                <img src ={profile} width='60px'/>
                <div class = 'profile-text-c'>
                  <b>Denis</b>
                  <p>denis.islamgaleevv@mail.ru</p>
                </div>
                <img class = 'exit-icon' src = {exit} width='30px'/>
              </div>
              
         :
         
         <button className = 'button-reg-header' onClick = {() =>navigate("/register")}>Регистрация</button>
         
            }</>:<></>}
            
           </div>
           
           )
}