
import './FormWindow.css'

export const FormWindow = ({elem,  hideForm}) =>{
    
    return(
        <div className='form-w-wrapper' >
         
            <div className='form-w'>
                
            <div class = 'cross-form' onClick = {() =>   hideForm()}>&#10006;</div>
          
            <h1>{elem.title}</h1>
                
                <img width = '500px'src = {elem.image} />
                <p>{elem.description}</p>
            </div>
        </div>

    )
}