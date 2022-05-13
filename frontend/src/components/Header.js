import './Header.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { isLogged, setUser } from '../components/Auth'
import { useState } from 'react'

const Header = () => {

const [logged, setLogged] = useState(false)

useEffect(() => {
    const isLogedin = () => {
      if (isLogged() !== true)
      {
          setLogged(false)
      }
      else
      {
          setLogged(true)
      }
    }

    isLogedin();
  }, [])

  const logout = () => {
      setUser({})
      setLogged(false)
  }

  if (!logged)
  {
    return(
        <div className="header">
              <Link className="homelink" to="/">Planszunie</Link>
              <div className="links">
                  <Link className="headerlink" to="/przegladaj">Przeglądaj gry</Link>
                  <Link className="headerlink" to="/dodawanie">Dodaj grę</Link>
              </div>
              <Link className="buttonlink" to="/logowanie"><button className='loginbutton'>Zaloguj</button></Link>
        </div>
    )
  }
 
    return(
        <div className="header">
           <Link className="homelink" to="/">Planszunie</Link>
           <Link id="profil" to="/profil/me">Mój profil</Link>
           <button className="loginbutton" onClick={logout}>Wyloguj</button>
        </div>
    )
}
export default Header