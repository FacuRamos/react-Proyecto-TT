import { Navigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContentx"

export const ProtectedRoute = ({ children }) =>{
    const {user, loading} = useAuth()

    if(loading) return <p>Cargando...</p>

    if(!user) return <Navigate to="/admin/login"></Navigate>

    return children;
}