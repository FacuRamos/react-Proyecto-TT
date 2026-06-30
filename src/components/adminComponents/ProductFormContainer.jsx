import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ProductFormUI } from "./ProductFormUI"
import { validateProduct } from "../../utils/validateProduct"
import { uploadImage } from "../../services/uploadImage"
import { createProduct } from "../../services/productsService"

export const ProductFormContainer =()=>{

    const navigate = useNavigate() //Sirve para navegar, de formar programatica, cuando se cumple cierto eventos
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const [file, setFile] = useState(null)
    const [product, setProduct] = useState({
        name :"",
        description:"",
        price:"",
    })

    const handleChange = (e) =>{
        const {name , value} = e.target
        setProduct({...product,[name]:value})
    }

    const handleFileChage = (e)=>{
        const file = e.target.files[0] || null;
        setFile(file)
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        //mmodificacmmos los estados para el loading mientras proceso
        setErrors({})
        setLoading(true)

        //validar
        const newErrors = validateProduct({...product,file})
        if(Object.keys(newErrors).length > 0){
            setErrors(newErrors)
            setLoading(false)
            return
        }
        
        try{
            //subir la imagen
            const imageUrl = await uploadImage(file)

            const productData = {
                ...product,
                price: Number(product.price),
                image:imageUrl
            }
            
            //alta
            const productId = await createProduct(productData)

            // Redireccionar a la pantalla de éxito
            navigate(`/admin/products/success/${productId}`)

            

        }catch(err){
            setErrors({general: err.message})
        }finally{
            setLoading(false)
        }
        

        
    }

    return(
        <ProductFormUI
        product = {product}
        errors = {errors}
        loading = {loading}
        onChange = {handleChange}
        onFileChange = {handleFileChage}
        onSubmit = {handleSubmit}
        ></ProductFormUI>
    )
    
}