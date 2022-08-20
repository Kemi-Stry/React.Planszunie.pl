import { useParams } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import { getToken, getID, getUserName } from "../modules/Auth"
import useFetch from "../hooks/useFetch"
import Loading from '../components/Loading'
import style from "./styles/Game.module.css"

const Game = () => {
    const { id }  = useParams()
    const { loading, error, data } = useFetch('http://localhost:1337/api/games/'+id+'?populate[opinions][populate][owner][populate][0]=avatar&populate[icon][populate][1]=icon&populate[categories][populate][2]=categories&populate[Rate]][populate][3]=Rate')
    const contentRef = useRef()
    const rateRef = useRef()
    const token = 'Bearer '+getToken()

    const [listError, setListError] = useState(null)
    const [listLoading, setListLoading] = useState(true)

    const [lists, setLists] = useState({})
    useEffect(() => {
        const getList = async () =>{
            setListLoading(true)
            const cat = await fetch('http://localhost:1337/api/users/'+getID()+'?populate[lists][populate][games][populate][0]=games&populate[lists][populate][owner][populate][0]=owner')
            if(!cat.ok){
                setListError("Błąd 😿")
            }
            else{
                setListError(null)
                const listJson = await cat.json()
                setLists(listJson.lists)
                setListLoading(false)
            }
        }  
        getList() 
    },[])

    if(error || listError)
    return(error)

    if(loading || listLoading)
    return(<Loading/>)

    const img = "http://localhost:1337"+data.data.attributes.icon.data.attributes.url
    const gameID = data.data.id

    const getListId = (nr) => {
        return lists[nr].id
    }

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
            if(data.data.attributes.Rate[i].user===getUserName())
                return data.data.attributes.Rate[i].rate
        }
        return ''
    }
    const youreLists=( listNumber) => {
            for (var i=0; i<lists[listNumber].games.length;i++){
                if(lists[listNumber].games[i].id===data.data.id){
                    return true
                }
            }
        return false
    }
    const rateChange = async (e) => {
        e.preventDefault()
        let data1 = await fetch('http://localhost:1337/api/games/'+id+'?populate=*')
        let json1 = await data1.json()
        var changed=false
        let value=e.target[0].value
        if(value){
            for (var i=0; i<json1.data.attributes.Rate.length;i++){
                if(json1.data.attributes.Rate[i].user===getUserName()){
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
    const listOnChange = async (e) => {
        let gamesList = await fetch('http://localhost:1337/api/lists/'+getListId(e.target.value)+'?populate=*')
        let gameJson = await gamesList.json()
        if(e.target.checked){
            gameJson.data.attributes.games.data.push(data.data)
        }
        else{
            for(var i=0;i<gameJson.data.attributes.games.data.length;i++){
                if(gameJson.data.attributes.games.data[i].id===data.data.id){
                    gameJson.data.attributes.games.data.splice(i,1)
                }
            }   
        }
        await fetch('http://localhost:1337/api/lists/'+getListId(e.target.value),{
            method: 'PUT',
            headers: {Authorization: token, 'Content-Type': 'application/json'},
            body: JSON.stringify({
                "data":{ "games":gameJson.data.attributes.games.data}
            })
        })
    }
    
   var number=-1
   var half=true;
    function takeNumber(){
        if(half){
            half=false
            number++
        }  
        else{
            half=true
        }
        return number
    }
         
    return(
        <>
            <div className={style.flexgame}>
                <div className={style.left}>
                    <img src={img} className={style.img} alt={data.data.attributes.title}/> 
                    <h1>Ocena: {data.data.attributes.averageRating}/10</h1>
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
                <div className={style.right}>
                    <h1>{data.data.attributes.title}</h1>
                    <div id="description">
                        <pre className={style.description}>{data.data.attributes.description}</pre>
                    </div>
                   <div>
                   <h1>Dodaj do listy:</h1>
                        {lists.map(list=>(
                        <div className={style.list} key={list.ListName}>
                            <input type="checkbox" id={list.ListName} value={takeNumber()} defaultChecked={youreLists(takeNumber())} onChange={listOnChange}/>
                            <label htmlFor="checkbox">{list.ListName}</label>
                            </div>
                             ))}
                   </div> 
                </div>
            </div>
            <div className={style.opinions}>
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
                <div className={style.opin} key={opinions.attributes.publishedAt}>
                    <div className={style.owner}>
                        <img className={style.avatar} src={'http://localhost:1337'+opinions.attributes.owner.data.attributes.avatar.data.attributes.url} alt={opinions.attributes.owner.data.attributes.username} />
                        <h3 className={style.opinRate}>{opinions.attributes.owner.data.attributes.username}</h3>
                    </div>
                    <pre className={style.opinContent}>{opinions.attributes.content}</pre>
                    <hr />
                </div>
            ))}
            </div>
        </>
  
    )

}
export default Game