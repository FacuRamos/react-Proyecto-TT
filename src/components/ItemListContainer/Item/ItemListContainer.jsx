import { useEffect, useState } from "react"
import { ItemList } from "../../ItemList/ItemList"
import { getProducts } from "../../../services/productsService"

export const ItemListContainer = ()=>{
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        /*
        fetch("/data/products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error(err))
            .finally(() => {
                setLoading(false)
            })
    */
    

    getProducts()
            .then((data) => setProducts(data))
            .catch((err) => console.error(err))
            .finally(() => {
                setLoading(false)
            })

    },[])

    console.log(products)

    if(loading) return <p>Cargando...</p>

    return(
        <section>
        
        <ItemList products={products}></ItemList>
        
        </section>
        

    )
}