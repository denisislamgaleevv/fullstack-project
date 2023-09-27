
import { useState } from 'react';
import './Register.css'
import { useNavigate } from "react-router-dom";
export const Register = () =>{

    const handleReg = (e) =>{
        console.log(e.target)
    }
    const [email,  setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    return(<>
    <section class="profile">
    <h1>Регистрация</h1>
    <form onSubmit = { handleReg} id="profile" class="form">
       

        <label for="profile-name" >Имя <span class="required">*</span></label>
        <input
                className='reg-input'
                name="name"
                
                placeholder="Ваше имя"
                data-required
               
        />
        <span class="form__comment">Только буквы (русские или английские)</span>

        <label for="profile-age">Email</label>
        <input
            className='reg-input'
                name="email"
               
                placeholder="Ваш email"
                data-required
        />
        <span class="form__comment">Число от 0 до 100</span>

        <label for="profile-phone">Телефон</label>
        <input
            className='reg-input'
                name="phone"
                id="profile-phone"
                placeholder="Ваш телефон"
                data-validator="regexp"
                data-validator-pattern="^\+7\d{10}$"
        />
        <span class="form__comment">В формате +71234567890</span>

        <label for="profile-number">Пароль</label>
        <input
            className='reg-input'
                type = 'password'
                name="number"
                id="profile-number"
                placeholder="Ваш пароль"
                data-validator="number"
        />

        <button className = 'button-reg' type = 'submit'>Сохранить</button>
        <p class = 'already-reg-p'>Уже зарегистрированы? <a class = 'open-a' onClick = {() => navigate("/entrance")}>Войти</a></p>
    </form>
</section>
    </>)
}