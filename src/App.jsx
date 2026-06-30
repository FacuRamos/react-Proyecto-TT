import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { ItemListContainer } from './components/ItemListContainer/Item/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { CartView } from './components/cart/CartView'
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer'
import { ProductSucces } from './components/adminComponents/ProductoSuccess'
import { PublicLayout } from './layouts/PubliLayout'
import { AdminLayout } from './layouts/AdminLayout'
import { Dashboard } from './components/adminComponents/Dashboard/Dashboard'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import { Login } from './components/Login/Login'

function App() {
  //El componente app no lleva logica solo es presentacional

  return (
    
    <>
    <Routes>
      <Route element={<PublicLayout></PublicLayout>}>
        <Route path="/" element={<ItemListContainer></ItemListContainer>}/>
        <Route path='/product/:id' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
        <Route path='/carrito' element={<CartView></CartView>}></Route>
      </Route>

      <Route path='/admin/login' element={<Login></Login>}></Route>

      <Route path='/admin' element={<ProtectedRoute>
        <AdminLayout></AdminLayout>
      </ProtectedRoute>}>

        {/* /* Cuando entro a la ruta dashboard, lo primero que hace es entrar a dashboar */ }
        <Route index element={<Navigate to={"dashboard"}></Navigate>}></Route>
        <Route path='dashboard' element={<Dashboard />}></Route>

        <Route path='products/new' element={<ProductFormContainer />}></Route>
        <Route path='products/success/:id' element={<ProductSucces />}></Route>
      </Route>
    </Routes>
    </>
   
  )
}

export default App
