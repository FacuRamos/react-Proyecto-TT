
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { ItemListContainer } from './components/ItemListContainer/Item/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  //El componente app no lleva logica solo es presentacional

  return (
    <div className='app'>
    
    <Header></Header>
    <main>
    <Routes>
      <Route path="/" element={<ItemListContainer></ItemListContainer>}/>
      <Route path='/product/:id' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
      <Route path='/carrito' element={<p>Hola</p>}></Route>
    </Routes>
    </main>
    <Footer></Footer>
    </div>
  )
}

export default App
