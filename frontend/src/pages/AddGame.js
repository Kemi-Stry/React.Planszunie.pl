import './styles/AddGame.css'
import { Link, useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'
import Header from '../components/Header'
import { getToken } from '../components/Auth'

const AddGame = () => {
    const titleRef = useRef()  
    const decritionRef = useRef()
    const authorRef = useRef()
    const illustratorRef = useRef()
    const publisherRef = useRef()
    const playerFromRef = useRef()
    const playerToRef = useRef()
    const timeFromRef = useRef()
    const timeToRef = useRef()
    const [error, setError] = useState(null)

    const onSubmit = async (e) =>
    {
        e.preventDefault()
        const title = titleRef.current.value
        const description = decritionRef.current.value
        const author = authorRef.current.value
        const illustrator = illustratorRef.current.value
        const publisher = publisherRef.current.value
        const playerFrom = playerFromRef.current.value
        const playerTo = playerToRef.current.value
        const timeFrom = timeFromRef.current.value
        const timeTo = timeToRef.current.value
        const data = {} //pola w Game
        const token = "Bearer "+getToken()
        

        try
        {
            const response = await fetch('http://localhost:1337/api/games', {
                method: 'POST',
                headers: {Authorization: token},
                body: JSON.stringify(data)
            })

            if (!response.ok)
            {
                setError("Coś poszło nie tak")
            }
            else
            {
                setError(null)
            }    
        }
        catch
        {
            setError("Brak komunikacji z serwerem")
        }
    }

    return(
        <>
        <Header/>
        
            <form onSubmit={onSubmit}>
                <div className="form">
                    <div className="basics">
                        <input type="file" name="image" />
                        <input type="text" placeholder='Tytył' required/> <br />
                        <textarea name="" id="" cols="30" rows="10" placeholder='Opis' required></textarea>
                    </div>  
                    <div className="parameters">
                        <label htmlFor="authors">Autorzy:</label><br />
                        <input type="text" name='authors' className='long' placeholder='Autor1, Autor2...'/><br />
                        <label htmlFor="illustrators">Ilustratorzy:</label><br />
                        <input type="text" name='illustrators' className='long' placeholder='Ilustrator1, Ilustrator2...'/><br />
                        <label htmlFor="publisher">Wydawca:</label><br />
                        <input type="text" name='publisher' className='long'/><br />
                        <label htmlFor="number">Ilość graczy:</label><br />
                        <input type="text" name='number' className='short' placeholder='od'/>
                        <input type="text" name='number' className='short' placeholder='do'/><br />
                        <label htmlFor="number">Czas gry:</label><br />
                        <input type="text" className='short' name='time' placeholder=''/> <br />
                    </div>
                </div>
                <input type="submit" value="Dodaj"/>
            </form>
        
        </>
    )
}
export default AddGame