import './styles/Register.css'
import { Link, useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'


const Register = () =>
{
    let navigate = useNavigate()
    const [error, setError] = useState(null)
    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const checkPasswordRef = useRef()
    const [checked, setChecked] = useState(false)
    const [disabled, setDisabled] = useState(true)
    
    const handleChange = () => {
        setChecked(!checked)
        if(checked !== true)
        {
            setDisabled(!disabled)
        }
        else
        {
            setDisabled(true)
        }
    }

    const onSubmit = async (e) =>
    {
        e.preventDefault()
        const username = usernameRef.current.value
        const email= emailRef.current.value
        const password = passwordRef.current.value
        const checkPassword = checkPasswordRef.current.value
        try
        {
            if(password!==checkPassword) {
                alert("Pola Haslo oraz Powtórz hasło muszą być takie same!")
                return
            }
            
            const response = await fetch('http://localhost:1337/api/auth/local/register', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({"username":username,
                "email": email,
                "password": password})
            })
            if (!response.ok)
            {
                setError("Nazwa użytkownika lub email jest już zajęta.")
            }
            else
            {
                setError(null)
                const json = await response.json()
                console.log(json)
                error("Zostałeś pomyślnie zarejestrowany, teraz możesz się zalogować!")
                //SetTimeout(()=>navigate('/logowanie'),2000)  próba opóźnienia
            }  
            //To przełożyłem wyżej
            /*const json = await response.json()
            console.log(json)*/
            }
        catch
        {
            setError("Brak komunikacji z serwerem.")
        }
    }

    return(
    <div className="register">
        <h1 className="title">Rejestracja</h1>
        <form onSubmit= {onSubmit}>
            <input className='input' ref={usernameRef} type="text" name="username" placeholder="Nazwa użytkownika" minLength="3" required/><br />
            <input className='input' ref={emailRef} type="email" name="email" placeholder="Email" required/><br />
            <input className='input' ref={passwordRef} type="text" name="password" placeholder="Hasło" minLength="6" required/><br />
            <input className='input' ref={checkPasswordRef} type="text" name="chechPassword" placeholder="Powtórz hasło" minLength="6" required/><br />
            <div className="accept">
                <input type="checkbox" id="checkbox" onChange={handleChange} /> 
                <label htmlFor="checkbox">Akceptuję <Link id="text-link" to="/regulamin" target="_blank">Regulamin</Link></label><br />
            </div>
            <input className="submitButton1" type="submit" value="Zarejestruj się" disabled={disabled}/>
        </form>
    </div>
    )
    
}
export default Register