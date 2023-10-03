
import './App.css'
import Navbar from './components/Navbar'
import Varface from './components/Varface'
import MainCarousel from './components/MainCarousel'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Smartphones from './components/pages/Smartphones'
import GetItem from './components/GetItem'
import HomeDecoration from './components/pages/HomeDecoration'
import smartphones from './components/products'
import GetItem2 from './components/GetItem2'


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


    
function App() {

  
  


  return (
    <BrowserRouter>

    <div className='container mt-4'>
      <Varface />
    </div>
    <Navbar />
     
   <div className='container'>
    <h1 className='text-center'>BeTech</h1>
    
   </div>
    


    
   <Routes>
      
        <Route path='/smartphones' element={<Smartphones/>}/>
        <Route path='smartphones/:phone' element={<GetItem list={smartphones} />} />
        <Route path='/decoration' element={<HomeDecoration/>}/>
        <Route path='decoration/:decoration' element={<GetItem2 list={home} />} />
      
      </Routes>
   
    </BrowserRouter>
  )
}

export default App
