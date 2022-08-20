import { useState, useEffect, useRef } from "react"
import { Link } from 'react-router-dom'
import { getToken, getID } from '../modules/Auth'
import useFetch from "../hooks/useFetch"
import Loading from '../components/Loading'
import neko from '../img/neko_fly.gif'
import style from './styles/MyProfile.module.css'

const MyProfile = () => {
    const [serachFriend, setSerachFriend] = useState('')
    const [userData, setUserData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const newListRef = useRef()
    const { loading2, error2, data } = useFetch('http://localhost:1337/api/users?populate=*')
    useEffect(() => {
        const fetchData = async () =>
        {
            setLoading(true)
            const token = 'Bearer '+getToken()
            const response = await fetch('http://localhost:1337/api/users/'+getID()+'?populate[lists][populate][games][populate][0]=icon&populate[avatar][populate][1]=avatar&populate[friends][populate][user][populate][avatar][populate][2]=avatar', {
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

    console.log(userData) 
    const createOpinion = async (e) => {
        e.preventDefault()
        const newList = newListRef.current.value
        await fetch('http://localhost:1337/api/lists', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"data":{
                "ListName": newList,
                "owner": getID()
            }})
        })  
        window.location.reload(false);
    }

    const addFriend = async (e) => {
        e.preventDefault()
        await fetch('http://localhost:1337/api/friends', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"data":{
                "accepted": true,
                "user": e.target.value,
                "owner": getID()
            }})
        })

        await fetch('http://localhost:1337/api/friends', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"data":{
                "accepted": true,
                "user": getID(),
                "owner": e.target.value
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
            <Loading/>
        </>
        )
    }

    if (error){
        return(
            <>
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
                <div className={style.grid}>
                    <div className={style.left}>
                    <div className={style.user}>
                        <img className={style.avatar} defaultValue={neko} src={avatar} alt="avatar" />
                        <h1 className={style.username}>{userData.username}</h1>
                        <Link className={style.editProfile} to="/profil/edytuj">Edytuj profil</Link>
                    </div>
                <pre className={style.description}>{userData.description}</pre>
                <h1>Listy</h1>
                        {userData.lists.map(list => (
                            <div key={list.ListName}>
                            <h3>{list.ListName}</h3>
                             <div key={list.ListName} className={style.games}>
                                {list.games.map(game => (
                                <Link key={game.title} to={"/gra/"+game.id}>
                                    <div className={style.game}>
                                        <img className={style.coverMini} alt='covet' src={"http://localhost:1337"+game.icon.url}/>
                                    </div>
                                </Link>))}
                            </div>
                            </div>
                        ))}
              
                <form onSubmit={createOpinion}>
                    <input type="text" placeholder="newList" ref={newListRef} required></input>
                    <input type="submit" id="submit_opinion" value="Dodaj Liste" />
                </form>
                    
                </div>
                <div className={style.right}>
                    <div className={style.friends}>
                        <div className={style.search}>
                        <h2>Szukaj znajomych</h2>
                        <input id='friendSearch' type="text" placeholder='Podaj email znajomego' onChange={serachFriends}/>
                        {data.filter((user) => {
                        if (user.email.toLowerCase().includes(serachFriend.toLowerCase()) && serachFriend!=='') 
                            return user    
                        }).map(user => (
                            <div>
                                <img className={style.avatarMini} src={'http://localhost:1337'+user.avatar.url} alt='user.username}'/>
                                <h2 key={user.username}>{user.username}</h2>
                                <button id="submit_opinion"  value={user.id} onClick={addFriend}>Dodaj znajomego</button>
                            </div>
                            
                        ))}
                        </div>
                        <div className={style.myfriends}>
                            <h2>Moi znajomi</h2>
                            {userData.friends.map(user=> (
                                <div className={style.friendo} key={user.id}>
                                <img className={style.avatarMini} src={'http://localhost:1337'+user.user.avatar.url} alt='user.username}'/>
                                <Link to={'/profil/'+user.user.id}><h2>{user.user.username}</h2></Link>
                                </div>
                            ))}
                        </div>
                    </div>
                        
                </div>
            </div>
        </>
    )
}
export default MyProfile