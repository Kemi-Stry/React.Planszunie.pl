import Header from '../components/Header'
import Top10 from '../components/Top10'
import Footer from '../components/Footer'
import style from './styles/Home.module.css'
import img from '../img/kotki_planszunie.png'

const Home = () =>
{
    return(
        <>
        <Header/>
        <Top10/>
        <div className={style.gif}>
            <img src={img} alt="kotki planszunie" width="680px" height="360px"/>
        </div>
        <Footer/>
    </>
    )
}
export default Home