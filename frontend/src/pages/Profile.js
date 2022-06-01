import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import Loading from '../components/Loading'
import './styles/Profile.css'
import Header from '../components/Header'
import neko from '../img/neko_fly.gif'


const Profile = () => {
    const { id } = useParams()
    const { loading, error, data } = useFetch('http://localhost:1337/api/users/'+id+'?populate=*')
    console.log(data)
    
    if(error)
    return(error)

    if(loading)
    return(<Loading/>)

    let avatar

    if (data.avatar === null)
        avatar = neko
    else
        avatar = 'http://localhost:1337'+data.avatar.url    
    
    return(
        <>
        <Header/>
        <div className="user">
            <img className="avatar" src={avatar} alt="avatar" />
            <h1 className='username'>{data.username}</h1>
        </div>
        <pre className="description">{data.description}</pre>
        </>
        
    )
}
export default Profile