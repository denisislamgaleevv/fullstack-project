


import { useEffect, useState } from 'react'
import './TrialLesson.css'; 
import axios from 'axios'
export const TrialLesson = () =>{
    const [isPosted, setIsPosted] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const handleNameChange = (e) =>{
        setName(e.target.value)
    }
    const handleEmailChange = (e) =>{
        setEmail(e.target.value)
    }
    const handleMessageChange = (e) =>{
        setMessage(e.target.value)
    }
     
    
 
    const sendData = async (e) => {
      e.preventDefault();
      const messageText = `Новая запись на пробный урок. \n\nИмя: ${name} \nEmail: ${email} \nСообщение: ${message}`;
      const botToken = '6455030953:AAFc1ZgC3b8ROqgFPke4BDAp7GzPCuVtSF0';
      const chatId = '1384687782';
      try {
        const response = await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          chat_id: chatId,
          text: messageText,
        } );
        await console.log('Message sent:', response.data);
        await setIsPosted(true)
        console.log(isPosted)
      } catch (error) {
        console.error('Error sending message:', error);
      }
    };
    
    


    return(

   
          <form class = 'contacts' id ="contact_us"  onSubmit = {  sendData } >

            {isPosted? 
            <div className='thanks-message-div'>  
            <h1>Спасибо за отправку формы! Мы свяжемся с вами!</h1>
            </div>
            :  <>  
        <h1>Записаться на пробное занятие</h1>
        <div class = "contacts-text-container">  
        <p class="contacts-text">Оставьте заявку и мы свяжемся с вами</p>
        </div>
        <div class = "contacts-blocks">
          <div class = "contacts-block">
             <div class = "images1"></div>
             <p>г. Уфа<br/>ул. Менделеева, 11</p>
          </div>
          <div class = "contacts-block">
            <div class = "images2"></div>
            <p>+7 (987) 479-50-09<br/>+7 (999) 589-01-73</p>
         </div>
         <div class = "contacts-block">
          <div class = "images3"></div>
          <p>code-r@mail.ru<br/>denis.islamgaleevv@mail.ru</p>
       </div>
        </div>
        <div>  
        <input 
            class = "name-email-input" 
            id = 'name-input' 
            placeholder="Ваше имя" 
           
            value={name}
            onChange={handleNameChange}
            required 
        />
        <input
        class = "name-email-input" 
        id = 'email-input' 
        type = 'email'
         placeholder="Ваш email" 
        
         value= {email}
         onChange={handleEmailChange}
         required 
         />
        <textarea 
        class = "msg-textarea" 
        id = 'message-input' 
        placeholder="Сообщение" 
        
      value={message}
      onChange={handleMessageChange}
      required 
        ></textarea>
      </div>
        <button class="btn" type = 'submit' >Отправить</button>
        </>}
      </form>
        
       
    )
}