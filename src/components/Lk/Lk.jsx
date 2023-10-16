
import './Lk.css'
import { useContext ,  useState} from 'react'
import profile from '../../icons/user.png' 
import { Context } from '../../index';
import { ImageUploader } from '../ImageUploader/ImageUploader';
 
export const Lk = () =>{
    const [image, setImage] = useState('')
 
    const {users} = useContext(Context)
    return(
        <section class="lk">
            <h1>Личный кабинет</h1>
            <div className='lk-container'>

            <div className = 'lk-image-container'>
                {localStorage.getItem('image')===JSON.stringify("none") ?
               <img class = 'lk-image' src= {profile} />:
                <img class = 'lk-image' src= {localStorage.getItem('image').replace(/"/g, '')} />
            }
            </div>
            <div class = 'lk-elems-container'>
            <span class = 'lk-elem'>Логин:   <b>{localStorage.getItem('username').replace(/"/g, '')}</b></span>
            <span class = 'lk-elem'>Email:   <b>{localStorage.getItem('email').replace(/"/g, '')}   </b></span>
            <span class = 'lk-elem'>Телефон: <b>{localStorage.getItem('phone').replace(/"/g, '')}   </b></span>
            </div>
            <div className='add-card-page-right'>
              {/*  <h3>Image:   <ImageUploader image = {image} setImage = {setImage}/> </h3>*/}
            </div>
            </div>
        </section>
    )
}