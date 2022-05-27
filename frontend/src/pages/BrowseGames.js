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
        const getCategories = async () =>
        {
            const cat = await fetch('http://localhost:1337/api/categories')
            const json = await cat.json()
            setCategories(json)   
        }  
        getCategories() 
    },[])
<<<<<<< HEAD
=======
    console.log(categories)
    
<<<<<<< Updated upstream
=======
>>>>>>> ec34d00e92039f89da0c04a6e1c08da230561110
>>>>>>> Stashed changes
    const { loading, error, data } = useFetch('http://localhost:1337/api/games?populate=*')
    
    const search = (e) => {
        setSearchText(e.target.value)
    }
    const [searchText, setSearchText] = useState("")

<<<<<<< Updated upstream
=======
<<<<<<< HEAD
    // var list =[];
    // const check = (e) => {
    //     list.push(e.target.value)
    //     console.log(list)
    // }
    // const [checkBoxe, setCheckBox] = useState("") //?
    // var valueList =document.getElementById('valueList');
    // var text='<span> you have selected : /<span>'
    // var listArrays=[];

    var checkboxes=document.querySelectorAll("#checkbox");
    const handleChange = () => {
        if(checkboxes.length==0){
            checkboxes=document.querySelectorAll("#checkbox");
            console.log(checkboxes.length)
            for(var checkbox of checkboxes) {
                checkbox.addEventListener('click',function(){
                    if(this.checked == true){
                        console.log('check '+this.value);
                    } else {
                        console.log('you unchecked '+this.value);
                    }
                })
                checkbox.addEventListener()
            }
        }
    }

    // var checkboxes=document.querySelectorAll("#checkbox");
    //     for(var checkbox of checkboxes) {
    //         checkbox.addEventListener('click',function eh(){
    //             if(this.checked == true){
    //                 console.log('check '+this.value);
    //             } else {
    //                 console.log('you unchecked '+this.value);
    //             }
    //         })
    //     }
        
=======
>>>>>>> Stashed changes
    const categoriesList = []
    const categoriesOnChange = (e) => {
        categoriesList.push(e.target.value)
        console.log(categoriesList)
    }

<<<<<<< Updated upstream
=======
>>>>>>> ec34d00e92039f89da0c04a6e1c08da230561110
>>>>>>> Stashed changes
    if(error)
    return("error")

    if(loading)
    return(<Loading/>)
    
    return(
        <> 
            <Header/>
            <div className="options">
                <div className="filtr">
                    <h1>Kategorie</h1>
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
                    {categories.data.filter((categories)=>{
                        // if(list.length==0)
                            return categories
                    }).map(categories => (
                        <div>
                            <input type='checkbox' id='checkbox' value={categories.attributes.name} key={categories.attributes.name} onChange={handleChange}/>
                            <label htmlFor={categories.attributes.name} >{categories.attributes.name}</label>
=======
>>>>>>> Stashed changes
                    {categories.data.map(categories => (
                        <div className="list" key={categories.attributes.name}>
                            <input type="checkbox" id="checkbox" value={categories.attributes.name} onChange={categoriesOnChange}/>
                            <label htmlFor="checkbox">{categories.attributes.name}</label>
<<<<<<< Updated upstream
=======
>>>>>>> ec34d00e92039f89da0c04a6e1c08da230561110
>>>>>>> Stashed changes
                        </div>
                    ))}
                </div>

                <div className="filtr">
                    <h1>filtry</h1>
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
                }).map(game => (
                    <Link key={game.attributes.title} to={"/gra/"+game.id}>
                        <div className="game">
                            <img className="cover" src={"http://localhost:1337"+game.attributes.icon.data.attributes.url} alt={game.attributes.title}/>
                        </div>
                    </Link>
                ))}
                </div>
            </div>
            afterReturn
        </>
    )
}
export default BrowseGames