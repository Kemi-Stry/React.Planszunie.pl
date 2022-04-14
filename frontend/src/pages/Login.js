import './Login.css'
import { Link, Navigate } from 'react-router-dom'
import { useRef } from 'react'

const Login = () =>
{

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
        const json = await response.json()
        console.log(json)
            //Navigate('/home')
        }
        catch
        {
            alert("error")
        }
    }
   

    return(
        <div className="login">
            <h1 className="title">Logowanie</h1>
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