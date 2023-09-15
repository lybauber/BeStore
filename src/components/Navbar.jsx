import Navitem from "./Navitem";

const Navbar = () => {
    return (
        
        <nav className="navbar navbar-expand-lg bg-body-secondary ">
            <div className="container-fluid ">
        
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>


            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="container text-center">
                <ul className="navbar-nav justify-content-evenly">
                <li className="nav-item">
                    <Navitem name="Nutrition" />
                </li>
              
                <li className="nav-item">
                    <Navitem name="Clothes & Accessories" />
                </li>
                
                
                <li className="nav-item">
                    <Navitem name="Athletes" />
                </li>
                <li className="nav-item">
                    <Navitem name="Blog" />
                </li>
                </ul>
                </div>
            </div>
            
            </div>
        
        </nav>

       
        // <nav className="">
        
        // <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //     <span className="navbar-toggler-icon"></span>
        //      </button>
        //     <ul class="nav nav-pills nav-fill" >
        //     <li className="nav-item">
        //         <Navitem name="Nutrition" />
        //     </li>
        //     <li className="nav-item">
        //     <Navitem name="Clothes & Accessories" />
        //     </li>
        //     <li className="nav-item">
        //     <Navitem name="Athletes" />
        //     </li>
        //     <li className="nav-item">
        //     <Navitem name="Blog" />
        //     </li>
        //     </ul>
            
        // </nav>
        
    )
}

export default Navbar;
