

const Navitem = ({name, route}) => {
    return (
        
        <a className="nav-link " aria-current="page" href={route}>
        {name}
        </a>
        
        
    )
}

export default Navitem;