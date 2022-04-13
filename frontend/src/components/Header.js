import './Header.css'
import { Link } from 'react-router-dom'

const Header = () =>
{
    return(
        <div className="header">
           <Link className='homelink' to="/">Planszunie</Link>
        </div>
    )
}
export default Header