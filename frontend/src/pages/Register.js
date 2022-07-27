import { Link, useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'
import style from './styles/Register.module.css'

const Register = () =>
{   
    let navigate = useNavigate()
    const [error, setError] = useState(null)
    const [checked, setChecked] = useState(false)
    const [disabled, setDisabled] = useState(true)
    const [success, setSuccess] = useState(null)
    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const checkPasswordRef = useRef()

    if(success !== null)
    return(<h1>{success}</h1>)
    
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
                setSuccess("Konto zostało stworzone, za chwilę nastąpi przekierowanie")
                setTimeout(()=>navigate('/logowanie'),3000)
            }  
        }
        catch
        {
            setError("Brak komunikacji z serwerem.")
        }
    }

    return(
        <div className={style.wrapper}>
        <div className={style.register}>
            <h1 className={style.title}>Rejestracja</h1>
            <form onSubmit = {onSubmit}>
                <h3 className={style.error}>{error}</h3>
                <input ref={usernameRef} className={style.input} type="text" name="username" placeholder="Nazwa użytkownika" minLength="3" required/><br />
                <input ref={emailRef} className={style.input} type="email" name="email" placeholder="Email" required/><br />
                <input ref={passwordRef} className={style.input} type="password" name="password" placeholder="Hasło" minLength="6" required/><br />
                <input ref={checkPasswordRef} className={style.input} type="password" name="chechPassword" placeholder="Powtórz hasło" minLength="6" required/><br />
            <div className={style.accept}>
                <input type="checkbox" onChange={handleChange} /> 
                <label htmlFor="checkbox">Akceptuję <Link id="text-link" to="/regulamin" target="_blank">Regulamin</Link></label><br />
            </div>
            <input className={style.submitButton} type="submit" value="Zarejestruj się" disabled={disabled}/>
        </form>
    </div>
    </div>
    )
    
}
export default Register