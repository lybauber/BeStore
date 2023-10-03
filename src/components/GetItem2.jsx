import { useParams } from 'react-router-dom';

import Product from "./Product";


const GetItem2 = (arr) => {

    const {decoration} = useParams();
    const list = arr;
    console.log(list)
   return (
        
        <>
 
            {list.list.map((p) => {
            if (p.title === decoration){
                
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

export default GetItem2;