import { useParams } from "react-router-dom"
import { useRef } from "react"
import Loading from '../components/Loading'
import useFetch from "../hooks/useFetch"
import Header from "../components/Header"
import { getToken, getID, getUserName } from "../components/Auth"
import "./styles/Game.css"

const Game = () => {
    const { id }  = useParams()
    const { loading, error, data } = useFetch('http://localhost:1337/api/games/'+id+'?populate[opinions][populate][owner][populate][0]=avatar&populate[icon][populate][1]=icon&populate[categories][populate][2]=categories&populate[Rate]][populate][3]=Rate')
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
        const userID = getID()

        await fetch('http://localhost:1337/api/opinions/?populate=*',{
            method: 'POST',
            headers: {Authorization: token, 'Content-Type': 'application/json'},
            body: JSON.stringify({data:{
                        "content": content,
                        "game": gameID,
                        "owner": userID
                    }
                }
            )
        })
        window.location.reload(false);
    }

    const calculateAvrageRate= async (actualRateList) => {
        let calculatedRate=0
        for (var i=0; i<actualRateList.data.attributes.Rate.length;i++){
            calculatedRate+=parseInt(actualRateList.data.attributes.Rate[i].rate)
        }
        calculatedRate/=actualRateList.data.attributes.Rate.length
        await fetch('http://localhost:1337/api/games/'+gameID,{
            method: 'PUT',
            headers: {Authorization: token, 'Content-Type': 'application/json'},
            body: JSON.stringify({
            data:{
                'averageRating':calculatedRate}
                })
            })
    }
    const youreRate= () => {
        for (var i=0; i<data.data.attributes.Rate.length;i++){
            if(data.data.attributes.Rate[i].user==getUserName())
                return data.data.attributes.Rate[i].rate
        }
        return ''
    }
    
    const rateChange = async (e) => {
        e.preventDefault()
        let data1 = await fetch('http://localhost:1337/api/games/'+id+'?populate=*')
        let json1 = await data1.json()
        var changed=false
        let value=e.target[0].value
        if(value){
            for (var i=0; i<json1.data.attributes.Rate.length;i++){
                if(json1.data.attributes.Rate[i].user==getUserName()){
                    json1.data.attributes.Rate[i].rate=value
                    changed=true
                    break;
                 }
            }
            if(!changed){
                json1.data.attributes.Rate.push({"user":getUserName(), "rate":value})
            }
            await fetch('http://localhost:1337/api/games/'+gameID,{
            method: 'PUT',
            headers: {Authorization: token, 'Content-Type': 'application/json'},
            body: JSON.stringify({
            data:{
                Rate:json1.data.attributes.Rate}
                })
            })
            calculateAvrageRate(json1)
        }
        window.location.reload(false);
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
                    <h2>Ocena: {data.data.attributes.averageRating}</h2>
                </div>
            </div>
            <div className="opinions">
            <form onSubmit={rateChange}>
                <input id="ocena" type="number" placeholder="Ocena/10" defaultValue={youreRate(data)} ref={rateRef} max={10} min={1} required/> 
                <input type="submit" id="submit_opinion" value="Dodaj Ocene" />
            </form>
            <h1>Recenzje</h1>
            <form onSubmit={createOpinion}>
                <textarea id="opinia" placeholder="Opinia" ref={contentRef} required></textarea>
                <input type="submit" id="submit_opinion" value="Dodaj Opinie" />
            </form>
                    {data.data.attributes.opinions.data.map(opinions =>(
                    <div className="opin" key={opinions.attributes.publishedAt}>
                        <div className="owner">
                            <img className="avatar1" src={'http://localhost:1337'+opinions.attributes.owner.data.attributes.avatar.data.attributes.url} alt={opinions.attributes.owner.data.attributes.username} />
                            <h3 className="opinRate">{opinions.attributes.owner.data.attributes.username}</h3>
                        </div>
                        <pre className="opinContent">{opinions.attributes.content}</pre>
                        <hr />
                    </div>
                    ))}
            </div>
        
        </>
  
    )

}
export default Game