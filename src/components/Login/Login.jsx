import { useState } from "react";
import { useAuth } from "../../context/AuthContentx"
import { useNavigate } from "react-router-dom";
import "./Login.css";

export const Login= () =>{

    const {login} = useAuth();
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email:"",
        password:""
    })

    const handleChange = (e)=>{
        const {name, value} = e.target
        setFormData({...formData,[name]: value})
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()

        try{
            await login(formData.email, formData.password);
            console.log("Login exitoso")
            navigate("/admin",{replace:true})

        }catch(error){
            console.error(error)
        }
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <form onSubmit={handleSubmit} className="login-form">
                    <h2 className="login-title">Iniciar Sesión</h2>

                    <div className="login-form-group">
                        <label>Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            value={formData.email} 
                            onChange={handleChange}
                            className="login-input"
                            required
                        />
                    </div>

                    <div className="login-form-group">
                        <label>Contraseña</label>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Contraseña" 
                            value={formData.password} 
                            onChange={handleChange}
                            className="login-input"
                            required
                        />
                    </div>

                    <button type="submit" className="btn-login">Ingresar</button>
                </form>
            </div>
        </div>
    )
}