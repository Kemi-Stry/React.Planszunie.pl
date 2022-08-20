import { useParams } from "react-router-dom"
import { getToken, getID } from '../modules/Auth'
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import useFetch from "../hooks/useFetch"
import Loading from '../components/Loading'
import neko from '../img/neko_fly.gif'
import style from './styles/Profile.module.css'


const Profile = () => {
    const [userData, setUserData] = useState(null)
    const [error2, setError2] = useState(null)
    const [loading2, setLoading2] = useState(true)
    const { id } = useParams()
    const { loading, error, data } = useFetch('http://localhost:1337/api/users/'+id+'?populate=*')
    console.log(data)

    useEffect(() => {
        const fetchData = async () =>
        {
            setLoading2(true)
            const token = 'Bearer '+getToken()
            const response = await fetch('http://localhost:1337/api/users/'+getID()+'?populate[lists][populate][games][populate][0]=icon&populate[avatar][populate][1]=avatar', {
                headers: {Authorization: token},
            })
            if(!response.ok){
                setError2("Błąd 😿")
            }
            else{
                setError2(null)
                const json = await response.json()
                setUserData(json)
                setLoading2(false)
            }
        }  
        fetchData() 
    },[])
    if(error || error2)
    return(error)

    if(loading || loading2)
    return(<Loading/>)

    let avatar

    if (data.avatar === null)
        avatar = neko
    else
        avatar = 'http://localhost:1337'+data.avatar.url    
        
    return(
        <>
        <div className={style.user}>
            <img className={style.avatar} src={avatar} alt="avatar" />
            <h1 className={style.username}>{data.username}</h1>
        </div>
        <pre className={style.description}>{data.description}</pre>
        <h1>Listy</h1>
                        {userData.lists.map(list => (
                             <div className={style.content}>
                             <div className={style.games}>
                            <div key={list.ListName}>
                                <h3>{list.ListName}</h3>
                                {list.games.map(game => (
                                <Link key={game.title} to={"/gra/"+game.id}>
                                    <div className={style.game}>
                                        <img className={style.cover} src={"http://localhost:1337"+game.icon.url}/>
                                    </div>
                                </Link>))}
                            </div>
                            </div>
                    </div>
                        ))}
        </>
        
        
    )
}
export default Profile