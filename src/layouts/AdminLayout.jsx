import { Outlet } from "react-router-dom"
import "../components/adminComponents/admin.css"

export const AdminLayout = ()=>{
    return (<div className="app">
        <Outlet></Outlet> {/* Es un filtro que segun la ruta que viene sabe si la debe renderizar o no */}
    </div>)
}