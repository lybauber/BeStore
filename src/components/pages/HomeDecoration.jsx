import Card from "../Card"


const home = [
    {
        title: "Plant Hanger For Home",
        image: "https://i.dummyjson.com/data/products/26/thumbnail.jpg",
        description: "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
        price: 41,
        stock: 131

    },
    {
        title: "3D Embellishment Art Lamp",
        image: "https://i.dummyjson.com/data/products/28/thumbnail.jpg",
        description: "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
        price: 20,
        stock: 54
    },
    {
        title: "Flying Wooden Bird",
        image: "https://i.dummyjson.com/data/products/27/thumbnail.webp",
        description: "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
        price: 51,
        stock: 17
    },
    {
        title: "Handcraft Chinese style",
        image: "https://i.dummyjson.com/data/products/26/thumbnail.jpg",
        description: "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
        price: 60,
        stock: 7
    },
    {
        title: "Key Holder",
        image: "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
        description: "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
        price: 30,
        stock: 54
    }
]



const HomeDecoration = ()=> {

    return (
        <>
            <h1 className="text-center">Home Decoration</h1>
            <div className='container'>
                <div className="row align-items-center">
                    {home.map((s) => (
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


export default HomeDecoration;