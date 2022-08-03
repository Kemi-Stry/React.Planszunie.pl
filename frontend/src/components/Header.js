import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { isLogged } from '../modules/Auth'
import dice from '../img/dice.png'
import style from './styles/Header.module.css'

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
      window.localStorage.removeItem('user')
      setLogged(false)
    }

    if (!logged)
    {
        return(
            <div className={style.header}>
                <Link to="/"><img className={style.dice} src={dice} alt="dice"/></Link>
                <Link className={style.homelink} to="/">Planszunie</Link>
                <div className={style.links}>
                    <Link className={style.headerlink} to="/przegladaj">Przeglądaj gry</Link>
                    <Link className={style.headerlink} to="/dodawanie">Dodaj grę</Link>
                </div>
                <Link className={style.buttonlink} to="/logowanie"><button className={style.loginbutton}>Zaloguj</button></Link>
            </div>
        )
    }
 
    return(
        <div className={style.header}>
           <Link to="/"><img className={style.dice} src={dice}/></Link>
           <Link className={style.homelink} to="/">Planszunie</Link>
           <div className={style.links}>
                  <Link className={style.headerlink} to="/przegladaj">Przeglądaj gry</Link>
                  <Link className={style.headerlink} to="/dodawanie">Dodaj grę</Link>
            </div>
           <Link className={style.profil} to="/profil/me">Mój profil</Link>
           <button className={style.loginbutton} onClick={logout}>Wyloguj</button>
        </div>
    )
}
export default Header