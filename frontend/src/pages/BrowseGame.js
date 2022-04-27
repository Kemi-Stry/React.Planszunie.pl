import "./BrowseGame.css"
import useFetch from "../hooks/useFetch"
import Header from "../components/Header"

const BrowseGame = () => {
    
    const { loading, error, data } = useFetch('http://localhost:1337/api/games/')
    console.log(data)

    if(error)
    return(error)

    if(loading)
    return(<h1>ładowanie</h1>)

    return(
        <>
       {data.map(game => (
        <div key={game.id}>
            <h1>{game.title}</h1>
        </div>
          ))}
        </>
    )
        
    
}
export default BrowseGame