import './styles/MyProfile.css'
import Header from "../components/Header"
import Loading from '../components/Loading'
import { getToken, getID } from '../components/Auth'
import { useState, useEffect, useRef } from "react"
import useFetch from "../hooks/useFetch"
import { Link } from 'react-router-dom'
import neko from '../img/neko_fly.gif'

const MyProfile = () => {
    const [serachFriend, setSerachFriend] = useState('')
    const [userData, setUserData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const newListRef = useRef()
    const { loading2, error2, data } = useFetch('http://localhost:1337/api/users')
    useEffect(() => {
        const fetchData = async () =>
        {
            setLoading(true)
            const token = 'Bearer '+getToken()
            const response = await fetch('http://localhost:1337/api/users/'+getID()+'?populate[lists][populate][games][populate][0]=icon&populate[avatar][populate][1]=avatar', {
                headers: {Authorization: token},
            })
            if(!response.ok){
                setError("Błąd 😿")
            }
            else{
                setError(null)
                const json = await response.json()
                setUserData(json)
                setLoading(false)
            }
        }  
        fetchData() 
    },[])
    const createOpinion = async (e) => {
        e.preventDefault()
        const newList = newListRef.current.value
        const response = await fetch('http://localhost:1337/api/lists', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"data":{
                "ListName": newList,
                "owner": getID()
            }})
        })  
        window.location.reload(false);
    }
    const serachFriends = (e) => {
        setSerachFriend(e.target.value)
    }

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
                <pre className="description">{userData.description}</pre>
                <h1>Listy</h1>
                        {userData.lists.map(list => (
                        <div className="content">
                             <div className="games">
                            <div key={list.ListName}>
                                <h3>{list.ListName}</h3>
                                {list.games.map(game => (
                                <Link key={game.title} to={"/gra/"+game.id}>
                                    <div className="game">
                                        <img className="cover" src={"http://localhost:1337"+game.icon.url}/>
                                    </div>
                                </Link>))}
                            </div>
                        </div>
                    </div>
                        ))}
              
                <form onSubmit={createOpinion}>
                    <input type="text" placeholder="newList" ref={newListRef} required></input>
                    <input type="submit" id="submit_opinion" value="Dodaj Liste" />
                </form>
                    
                </div>
                <div className="right">
                    <div className="friends">
                        <input id='friendSearch' type="text" placeholder='Szukaj znajomych' onChange={serachFriends}/>
                        {data.filter( (user)=>{
                        if (user.email.toLowerCase().includes(serachFriend.toLowerCase()) && serachFriend!='') 
                                return user    
                        }).map(user => (
                            <h2 key={user.username}>{user.username}</h2>
                        ))}
                        </div>
                </div>
            </div>
        </>
    )
}
export default MyProfile