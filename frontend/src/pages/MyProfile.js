import './styles/MyProfile.css'
import Header from "../components/Header"
import Loading from '../components/Loading'
import { getToken, getID } from '../components/Auth'
import { useState,useEffect } from "react"
import { Link } from 'react-router-dom'


const MyProfile = () => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

   

    useEffect(() => {
        const fetchData = async () =>
        {
            setLoading(true)
            const token = 'Bearer '+getToken()
            const response = await fetch('http://localhost:1337/api/users/'+getID()+'?populate=*', {
                headers: {Authorization: token},
            })

            if(!response.ok)
            {
                setError("Błąd 😿")
            }
            else
            {
                setError(null)
                const json = await response.json()
                setData(json)
                setLoading(false)
            }
        }  
        fetchData() 
    },[])
    console.log(data)

    

    if (loading)
    {
        return (
        <>
            <Header/>
            <Loading/>
        </>
        )
    }

    if (error)
    {
        return(
            <>
            <Header/>
            {error}
            </>
        )
    }
    const avatar = 'http://localhost:1337'+data.avatar.url

    return(
        <>
        <Header/>
        <div className="user">
            <img className="avatar" src={avatar} alt="avatar" />
            <h1 className='username'>{data.username}</h1>
            <Link className="editProfile" to="/profil/edytuj">Edytuj profil</Link>
        </div>
            
        <pre className="description">{data.description}</pre>
        </>

    )
}
export default MyProfile