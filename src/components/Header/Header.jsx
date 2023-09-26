import './Header.css'
//icons 
 
import instIcon from '../../icons/inst.png'
import logo from '../../images/header/logo.png'
import tgIcon from '../../icons/tg.png'
import vkIcon from '../../icons/vk.png'
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
              <button className = 'button-reg-header' >Выйти</button>
         :
         
         <button className = 'button-reg-header' onClick = {() =>navigate("/register")}>Регистрация</button>
         
            }</>:<></>}
            
           </div>
           
           )
}