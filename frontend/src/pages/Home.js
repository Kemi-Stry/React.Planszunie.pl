import Header from '../components/Header'
import './styles/Home.css'
import img from '../img/kotki_planszunie.png'
import love from '../img/heart.png'

const Home = () =>
{
    return(
        <div className='holder'>
        <Header />
        <img src={img} alt="kotki planszunie" width="680px" height="360px"/>
        <div className="footer">
            <h3>Made with</h3>
            <img className="love" src={love} alt="love" />
            <h3>by Planszunie Team</h3>
        </div>
        </div>
    )

}
export default Home