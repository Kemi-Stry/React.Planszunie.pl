import Loading from "../components/Loading"
import usePostRequest from "../hooks/usePostRequest"
import './Register.css'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import * as React from 'react';




const Register = () =>
{
    const indentifierRef = useRef()
    const emalilRef = useRef()
    const passwordRef = useRef()
    const checkPasswordRef = useRef()
    const [checked, setChecked] = React.useState(false);
    

    const handleChange = () => {
      setChecked(!checked);
    };
    const onSubmit = async (e) =>
    {
        e.preventDefault()
        const identifier = indentifierRef.current.value
        const email= emalilRef.current.value
        const password = passwordRef.current.value
        const checkPassword = checkPasswordRef.current.value
        const data = {"identifier": identifier, "email": email,"password": password,"checkPassword": checkPassword}

        try
        {
            if(!checked) {
                alert("Musisz zaakceptować regulamin")
                return
            }
            if(password!=checkPassword) {
                alert("Pola: Haslo oraz Powtórz hasło muszą być takie same!")
                return
            }
            alert("Przycisk jeszcze nie dziala")
          /*  const response=await usePostRequest('http://localhost:1337/api/users',{
                method: 'POST',
               body: JSON.stringify(data)
               })*/
   
        }
        catch
        {
            alert("error")
        }
    }

    return(
    <div className="register">
        <h1 className="title">Rejestracja</h1>
        <form onSubmit= {onSubmit}>
            <input className='input' ref={indentifierRef} type="text" name="identifier" placeholder="Nazwa użytkownika"/><br />
            <input className='input' ref={emalilRef} type="text" name="email" placeholder="Email"/><br />
            <input className='input' ref={passwordRef} type="text" name="password" placeholder="Hasło"/><br />
            <input className='input' ref={checkPasswordRef} type="text" name="chechPassword" placeholder="Powtórz hasło"/><br />
            <div className="link">
                <input type="checkbox" checked={checked}  onChange={handleChange}/> 
                <h6 className='text'>Akceptuję</h6>
                <Link to="/regulamin"><h6 className='text' id='text-link'>Regulamin</h6></Link>
            </div>
            <input className="submitButton" type="submit" value="Zarejestruj się"/>
        </form>
    </div>
    )
    
}
export default Register