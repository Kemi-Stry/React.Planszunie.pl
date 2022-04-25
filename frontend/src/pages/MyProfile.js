import Header from "../components/Header"
import Loading from '../components/Loading'
import { getToken } from '../components/Auth'
import { useState,useEffect } from "react"

const MyProfile = () => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () =>
        {
            setLoading(true)
            const token = 'Bearer '+getToken()
            const response = await fetch('http://localhost:1337/api/users/me', {
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

    if (loading === true)
    {
        return (
        <>
            <Header/>
            <Loading/>
        </>
        )
    }

    if (error === true)
    {
        return(
            <>
            <Header/>
            {error}
            </>
        )
    }

    return(
        <>
        <Header/>
        <h1>{data.username}</h1>

        </>

    )
}
export default MyProfile