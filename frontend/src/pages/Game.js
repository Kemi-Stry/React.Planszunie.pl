import { useParams } from "react-router-dom"
import Loading from '../components/Loading'
import useFetch from "../hooks/useFetch"
import Header from "../components/Header"
import "./styles/Game.css"

const Game = () => {
    const { id }  = useParams()
    const { loading, error, data } = useFetch('http://localhost:1337/api/games/'+id+'?populate=*')

    if(error)
    return(error)

    if(loading)
    return(<Loading/>)
   
    const img = "http://localhost:1337"+data.data.attributes.icon.data.attributes.url

    return(
        <>
        <Header/>
        <div className="left">
            <img src={img} className="img" alt={data.data.attributes.title}/> 
            <div className="parameteres">
                <h4>Autorzy: {data.data.attributes.author}, {data.data.attributes.author2}</h4>
                <h4>Ilustratorzy: {data.data.attributes.artist}, {data.data.attributes.artist2}</h4>
                <h4>Wydawca: {data.data.attributes.publisher}</h4>
                <h4>Ilość graczy: {data.data.attributes.players_from}-{data.data.attributes.players_to}</h4>
                <h4>Czas gry: {data.data.attributes.time} min</h4>
            </div>

            <div className="categories">
                {data.data.attributes.categories.data.map(categories =>(
                    <ul key={categories.attributes.name}><li>{categories.attributes.name}</li></ul>
                    
                ))}
            </div>
        </div>
        <div className="right">
            <h1>{data.data.attributes.title}</h1>
            <div id="description">
                <pre className="description">{data.data.attributes.description}</pre>
            <div/>
        </div>
        </div>
        <div className="opinions">
            <h1>Recenzje</h1>
                <form onSubmit={null}>
                    <input id="opinia" type="text" placeholder="Opinia"/>
                    <input id="ocena" type="number" placeholder="Ocena/10" max={10} min={0}/>
                    <input type="submit" id="submit_opinion" value="Dodaj" />
                </form>
            {data.data.attributes.opinions.data.map(opinions =>(
                    <p key={opinions.attributes.content}>{opinions.attributes.content}</p>
                ))}
            </div>
        </>
        
    )
}
export default Game