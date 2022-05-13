import "./styles/BrowseGame.css"
import useFetch from "../hooks/useFetch"
import Header from "../components/Header"
import Loading from "../components/Loading"
import { Link } from "react-router-dom"
import { useState } from "react"

const BrowseGames = () => {
    
    const { loading, error, data } = useFetch('http://localhost:1337/api/games?populate=*')
    console.log(data)

    const search = (e) => {
        setSearchText(e.target.value)
    }

    const [searchText, setSearchText] = useState("")

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
                <input className="search" type="text" placeholder="Wyszukiwanko" value={searchText} onChange={search}/>
                <div className="games">
                {data.data.filter((game)=>{
                    if (searchText == "")
                        return game
                    else if (game.attributes.title.toLowerCase().includes(searchText))
                        return game    
                }).map(game => (
                    <Link key={game.attributes.title} to={"/gra/"+game.id}>
                        <div className="game">
                            <img className="cover" src={"http://localhost:1337"+game.attributes.icon.data.attributes.url} alt={game.attributes.title}/>
                        </div>
                    </Link>
                ))}
                </div>
            </div>
        </>
    )
}
export default BrowseGames