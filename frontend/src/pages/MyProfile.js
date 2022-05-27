import './styles/MyProfile.css'
import Header from "../components/Header"
import Loading from '../components/Loading'
import { getToken, getID } from '../components/Auth'
import { useState,useEffect } from "react"
import { Link } from 'react-router-dom'
import neko from '../img/neko_fly.gif'

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

        let avatar

    if (data.avatar === null)
        avatar = neko
    else
        avatar = 'http://localhost:1337'+data.avatar.url  

    var gamesList=[];


    return(
        <>
        <Header/>
        <div className="user">
            <img className="avatar" defaultValue={neko} src={avatar} alt="avatar" />
            <h1 className='username'>{data.username}</h1>
            <Link className="editProfile" to="/profil/edytuj">Edytuj profil</Link>
        </div>
            
        <pre className="description">{data.description}</pre>



        {/* <div className="content">
            <input className="search" type="text" placeholder="listy" value={searchText} onChange={search}/>
            <div className="games">
            {data.data.filter((game)=>{
                for(var i=0;i<gamesList.length;i++){
                    if(gamesList[i]==game.attributes.title){
                        return game
                    }
                }
                }).map(game => (
                    <Link key={game.attributes.title} to={"/gra/"+game.id}>
                        <div className="game">
                            <img className="cover" src={"http://localhost:1337"+game.attributes.icon.data.attributes.url} alt={game.attributes.title}/>
                        </div>
                    </Link>
                ))}
            </div>
        </div> */}

        </>
    )
}
export default MyProfile