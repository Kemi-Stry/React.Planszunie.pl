import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import Loading from '../components/Loading'



const Profile = () => {
    const { id } = useParams()
    const { loading, error, data } = useFetch('http://localhost:1337/api/users/'+id)
    console.log(data)
    
    if(error)
    return(error)

    if(loading)
    return(<Loading/>)

    
    return(
        <h1>{data.username}</h1>
    )
}
export default Profile