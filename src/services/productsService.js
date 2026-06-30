import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase/config";

const productsRef = collection(db, "products");

export const getProducts = async ()=>{

    try{

        const snapshot = await getDocs(productsRef); //foto de lo que tomo en ese momento

        const productsFormat = snapshot.docs.map((doc)=>{return {id:doc.id, ...doc.data()}}); //Lo hago para obtener el id

        return productsFormat;

    }catch(err){
        console.error("Error al traer productos",err);
        return [];
    }

}


export const getProductById = async (id) =>{
    try{
        const productRef = doc(db,"products",id); //Traigo un solo documento

        const snapshot = await getDoc(productRef);

        if(snapshot.exists()){
            const product = {id: snapshot.id, ...snapshot.data()}
            return product
        }else{
            return null;
        }


    }catch(err){
        console.error("Error al traer producto por id", err);
        return null;
    }
}

export const createProduct = async (productData) =>{
    try{
        const docRef = await addDoc(productsRef, productData)
        return docRef.id;
    }catch(err){
        console.error("Error al crear el producto", err)
        throw err
    }
}