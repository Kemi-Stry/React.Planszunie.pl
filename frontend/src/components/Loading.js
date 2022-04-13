import neko from '../img/neko_fly.gif'
import './Loading.css'

const Loading = () =>
{
    return(
        <div className="loading">
            <img className='loadingImg' src={neko} alt="neko" />
            <h1 className='loadingText'>Ładowanie...</h1>
        </div>
    )
}
export default Loading