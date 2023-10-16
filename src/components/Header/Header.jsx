import './Header.css'
//icons 
 
 
import logo from '../../images/header/logo.png'
import exit from '../../icons/exit.png'
 
import profile from '../../icons/user.png'
import { Context } from '../../index';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"; 
import { observer } from 'mobx-react-lite';
 
{/*
     <a class = 'header-a' href = "#about">О нас</a>
            
             <a class = 'header-a' href = "#portfolio">Преимущества</a>
             <a class = 'header-a' href = "#team">Команда</a>
             <a class = 'header-a' href = "#location">Местоположение</a>
             <a class = 'header-a' href = "#contact_us">Контакты</a>
*/}

const Header = observer(() =>{
  const navigate = useNavigate();
  const {users} = useContext(Context)
  const [miniMenuVis, setMiniMenuVis] = useState(false)
  const [update, setUpdate] = useState(false)
  const showMenu = () =>{
    setMiniMenuVis(true)
  }
  const hideMenu = () =>{
    setMiniMenuVis(false)
  }
  
  const hideProfile = () => {
    navigate('/login')
    localStorage.setItem('loggedIn', JSON.stringify(false));
    setUpdate(false)
    localStorage.setItem('username', '' )
    localStorage.setItem('phone',  '')
    localStorage.setItem('email',  '')
    localStorage.setItem('image',  '')
    
    localStorage.setItem('loggedIn', '');
    
  }
  useEffect(()=>{
    setUpdate(true)
  }, [update])
 
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
              miniMenuVis &&  <button className = 'button-reg-header' onClick = 
              {() =>navigate("/register")}>Регистрация</button>
               
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
               (localStorage.getItem('loggedIn') == 'true') ? 
              <div className='profile-container'>
                <div className='profile-img-container'>  
                <img className='profile-img' src = { localStorage.getItem('image')===JSON.stringify("none")?
                 profile : localStorage.getItem('image').replace(/"/g, '')}/>
                </div>
                <div class = 'profile-text-c'>
                  <b style = {{"cursor": "pointer"}} onClick = {() =>navigate('/lk')}>
                    { localStorage.getItem('username').replace(/"/g, '')}</b>
                  <p>{ localStorage.getItem('email').replace(/"/g, '')}</p>
                </div>
                <img class = 'exit-icon' src = {exit} width='30px'
                 onClick = { hideProfile}/>
              </div>
              
         :
         
         <button className = 'button-reg-header' onClick = {() =>navigate("/register")}>Регистрация</button>
         
            }</>:<></>}
            
           </div>
           
           )
})
export default Header;