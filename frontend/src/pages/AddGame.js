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
        <div className="form">
            <form onSubmit={onSubmit}>

            </form>
        </div>
        </>
    )
}
export default AddGame