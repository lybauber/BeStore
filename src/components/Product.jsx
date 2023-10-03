import Quantity from './Quantity';
import products from './products';


const Product = ({image, title, description, price=0 })=> {


    return (
        <>
        <div className="container d-flex justify-content-center align-items-center" style={{min_height: '100vh'}}>
        <div className="card mb-3" style={{width: '540px'}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={image} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p className="card-text"><small className="text-body-secondary">{description}</small></p>
                        <p>${price}</p>
                        <Quantity />
                    </div>
                </div>
            </div>
        </div>
        </div>
        
        </>
    )
}

export default Product;