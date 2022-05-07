import './styles/AddGame.css'
import { Link, useNavigate } from 'react-router-dom' //Czy potrzebne?
import { useRef, useState } from 'react' //Czy potrzebne?

const AddGame = () =>
{   

    return(
    <div className="addGame">
        <div className='Row'>   
            <div className='Column'> 
                <div className='Row'>   
                    <input className='Image'input/>    
                    <div className='Column'>   
                        <input className='smallLable'input/><br/>
                        <input className='smallLable'input/><br/>
                        <input className='smallLable'input/><br/>
                        <input className='smallLable'input/><br/>
                        <input className='smallLable'input/><br/>
                    </div>
                </div>
                <input className='mediumLabel'input/><br/>
                <input className='largeLabel'input/><br/>
                <input className='largeLabel'input/><br/>
                <input className='mediumLabel'input/><br/>
            </div>
            <div className='Column'> 
                <input className='description'input/><br/>
            </div>
            <div className='Column'> 
                <div className="filtr">
                    <h1>Kategorie</h1>
                    <input type="checkbox" /> 
                    <input type="checkbox" /> 
                    <input type="checkbox" /> 
                    
                </div> 
            </div>
        </div>



    </div>
    )
    /*      <h3 className="error">{error}</h3>
            <input className='input' ref={usernameRef} type="text" name="username" placeholder="Nazwa użytkownika" minLength="3" required/><br />
            <input className='input' ref={emailRef} type="email" name="email" placeholder="Email" required/><br />
            <input className='input' ref={passwordRef} type="text" name="password" placeholder="Hasło" minLength="6" required/><br />
            <input className='input' ref={checkPasswordRef} type="text" name="chechPassword" placeholder="Powtórz hasło" minLength="6" required/><br />
            <div className="accept">
            <input type="checkbox" id="checkbox" onChange={handleChange} /> 
            <label htmlFor="checkbox">Akceptuję <Link id="text-link" to="/regulamin" target="_blank">Regulamin</Link></label><br />
            </div>
            <input className="submitButton1" type="submit" value="Zarejestruj się" disabled={disabled}/>*/
    
}
export default AddGame