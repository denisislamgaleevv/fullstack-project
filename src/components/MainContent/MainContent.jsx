 
import './MainContent.css';
//icons 
import downIcon from '../../icons/down-icon.png'
 
//pictures
import head from '../../images/about/head.png'
import internet from '../../images/about/internet.png'
import transfer from '../../images/about/transfer.png'
 
 
//team
import aigul from '../../images/team/aigul.jpg'
import alex from '../../images/team/alex.jpg'
import denis from '../../images/team/denis.jpg'
import ksenia from '../../images/team/kseniya.jpg'
import margarita from '../../images/team/margarita.jpg'
import user from '../../images/team/user.jpg'
//gallery
import photo1 from '../../images/works/1.jpg'
import photo2 from '../../images/works/2.jpg'
import photo3 from '../../images/works/3.jpg'
import photo4 from '../../images/works/4.jpg'
import photo5 from '../../images/works/5.jpg'
import photo6 from '../../images/works/6.jpg'
import photo7 from '../../images/works/7.jpg'
import photo8 from '../../images/works/8.jpg'
 
import { FormWindow } from '../FormWindow/FormWindow';
import { useEffect, useState } from 'react';
export function MainContent() {
  
  

 
  return (
    <div>
       
    
    <div class="main-content"> 
    <div class="main-image">
       
         
    </div>
    <div class="main-text"  > 
    <p class="main-header">Школа программирования и робототехники Code-R</p>
      <p class = "main-p">Здесь творчество встречается с технологиями </p>
      <div class = 'main-btn-container'> 
      <a  href = "#about"><button class="btn"  >О нас</button></a>
      <a  href = "#contact_us"><button class="btn">пробное занятие</button></a>
    </div>
     
    </div>
     <div class = "icon-container">  
      
    <a  href = "#portfolio"><img src = {downIcon } class = 'down-icon'/></a>
  </div>
  

    <div class="about" id = "about">
        <h1>О нас</h1>
        <div  class="about-text-container"> 
          
        <p class="about-text" >
         
Code-R - это инновационная школа программирования, где студенты воплощают свои самые смелые идеи в реальность с помощью кода. Мы предлагаем уникальную образовательную программу, которая позволяет каждому студенту превратиться в настоящего создателя виртуального мира.

В Code-R мы верим, что программирование - это не просто набор символов и команд, а настоящее искусство, способное изменить мир. Наша миссия - развить творческий потенциал каждого студента и помочь им стать лидерами в сфере технологий.
          </p>
        </div>
    <div class="advantage-section">
        <div class="advantage">
          <img class = "advantage-img" src={internet} alt="Awesome Icons"/>
          <h3>Методика</h3>
          <br/>
          <p>Мы обучаем в мини-группах и индивидуально.
            Наши педагоги - это интересные личности, увлеченные специалисты, современные и коммуникабельные. У нас разработана внутренняя система обучения современным методикам.</p>
        </div>
        
        <div class="advantage">
          <img class = "advantage-img" src={transfer} alt="One Page"/>
          <h3>Обучение</h3>
          <br/>
          <p>Мы обучаем без страха, стресса и зубрежки! Мы хвалим, поощряем и поддерживаем. Наша задача: создать максимально комфортную обстановку на уроках, чтобы ошибаться было можно. Только так можно преодолеть языковой барьер.</p>
          
        </div>
        
        <div class="advantage">
          <img class = "advantage-img" src={head} alt="Fully Responsive"/>
          <h3>Программы</h3>
          <br/>
          <p>Программы обучения, которые мы собираем на тренингах и профессиональных обучениях, тестируем и выбираем то, что работает. Всесторонняя поддержка преподавателей необходимыми материалами: играми, карточками, программами.</p>
        </div>
      </div>
    </div>
   
   
   <div class="works-products">
   
    <div class="works-product">
      <img src = {photo1} onclick="openImage(this)" id = 'img-1'/>
    </div>
    <div class="works-product">
      <img src = {photo2} onclick="openImage(this)" id = 'img-2'/>
    </div>
    <div class="works-product">
      <img src = {photo3} onclick="openImage(this)" id = 'img-3'/>
    
    </div>
    
    <div class="works-product">
      <img src = {photo4} onclick="openImage(this)" id = 'img-4'/>
    </div>
    <div class="works-product">
      <img src = {photo5} onclick="openImage(this)" id = 'img-5'/>
    </div>
    <div class="works-product">
      <img src = {photo6} onclick="openImage(this)" id = 'img-6'/>
    </div>
    <div class="works-product">
      <img src = {photo7} onclick="openImage(this)" id = 'img-7'/>
    </div>
    <div class="works-product">
      <img src = {photo8} onclick="openImage(this)" id = 'img-8'/>
    </div>

  </div>
    <div class = "advantages" id = "portfolio">
       
      <h1>Наши преимущества</h1>
      <div class = "works-text-container">  
      <p class = "works-text">   
      Мы предлагаем широкий выбор курсов, которые позволяют изучить различные языки программирования и технологии. Наши опытные преподаватели помогут вам освоить основы программирования и научат создавать сложные и инновационные проекты. В Code-R мы стремимся к тому, чтобы каждый студент получил не только технические навыки, но и развил свою креативность и аналитическое мышление.
<br/><br/>
Мы создали уникальную образовательную среду, где студенты могут свободно выражать свои идеи и воплощать их в проектах. У нас есть современные компьютерные классы, оснащенные последними технологиями, а также лаборатории и коворкинг-пространства, где студенты могут сотрудничать и делиться своими знаниями.
</p>
      </div>
      
    </div>
  </div>
  <div class = "works" id = "team">
    <h1 class = 'team-header'>Наша команда</h1>
    <h1></h1>
     
    <div class="works-products">
      
      <div class="team-product">
        <div class = 'team-container'>
          <img class = 'team-img' src = {margarita}/>
          <h2>Маргарита</h2>
          <h4>Администратор</h4>
        </div>
        
      </div>
      <div class="team-product">
        <div class = 'team-container'>
          <img class = 'team-img' src = {denis}/>
          <h2>Денис</h2>
          <h4>Программирование и робототехника</h4>
        </div>
        
      </div>
      <div class="team-product">
        <div class = 'team-container'>
          <img class = 'team-img' src = {aigul}/>
          <h2>Айгуль</h2>
          <h4>Английский и французский</h4>
        </div>
        
      </div>
      <div class="team-product">
        <div class = 'team-container'>
          <img class = 'team-img' src = {ksenia}/>
          <h2>Ксения</h2>
          <h4>Корейский и английский</h4>
        </div>
        
      </div>
      <div class="team-product">
        <div class = 'team-container'>
          <img class = 'team-img' src = {user}/>
          <h2>Надежда Борисовна</h2>
          <h4>Учитель начальных классов, логопед</h4>
        </div>
        
      </div>
      <div class="team-product">
        <div class = 'team-container'>
          <img class = 'team-img' src = {alex}/>
          <h2>Alex S. Harris</h2>
          <h4>Английский, носитель языка</h4>
        </div>
        
      </div>
        
      </div>
    </div>
   
 
  
    <div class = 'location' id = 'location'>
       <h2>Местоположение:</h2>
       <div class = 'location-div'> 
        </div>
    </div>

   
       
        
       
       </div>
       
  );
}
 