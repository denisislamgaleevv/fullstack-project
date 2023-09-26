
 
import './Entrance.css'
import { useNavigate } from "react-router-dom";
import { Context } from '../../index';
import { useContext } from 'react';
export const Entrance = () =>{  
    const navigate = useNavigate();
    const {users} = useContext(Context)

    const handleReg = () =>{
        users.setLoggedIn(true);
   
        console.log(users)

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
                    data-validator-min="0"
                    data-validator-max="100"
            />
           
            <label for="profile-number">Пароль</label>
            <input
                className='reg-input'
                    type = 'password'
                    name="number"
                    id="profile-number"
                    placeholder="Ваш пароль"
                    data-validator="number"
            />
    
            <button className = 'button-reg'
            onClick={ handleReg}
            >Сохранить</button>
            <p class = 'already-reg-p'>Нет аккаунта? <a class = 'open-a' onClick = {() => navigate("/register")}>Регистрация</a></p>
        </form>
    </section>

    )
}