import { useParams } from "react-router-dom"
import Loading from '../components/Loading'
import useFetch from "../hooks/useFetch"
import Header from "../components/Header"

const Game = () => {
    const { id }  = useParams()
    const { loading, error, data } = useFetch('http://localhost:1337/api/games/'+id+'?populate=*')
    console.log(data)

    if(error)
    return(error)

    if(loading)
    return(<Loading/>)
   
    const img = "http://localhost:1337"+data.data.attributes.icon.data.attributes.url

    return(
        <>
        <Header/>
        <div>
            <h1>{data.data.attributes.title}</h1>
            <div id="description">
                <p className="description">{data.data.attributes.description}</p>
            </div>
            <div className="img">
                <img src={img} alt={data.data.attributes.title}/> 
            </div>
            <div className="parameteres">
                <h6>Autorzy: {data.data.attributes.author} {data.data.attributes.author2}</h6>
                <h6>Ilustratorzy: {data.data.attributes.artist} {data.data.attributes.artist2}</h6>
                <h6>Wydawca: {data.data.attributes.publisher}</h6>
                <h6>Ilość graczy: {data.data.attributes.players_from}-{data.data.attributes.players_to}</h6>
                <h6>Czas gry: {data.data.attributes.time} min</h6>
            </div>

            <div className="categories">
                {data.data.attributes.categories.data.map(categories =>(
                    <h6 key={categories.attributes.name}>{categories.attributes.name}</h6>
                ))}
            </div>

            <div className="opinions">
                <form onSubmit={null}>
                    <input type="text" placeholder="Opinia"/>
                    <input type="number" placeholder="Ocena" max={10} min={0}/>
                    <input type="submit" value="Dodaj" />
                </form>
            {data.data.attributes.opinions.data.map(opinions =>(
                    <p key={opinions.attributes.content}>{opinions.attributes.content}</p>
                ))}
            </div>
        </div>
        </>
        
    )
}
export default Game