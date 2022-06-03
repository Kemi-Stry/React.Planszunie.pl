import './styles/MyProfile.css'
import Header from "../components/Header"
import Loading from '../components/Loading'
import { getToken, getID } from '../components/Auth'
import { useState,useEffect } from "react"
import useFetch from "../hooks/useFetch"
import { Link } from 'react-router-dom'
import neko from '../img/neko_fly.gif'

const MyProfile = () => {
    const [userData, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const { loading2, error2, data } = useFetch('http://localhost:1337/api/games?populate=*')
    useEffect(() => {
        const fetchData = async () =>
        {
            setLoading(true)
            const token = 'Bearer '+getToken()
            const response = await fetch('http://localhost:1337/api/users/'+getID()+'?populate=*', {
                headers: {Authorization: token},
            })

            if(!response.ok){
                setError("Błąd 😿")
            }
            else{
                setError(null)
                const json = await response.json()
                setData(json)
                setLoading(false)
            }
        }  
        fetchData() 
    },[])


    if (loading){
        return (
        <>
            <Header/>
            <Loading/>
        </>
        )
    }

    if (error){
        return(
            <>
            <Header/>
            {error}
            </>
        )
    }
    let avatar

    if (userData.avatar === null){
        avatar = neko
    }
    else{
        avatar = 'http://localhost:1337'+userData.avatar.url  
    } 
    console.log(userData)  
    // console.log(userData.List[0].ListName)
    // console.log(userData.List[0].attributes)
    return(
        <>
            <Header/>
                <div className="grid">
                    <div className="left">
                    <div className="user">
                        <img className="avatar" defaultValue={neko} src={avatar} alt="avatar" />
                        <h1 className='username'>{userData.username}</h1>
                        <Link className="editProfile" to="/profil/edytuj">Edytuj profil</Link>
                    </div>
                    <h1>Listy</h1>
                    {/* {data.data.map(categories => (
                        <div className="list" key={categories.attributes.name}>
                            <input type="checkbox" id={categories.attributes.name} value={categories.attributes.name} onChange={categoriesOnChange}/>
                            <label htmlFor="checkbox">{categories.attributes.name}</label>
                        </div>
                    ))} */}
                <pre className="description">{userData.description}</pre>
                </div>
                <div className="right">
                    <div className="friends">
                        <input id='friendSearch' type="text" placeholder='Szukaj znajomych' />
                    </div>
                </div>
            </div>
        </>
    )
}
export default MyProfile