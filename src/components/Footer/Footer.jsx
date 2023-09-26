
import './Footer.css'
 
import instIcon from '../../icons/inst.png'
import logo from '../../images/header/logo.png'
import tgIcon from '../../icons/tg.png'
import vkIcon from '../../icons/vk.png'

export const Footer = () =>{
    return( <div class = "empty">
      
    <img width = '100px' class = 'footer-logo' src = {logo}/> 
      <div class = 'icon-div-footer-container'> 
        <h3>Мы в социальных сетях:</h3>
        <a class = 'icon-a' href = "https://vk.com/lemmespeak">
          <img src = {vkIcon} width="30px"   class = 'icon-header'/>
          </a>
         
         
          <a class = 'icon-a' href = "#">
          <img src = {instIcon} width="30px" class = 'icon-header'/>
        </a>
       
      
          <a class = 'icon-a' href = "https://web.telegram.org/a/#-1752859389">
          <img src = {tgIcon} width="30px"   class = 'icon-header'/>
        </a>
     
      </div>
   
   </div>)
}