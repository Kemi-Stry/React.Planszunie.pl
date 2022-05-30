import { useParams } from "react-router-dom"
import { useRef } from "react"
import Loading from '../components/Loading'
import useFetch from "../hooks/useFetch"
import Header from "../components/Header"
import { getToken, getID, getUserName } from "../components/Auth"
import "./styles/Game.css"

const Game = () => {
    const { id }  = useParams()
    const { loading, error, data } = useFetch('http://localhost:1337/api/games/'+id+'?populate=*')
    const contentRef = useRef()
    const rateRef = useRef()
    const token = 'Bearer '+getToken()
    // var rate = []

  


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

        const postOpinion = await fetch('http://localhost:1337/api/opinions/?populate=*',{
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

    const rateChange = async (e) => {
        let data1 = await fetch('http://localhost:1337/api/games/'+id+'?populate=*')
        let json1 = await data1.json()
        console.log(json1.data.attributes.Rate)
        var changed=false
        if(e.target.value){
            //zmiana
            for (var i=0; i<json1.data.attributes.Rate.length;i++){
                if(json1.data.attributes.Rate[i].user==getUserName()){
                    console.log("change")
                    json1.data.attributes.Rate[i].rate=e.target.value
                    changed=true
                    break;
                 }
             }
             //dodanie
             if(!changed){
                 console.log("new")
                 json1.data.attributes.Rate.push({"user":getUserName(), "rate":e.target.value})
            }
            const postOpinion = await fetch('http://localhost:1337/api/games/'+gameID,{
                method: 'PUT',
                headers: {Authorization: token, 'Content-Type': 'application/json'},
                body: JSON.stringify({
                data:{
                    Rate:json1.data.attributes.Rate}
                    })
                })
        }
     
       

        // const postOpinion = await fetch('http://localhost:1337/api/games/'+gameID,{
        //     method: 'PUT',
        //     headers: {Authorization: token, 'Content-Type': 'application/json'},
        //     body: JSON.stringify({data:{
        //         Rate:[{ 
        //             "user": getUserName(),
        //              "rate": e.target.value}
        //            ]}
        //      })
        // })


        // console.log(typeof(data.data.attributes.Rate[1].user))
        // console.log(data.data.attributes.Rate[1].user)
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
                    <h2>Ocena: {data.data.attributes.rating}</h2>
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