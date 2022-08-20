import Top10 from '../components/Top10'
import style from './styles/Home.module.css'
import img from '../img/kotki_planszunie.png'

const Home = () =>
{
    return(
        <>
        <Top10/>
        <div className={style.gif}>
            <img src={img} alt="kotki planszunie" width="680px" height="360px"/>
        </div>
    </>
    )
}
export default Home