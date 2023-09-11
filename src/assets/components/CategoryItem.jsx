export const CategoryItem = ({isActive, name}) => {
    return(
        <a className={`nav-link ${isActive ? "active" : null}`} aria-current="page" href="?">
            {name}
        </a>
    )       
}