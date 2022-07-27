import neko from '../img/neko_fly.gif'
import style from './styles/Loading.module.css'

const Loading = () =>
{
    return(
        <div className={style.loading}>
            <img className={style.loadingImg} src={neko} alt="neko" />
            <h1 className={style.loadingText}>Ładowanie...</h1>
        </div>
    )
}
export default Loading