import "./Item.css"

export const Item = ({name,description,price,image,children})=>{

    return(
        <article className="card">
            <img src={image} alt={`Foto de ${name}`} />
            <div className="card-content">
            <h3>{name}</h3>
            <p className="card-description">{description}</p>
            <p>${price}</p>
            </div>
            {children}
        </article>
    )
}