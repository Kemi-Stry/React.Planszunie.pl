import './Login.css'
import { Link } from 'react-router-dom'
import usePostRequest from '../hooks/usePostRequest'


const Login = () =>
{
    return(
        <div className="login">
            <h1 className="title">Logowanie</h1>
            <form>
                <input className='input' type="text" name="identifier" placeholder="Nazwa użytkownika"/><br />
                <input className='input' type="password" name="password" placeholder="Hasło"/><br />
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