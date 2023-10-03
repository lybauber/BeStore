import { useState } from "react";


const Quantity = ()=>{

    
    const [count, setCount] = useState(1);
   
    const plus = () => {
        setCount(count + 1)
    }
    const minus = ()=> {
        setCount(count - 1)
    }

    return (
        <>

        <button disabled={count === 0} onClick={minus} type="button" className="btn btn-secondary btn-sm">-</button>
        <button  disabled={count === 5}onClick={plus} type="button" className="btn btn-primary btn-sm">+</button>

        <p>{count}</p>
        
        
        </>
    )
}

export default Quantity;