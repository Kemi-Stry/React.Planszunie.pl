import Header from '../components/Header'
import img from '../img/kotki_planszunie.png'

const Home = () =>
{
    return(
        <>
        <Header />
        <img src={img} alt="kotki planszunie" width="680px" height="360px"/>
        </>
    )

}
export default Home