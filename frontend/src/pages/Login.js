import { Link, useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'
import { setUser } from '../modules/Auth' 
import style from './styles/Login.module.css'

const Login = () =>
{
    let navigate = useNavigate()
    const [error, setError] = useState(null)
    const indentifierRef = useRef()
    const passwordRef = useRef()

    const onSubmit = async (e) =>
    {
        e.preventDefault()
        const identifier = indentifierRef.current.value
        const password = passwordRef.current.value
        const data = {"identifier": identifier, "password": password}

      try
        {
            const response = await fetch('http://localhost:1337/api/auth/local', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })

            if (!response.ok)
            {
                setError("Błędne dane logowania")
            }
            else
            {
                setError(null)
                const json = await response.json()
                setUser(json)
                navigate('/')
            }    
        }
        catch
        {
            setError("Brak komunikacji z serwerem")
        }
    }
    
    return(
        <div className={style.wrapper}>
        <div className={style.login}>
            <h1 className={style.title}>Logowanie</h1>
                <h3 className={style.error}>{error}</h3>
            <form onSubmit= {onSubmit}>
                <input className={style.input} ref={indentifierRef} type="text" name="identifier" placeholder="Nazwa użytkownika"/><br />
                <input className={style.input} ref={passwordRef} type="password" name="password" placeholder="Hasło"/><br />
                <input className={style.submitButton} name='submit' type="submit" value="Zaloguj"/>
            </form>
            <div className={style.link}>
                <h6>Nie masz konta?</h6>
                <Link to="/rejestracja"><h6 className={style.textLink}>Zarejestruj się!</h6></Link>
            </div>
        </div>
        </div>
    )
}

export default Login