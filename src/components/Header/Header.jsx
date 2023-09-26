import './Header.css'
//icons 
 
import instIcon from '../../icons/inst.png'
import logo from '../../images/header/logo.jpg'
import tgIcon from '../../icons/tg.png'
import vkIcon from '../../icons/vk.png'
import { Context } from '../../index';
import { useContext } from 'react';
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
    return(
        <div class="header">
            <div class="logo">
                <a><img onClick= {() => navigate('/')}width = '100px' src = {logo}/></a>
            </div>
            <div class = 'nav' id = "home">
             <div class = 'header-a-div'>  
             <a class = 'header-a' onClick= {() => navigate('/')}>Главная</a>
             <a class = 'header-a' href = "/programs">Программы</a>
             <a class = 'header-a' href = "/trial-lessons">Бесплатный пробный урок</a>
             
              
              
           </div>
           
           </div>
       
              
             
            <div onclick = 'viewMenu()' class = "burger" id = 'burger'>
             <div class = "line"></div>
             <div class = "line"></div>
             <div class = "line"></div>
            
            </div>
            <div class = 'cross' id = 'cross' onclick="hideMenu()">&#10006;</div>

            {
              users.loggedIn ? 
              <button className = 'button-reg-header' >Выйти</button>
         :
         <button className = 'button-reg-header' onClick = {() =>navigate("/register")}>Регистрация</button>
         
            }
            
           </div>
           
           )
}