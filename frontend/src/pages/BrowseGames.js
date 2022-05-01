import "./BrowseGame.css"
import useFetch from "../hooks/useFetch"
import Header from "../components/Header"
import Loading from "../components/Loading"

const BrowseGames = () => {
    
    const { loading, error, data } = useFetch('http://localhost:1337/api/games')
    console.log(data)

    if(error)
    return(error)

    if(loading)
    return(<Loading/>)

    return(
        <> 
            <Header/>
               <div className="options">
                    <div className="filtr">
                        <h1>Kategorie</h1>
                        <input type="checkbox" />
                        <input type="checkbox" />
                    </div>

                    <div className="filtr">
                        <h1>filtry</h1>
                        <input type="checkbox" /> 
                        <input type="checkbox" /> 
                        <input type="checkbox" /> 
                    </div> 
                </div> 
           
            <div className="content">
            <input className="search" type="text" placeholder="Wyszukiwanko"/>
                <div className="games">
                {data.map(game => (
                    <div className="game" key={game.title}>
                        <h1>{game.title}</h1>
                    </div>
                ))}
                </div>
            </div>
           
        </>
    )
}
export default BrowseGames