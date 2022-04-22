import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'
import  {setUser}  from '../components/Auth' 

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

      
        const response = await fetch('http://localhost:1337/api/auth/local', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
        })

        if (!response.ok)
        {
            setError("Błąd logowania")
        }
        else
        {
            setError(null)
            const json = await response.json()
            console.log(json)
            setUser(json)
            navigate('/')
        }    
    }
    
    return(
        <div className="login">
            <h1 className="title">Logowanie</h1>
                <h3>{error}</h3>
            <form onSubmit= {onSubmit}>
                <input className='input' ref={indentifierRef} type="text" name="identifier" placeholder="Nazwa użytkownika"/><br />
                <input className='input' ref={passwordRef} type="password" name="password" placeholder="Hasło"/><br />
                <input className="submitButton" type="submit" value="Zaloguj"/>
            </form>
            <div className="link">
                <h6 className='text'>Nie masz konta?</h6>
                <Link to="/rejestracja"><h6 className='text' id='text-link'>Zarejestruj się!</h6></Link>
            </div>
        </div>
    )
}
export default Login