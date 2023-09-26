
import './Register.css'
import { useNavigate } from "react-router-dom";
export const Register = () =>{
    const navigate = useNavigate();
    return(<>
    <section class="profile">
    <h1>Регистрация</h1>
    <form action="#" id="profile" class="form">
        <p class="form__success-msg">Форма заполнена правильно</p>
        <p class="form__error-msg">Форма содержит ошибки</p>

        <label for="profile-name" >Имя <span class="required">*</span></label>
        <input
                className='reg-input'
                name="name"
                id="profile-name"
                placeholder="Ваше имя"
                data-required
                data-validator="letters"
        />
        <span class="form__comment">Только буквы (русские или английские)</span>

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

        <button className = 'button-reg'>Сохранить</button>
        <p class = 'already-reg-p'>Уже зарегистрированы? <a class = 'open-a' onClick = {() => navigate("/entrance")}>Войти</a></p>
    </form>
</section>
    </>)
}