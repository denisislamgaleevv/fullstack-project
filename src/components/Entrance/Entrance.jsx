
 
import './Entrance.css'
import { useNavigate } from "react-router-dom";
import { Context } from '../../index';
import { useContext, useState } from 'react';
import {AiFillEyeInvisible} from "react-icons/ai";
import {AiFillEye} from "react-icons/ai";
import axios from 'axios';
import { useEffect } from 'react';
export const Entrance = () =>{  
    const navigate = useNavigate();
    const {users} = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passVis, setPassVis] = useState(false)
    const [errorLogin, setErrorLogin] = useState(false)
     
    async function registerUser(e){
        e.preventDefault()
        
        const newUser = {
            email: email, 
            password: password
        }
       

        axios.post('http://localhost:8000/login', newUser)
        .then((res)=>
        {
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
            setErrorLogin(true)
            console.log(err)
        })
    }
    useEffect(() => {
        console.log(errorLogin)
    }, [errorLogin])

    return(
        <section class="profile">
      
        <h1>Вход</h1>
        <form action="#" id="profile" class="form">
            
           { errorLogin && <p class="form_error-msg">Неверный логин или пароль</p>}
    
           
            <label for="profile-age">Еmail</label>
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
            <div className='form-password'> 
            <input
                className='reg-input'
                type = {passVis? 'text':'password'}
                    name="number"
                    value = {password}
                    onChange={(e) => {setPassword(e.target.value)}}
                    placeholder="Ваш пароль"
                 
            /><span class = 'form-eye'>{passVis? 
                <AiFillEyeInvisible onClick={() =>setPassVis(false)}/>:
                <AiFillEye onClick={() =>setPassVis(true)}/>}</span>
                </div>
        
    
            <button className = 'button-reg'
            onClick={ registerUser }
            >Сохранить</button>
            <p class = 'already-reg-p'>Нет аккаунта? <a class = 'open-a' onClick = {() => navigate("/register")}>Регистрация</a></p>
        </form>
    </section>

    )
}