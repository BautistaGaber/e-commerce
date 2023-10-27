import { Link } from 'react-router-dom'

export const Brand = () => {
    return (
        <Link to='/'>
            <img className="h-9 w-16" src='/img/Logo.png' alt="foto logo" />
        </Link>
    )
}