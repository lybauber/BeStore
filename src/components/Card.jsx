import TagCard from "./TagCard";

const Card = ({image, title, description, price=0})=> {
    return (
                <div className="col">
                 <div className="card" style={{width: '18rem'}}>
                    <img src={image} className="card-img-top" alt="#" />
                    <div className="card-body">
                    <TagCard title={title} text={description} />
                    <p>{`$${price}`}</p>
                    <a href={`/smartphones/${title}`} className="btn btn-primary">Buy {title}</a>
                    </div>
                </div>
                </div>
                
                
            
        // </div>
    )
}


export default Card;