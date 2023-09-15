import './Brand'
import Brand from './Brand'
import Inputsearch  from './Inputsearch'
import Login from './Login'
import Shoppingcart from './Shoppingcart'


const Varface = ()=> {
    return (
        <div className="container text-center">
         <div className="row align-items-center">
        <div className="col">
          <Brand />
        </div>
        <div className="col">
          <Inputsearch />
        </div>
        <div className="col">

                <Shoppingcart />
             
        </div>
        </div>
      </div>   
    )
}

export default Varface;