import './Logo.css'
import { Link } from 'react-router-dom'


const Logo = () => {
    return (
        <>
        <div>
            <Link to={"/"}><img src="assets/imgs/Logo(1).png" alt="" className='logo'></img></Link>
        </div>
        </>
        )
}

export default Logo

