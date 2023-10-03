
import { useParams } from 'react-router-dom';

import Product from "./Product";


const GetItem = (arr) => {

    const {phone} = useParams();
    const list = arr;
    
    
    return (
        
        <>
            {list.list.map((p) => {
            if (p.title === phone){
                
                return <Product 
                    image={p.image}
                    title={p.title}
                    description={p.description}
                    price={p.price} 
                />
                
            }
            })}

        
        
        
        </>
        
        

    )
   
}

export default GetItem;