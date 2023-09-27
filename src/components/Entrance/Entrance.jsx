
 
import './Entrance.css'
import { useNavigate } from "react-router-dom";
import { Context } from '../../index';
import { useContext, useState } from 'react';
export const Entrance = () =>{  
    const navigate = useNavigate();
    const {users} = useContext(Context)
    const [email,  setEmail] = useState('')
    const [password, setPassword] = useState('')
    async function handleReg(e){
        e.preventDefault()
        users.setLoggedIn(true);
        const loginData = {
            "email": email, 
            "password": password
        }
       

        const responce = await fetch('http://localhost:8000/users', {
            method: "POST", 
            body: JSON.stringify(loginData), 
            headers:{
                'Content-Type': 'application/json'
            }
        })
    }
    return(
        <section class="profile">
        {/* {users}.loggedIn? <h1>Зарегано</h1>: <></>      */}
        <h1>Вход</h1>
        <form action="#" id="profile" class="form">
            <p class="form__success-msg">Форма заполнена правильно</p>
            <p class="form__error-msg">Форма содержит ошибки</p>
    
           
            <label for="profile-age">Email</label>
            <input
                className='reg-input'
                    name="email"
                    id="profile-age"
                    placeholder="Ваш email"
                    data-validator="number"
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
            />
           
            <label for="profile-number">Пароль</label>
            <input
                className='reg-input'
                    type = 'password'
                    name="number"
                    value = {password}
                    onChange={(e) => {setPassword(e.target.value)}}
                    placeholder="Ваш пароль"
                 
            />
    
            <button className = 'button-reg'
            onClick={(e)=> handleReg(e)}
            >Сохранить</button>
            <p class = 'already-reg-p'>Нет аккаунта? <a class = 'open-a' onClick = {() => navigate("/register")}>Регистрация</a></p>
        </form>
    </section>

    )
}