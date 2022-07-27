import { Link } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import Loading from "../components/Loading"
import style from './styles/Top10.module.css'

const Top10 = () => {

    const { loading, error, data } = useFetch('http://localhost:1337/api/games?populate=*')

    if(error)
    return("error")

    if(loading)
    return(<Loading/>)

    var number = 1;
    function printNumber(){
        return number++;
    }

    return(
        <>
        <h1>TOP 10</h1>
        <div className={style.games}>
            {data.data.sort((a, b) => b.attributes.averageRating- a.attributes.averageRating).slice(0,10).map(game => (
                <Link key={game.attributes.title} to={"/gra/"+game.id}>
                    <div className={style.game}>
                        <h1 className={style.num}>{"#"+printNumber()}</h1>
                        <img className={style.cover} src={"http://localhost:1337"+game.attributes.icon.data.attributes.url} alt={game.attributes.title}/>
                    </div>
                </Link>
                
            ))}
        </div>
        </>
    )
}
export default Top10