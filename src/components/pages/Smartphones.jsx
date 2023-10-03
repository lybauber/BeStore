import Card from '../Card';
import products from '../products';

const Smartphones = ()=> {

    const smartphones = products;

    return (
        <>
            <h1 className='text-center'>Smartphones</h1>

                <div className='container'>
                <div className="row align-items-center">
                    
                    {smartphones.map((s) => (
                        
                        <Card 
                        key={s.id}
                        image={s.image}
                        title={s.title}
                        description={s.description}
                        price={s.price}
                        />
                    ))}
                  
                    </div>
                </div>
        </>
    )
}

export default Smartphones;