import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"
import { Footer } from "../components/Footer/Footer"


export const PublicLayout = ()=>{
    return (<div className="app">
       <Header></Header>
       <main>
        <Outlet></Outlet>
       </main>
       <Footer></Footer>
    </div>)
}