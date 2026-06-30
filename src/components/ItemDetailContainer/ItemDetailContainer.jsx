import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import "../ItemList/ItemList.css"
import { getProductById } from "../../services/productsService"

export const ItemDetailContainer = ()=>{

    const {id} = useParams()

    const [itemDetail,setItemDetail] = useState(null)
    const [loading,setLoading] = useState(true)

    useEffect(()=>{

        /*fetch("/data/products.json")
            .then((res) => res.json())
            .then((data) => {
                const item = data.find(d=>String(d.id) === id)

                if(item){
                    setItemDetail(item)
                    return
                }

                throw new Error("Elemento no encontrado")
            })
            .catch((err) => console.error(err))
            .finally(() => {
                setLoading(false)
            })
                */

            getProductById(id)
                .then((data) => setItemDetail(data))
                .catch((err)=> console.log(err))
                .finally(()=>setLoading(false))

    },[])

    if(loading) return <p>Cargando...</p>

    if(!itemDetail) return <p>Producto no encontrado</p>

    return(
        <section>
            <h1>Detalle de producto</h1>
            <div className="products-container">
                <ItemDetail item={itemDetail}></ItemDetail>
            </div>
        </section>
    )
}