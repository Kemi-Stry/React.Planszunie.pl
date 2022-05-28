import { useParams } from "react-router-dom"
import { useRef } from "react"
import Loading from '../components/Loading'
import useFetch from "../hooks/useFetch"
import Header from "../components/Header"
import { getToken, getID } from "../components/Auth"
import "./styles/Game.css"

const Game = () => {
    const { id }  = useParams()
    const { loading, error, data } = useFetch('http://localhost:1337/api/games/'+id+'?populate=*')
    const contentRef = useRef()
    const rateRef = useRef()
    const token = 'Bearer '+getToken()
   


    if(error)
    return(error)

    if(loading)
    return(<Loading/>)
   
    const img = "http://localhost:1337"+data.data.attributes.icon.data.attributes.url
    const gameID = data.data.id
    
    
    const createOpinion = async (e) => {
        e.preventDefault()
        const content = contentRef.current.value
        const rate = rateRef.current.value
        const userID = getID()

        const postOpinion = await fetch('http://localhost:1337/api/opinions',{
            method: 'POST',
            headers: {Authorization: token, 'Content-Type': 'application/json'},
            body: JSON.stringify({data:{
                        "content": content,
                        "rate": rate,
                        "game": gameID,
                        "owner": userID
                    }
                }
            )
            
        })
        window.location.reload(false);
    }

    const rateChange = (e) => {
        console.log("value changed")
        //jeżeli nie było oceny
        //
        
        // ocenaużytkownika?=e.target.value
        //wywołanie funkcji obliczającą średnią
    }

    return(
        <>
            <Header/>
            <div className="flex-game">
                <div className="left">
                    <img src={img} className="img" alt={data.data.attributes.title}/> 
                    <h4>Autorzy: {data.data.attributes.authors}</h4>
                    <h4>Ilustratorzy: {data.data.attributes.artists}</h4>
                    <h4>Wydawca: {data.data.attributes.publisher}</h4>
                    <h4>Ilość graczy: {data.data.attributes.players_from}-{data.data.attributes.players_to}</h4>
                    <h4>Czas gry: {data.data.attributes.time_from}-{data.data.attributes.time_to} min</h4>
                    <h4>Wiek: {data.data.attributes.age}</h4>
                    <h2>Kategorie</h2>
                    {data.data.attributes.categories.data.map(categories =>(
                        <ul key={categories.attributes.name}><li>{categories.attributes.name}</li></ul>
                    ))}
                </div>
                <div className="right">
                    <h1>{data.data.attributes.title}</h1>
                    <div id="description">
                        <pre className="description">{data.data.attributes.description}</pre>
                    </div>
                </div>
            </div>
            <div className="opinions">
            <input id="ocena" type="number" placeholder="Ocena/10" onChange={rateChange} ref={rateRef} max={10} min={0} required/>
            <h1>Recenzje</h1>
            <form onSubmit={createOpinion}>
                <textarea id="opinia" placeholder="Opinia" ref={contentRef} required></textarea>
                <input type="submit" id="submit_opinion" value="Dodaj" />
            </form>
                    {data.data.attributes.opinions.data.map(opinions =>(
                    <div className="opin" key={opinions.attributes.publishedAt}>
                        <h3 className="opinRate">{opinions.attributes.rate}/10</h3>
                        <pre className="opinContent">{opinions.attributes.content}</pre>
                    </div>
                    ))}
            </div>
        
        </>
  
    )
}
export default Game