
import { useState, useContext } from 'react';
import './Register.css'
import { useNavigate } from "react-router-dom";
import {AiFillEyeInvisible} from "react-icons/ai";
import {AiFillEye} from "react-icons/ai";
import { Context } from '../../index';
import axios from 'axios';
export const Register = () =>{

    const {users} = useContext(Context)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    
    const [email,  setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passVis, setPassVis] = useState(false)
    const [errorLogin, setErrorLogin] = useState(false)
    const handleReg = (e) =>{
        e.preventDefault()
      
        const newUser = {
            email: email, 
            password: password, 
            username: name, 
            phone: phone, 
            image: "none"
        }
        
        axios.post('http://localhost:8000/register', newUser)
        .then((res)=>{
            console.log(res);
            if (res.status === 200) {
                users.setLoggedIn(true);
                users.setUser(res.data);
                localStorage.setItem('username',  JSON.stringify(res.data.username))
                localStorage.setItem('phone',  JSON.stringify(res.data.phone))
                localStorage.setItem('email',  JSON.stringify(res.data.email))
                localStorage.setItem('image',  JSON.stringify(res.data.image))
                
                localStorage.setItem('loggedIn', JSON.stringify(true));
                
                navigate('/')
             }
        })
        .catch((err) => {
            console.log(err)
            setErrorLogin(true)
        })
    }
    const navigate = useNavigate();
    return(<>
    <section class="profile" onSubmit={handleReg}>
    <h1>Регистрация</h1>
    <form onSubmit = { handleReg} id="profile" class="form">
       
    { errorLogin && <p class="form_error-msg">Пользователь с таким email уже существует</p>}
    
        <label for="profile-name" >Имя <span class="required">*</span></label>
        <input
                className='reg-input'
                name="name"
                
                placeholder="Ваше имя"
                value = {name}
                onChange = {(e) => {setName(e.target.value)}}
                data-required
               
        />
        <span class="form__comment">Только буквы (русские или английские)</span>

        <label for="profile-age">Email</label>
        <input
            className='reg-input'
                name="email"
               
                placeholder="Ваш email"
                value = {email}
                onChange = {(e) => {setEmail(e.target.value)}}
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
                value = {phone}
                onChange = {(e) => {setPhone(e.target.value)}}
        />
        <span class="form__comment">В формате +71234567890</span>

        <label for="profile-number">Пароль</label>
        <div className='form-password'> 
        <input
            className='reg-input'
                type = {passVis? 'text':'password'}
                name="number"
                id="profile-number"
                placeholder="Ваш пароль"
                data-validator="number"
                 value={password}
                 onChange={(e) => {setPassword(e.target.value)}}
        /><span class = 'form-eye'>{passVis? 
        <AiFillEyeInvisible onClick={() =>setPassVis(false)}/>:
        <AiFillEye onClick={() =>setPassVis(true)}/>}</span>
        </div>

        <button className = 'button-reg' type = 'submit'>Сохранить</button>
        <p class = 'already-reg-p'>Уже зарегистрированы? <a class = 'open-a' onClick = {() => navigate("/login")}>Войти</a></p>
    </form>
</section>
    </>)
}