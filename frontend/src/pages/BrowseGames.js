import "./styles/BrowseGame.css"
import useFetch from "../hooks/useFetch"
import Header from "../components/Header"
import Loading from "../components/Loading"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { dblClick } from "@testing-library/user-event/dist/click"

const BrowseGames = () => {

    const [categories, setCategories] = useState({})
    
    useEffect(() => {
        const getCategories = async () =>{
            const cat = await fetch('http://localhost:1337/api/categories')
            const json = await cat.json()
            setCategories(json)   
        }  
        getCategories() 
    },[])

    const { loading, error, data } = useFetch('http://localhost:1337/api/games?populate=*')
    
    const search = (e) => {
        setSearchText(e.target.value)
    }

    const [searchText, setSearchText] = useState("")
    const [categoriesList, setCategoriesList] = useState([])

    const categoriesOnChange = (e) => {
        if(e.target.checked){
            addFilterCategory(e.target.value)
        }
        else{
            setCategoriesList(categoriesList.filter(category=> category!=e.target.value))
        }
    }
    const addFilterCategory=(e) =>{
        setCategoriesList([...categoriesList,e])
    }

    const[sortValue,setSortValue]= useState("alphabetically")

    const sortOnChange = (e) => {
        if(e.target.value=="alphabetically"){
            console.log(e.target.value)
            setSortValue('???')
        }
        else if(e.target.value=="rating"){
            console.log(e.target.value)
            setSortValue('???')
        }
    }

    if(error)
    return("error")

    if(loading)
    return(<Loading/>)
    
    return(
        <> 
            <Header/>
            <div className="options">
                <div className="filtr">
                    <h1>Sortowanie</h1>
                    <div>
                        <input type="radio" name="sort" id="alphabetically" value="alphabetically"  onClick={sortOnChange} /> 
                        <label htmlFor="checkbox">Alfabetycznie</label>
                    </div>
                    <div>
                        <input type="radio"  name="sort" id="rating" value="rating" onClick={sortOnChange}/> 
                        <label htmlFor="checkbox">Według ocen</label>
                    </div>
                </div> 
                <div className="filtr">
                    <h1>Kategorie</h1>
                    {categories.data.map(categories => (
                        <div className="list" key={categories.attributes.name}>
                            <input type="checkbox" id={categories.attributes.name} value={categories.attributes.name} onChange={categoriesOnChange}/>
                            <label htmlFor="checkbox">{categories.attributes.name}</label>
                        </div>
                    ))}
                </div>
            </div> 
           
            <div className="content">
                <input className="search" type="text" placeholder="Wyszukiwanko" value={searchText} onChange={search}/>
                <div className="games">
                {data.data.filter((game)=>{
                    if (searchText == "")
                        return game
                    else if (game.attributes.title.toLowerCase().includes(searchText.toLocaleLowerCase()))
                        return game    
                }).filter((game)=>{

                    if(categoriesList.length==0){
                        return game
                    }
                    else{
                        var convergentCategory=0;
                        for(var i=0;i<categoriesList.length;i++){
                            for(var j=0;j<game.attributes.categories.data.length;j++){
                                if(categoriesList[i]==game.attributes.categories.data[j].attributes.name){
                                    convergentCategory++
                                }
                            }
                            if(convergentCategory==categoriesList.length){
                                return game
                            }
                        }
                    }
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