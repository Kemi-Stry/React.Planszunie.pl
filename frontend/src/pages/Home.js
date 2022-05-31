import Header from '../components/Header'
import './styles/Home.css'
import img from '../img/kotki_planszunie.png'
import love from '../img/heart.png'

import Loading from "../components/Loading"
import { useState, useEffect } from "react"

import useFetch from "../hooks/useFetch"
import { Link } from "react-router-dom"

const Home = () =>
{
    const { loading, error, data } = useFetch('http://localhost:1337/api/games?populate=*')

    if(error)
    return("error")

    if(loading)
    return(<Loading/>) 

    var number=1;
    function printNumber(){
        return number++;
    }
    
    return(
        <>
        <div className='holder'>
        <Header />
        <center><div className="top10">
        TOP 10
        </div></center>

        <center><div className="games">
            {data.data.sort((a, b) => b.attributes.averageRating- a.attributes.averageRating).slice(0,10).map(game => (
                <Link key={game.attributes.title} to={"/gra/"+game.id}>
                    <h1>{printNumber()}</h1>
                    <div className="game">
                        <img className="cover" src={"http://localhost:1337"+game.attributes.icon.data.attributes.url} alt={game.attributes.title}/>
                    </div>
                </Link>
            ))}
        </div></center>

        <div className="gif">
            <img src={img} alt="kotki planszunie" width="680px" height="360px"/>
        </div>
        <div className="footer">
             Created with
             <img className="love" src={love} alt="love" />
        </div>
    </div>
    </>
    )
}
export default Home