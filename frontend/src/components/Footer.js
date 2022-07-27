import love from '../img/heart.png'
import style from './styles/Footer.module.css'

const Footer = () => {
        return(
                <div className={style.footer}>
                        Created with
                        <img className={style.love} src={love} alt="love" />
                        by Epic Neko Studio
                </div>
        )
      
}
export default Footer