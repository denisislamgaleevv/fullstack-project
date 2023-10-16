 
import './Reviews.css';
import axios from 'axios';
import moment from 'moment';
import loading from '../../icons/loading.gif';
import { Context } from '../../index';
import { useContext, useEffect, useState } from 'react';

import { AiOutlineDelete } from "react-icons/ai";


export const Reviews = () => {
const [reviews, setReviews] = useState([]);
const [average, setAverage] = useState(0);
const {users} = useContext(Context);
useEffect(() => {
    getReviews();
    
    const ratings = reviews.map((review) => review.stars);
    const average = ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length;
    setAverage(average);
   
}, [average, reviews]);

async function getReviews() {
    try {
    const response = await axios.get(`http://localhost:8000/reviews`);
    setReviews(response.data);  
    } catch (error) {
    console.error('Ошибка при получении отзывов:', error);
    }
}

const getStars = (n) =>{
    let stars = [];
    for (let i = 0; i < n; i++) {
        stars.push(<span class = 'mini-star-bright'>&#9733;</span>);
    }
    for (let i = 0; i < 5-n; i++) {
        stars.push(<span class = 'mini-star-white'>&#9733;</span>);
    }
    return stars;
}
const [cStars, setCStars] = useState(1);

const [textareaValue, setTextAreaValue] = useState('');
useEffect(()=>{
console.log('username', localStorage.getItem('username') )
}, [])
const addNewReview = async () => {
  
    try {
        const author = localStorage.getItem('loggedIn') == 'true'?  localStorage.getItem('username') :'Anon'; 
        
       
        const response = await axios.post(`http://localhost:8000/reviews`, {
            "review": textareaValue,
            "stars": cStars, 
            "author": author.replace(/"/g, ''), 
            "time": String(moment().format('MMMM Do YYYY')) ,
            "email": localStorage.getItem('email').replace(/"/g, '')
        });
   
        } catch (error) {
        console.error('Ошибка при получении отзывов:', error);
        }
        setTextAreaValue('')
        setCStars(1)
        getReviews()
}
const clickStar1 = () => {
    setCStars(1);
}
const clickStar2 = () => {
    setCStars(2);
}
const clickStar3 = () => {
    setCStars(3);
}
const clickStar4 = () => {
    setCStars(4);
}
const clickStar5 = () => {
    setCStars(5);
}
const deleteReview = (elem) => {
    console.log(elem.id)
    axios.delete(`http://localhost:8000/reviews/${elem.id}`)
        .then(response => {
            
            setReviews(reviews.filter(item => item !== elem));
        })
        .catch(error => {
          
            console.error('Ошибка при удалении элемента:', error);
        });


};

return (
    <div className='Reviews'>
     
     <div className = 'add-new-review-c'>
        <h2>Добавьте ваш отзыв</h2>
    
       <h1> 
       <span className = {cStars >=1 ? 'mini-star-bright': 'mini-star-white'} onClick = {clickStar1}>&#9733;</span>
       <span className = {cStars >=2 ? 'mini-star-bright': 'mini-star-white'} onClick = {clickStar2}>&#9733;</span>
       <span className = {cStars >=3 ? 'mini-star-bright': 'mini-star-white'} onClick = {clickStar3}>&#9733;</span>
       <span className = {cStars >=4 ? 'mini-star-bright': 'mini-star-white'} onClick = {clickStar4}>&#9733;</span>
       <span className = {cStars >=5 ? 'mini-star-bright': 'mini-star-white'} onClick = {clickStar5}>&#9733;</span>
 
        </h1>  
        <textarea 
        class = "review-textarea" 
        id = 'message-input' 
        placeholder="Сообщение" 
        value={textareaValue} 
        onChange={(e) => setTextAreaValue(e.target.value)}
     
      required 
        ></textarea>
<div className = 'button-reg-container'>
<button className = 'button-reg' onClick={addNewReview}>Сохранить</button>
</div>
     </div>
     <div className = 'reviews-container'>
    {reviews.length === 0? <><h1>Загрузка отзывов...</h1><p>&nbsp;</p><img width = '60px'src = {loading}/>  </> 

:<>  
  {/*<h2>Средний рейтинг: <>{average!= 0? average:<></>   }</> </h2>*/}
    {reviews.slice(0).reverse().map((elem, index) => (
    <div className='review' key={elem.id}>
    <h3>{elem.author} {(JSON.stringify(elem.email) === localStorage.getItem('email') || localStorage.getItem('email') ===
    JSON.stringify('denis.islamgaleevv@mail.ru')
    )&&<AiOutlineDelete 
    onClick = { ()=>deleteReview(elem)}
    className = 'delete-rev-icon'/>}</h3>  
    <span>{elem.time}</span>
    <h1>{getStars(elem.stars)} </h1>
    <p>{elem.review}</p>
    </div>
    ))}</>}
    
    </div>
    
    </div>
);
};