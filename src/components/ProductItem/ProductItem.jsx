import "./styles.css";
const ProductItem = (props) => {
    return (
        <div className="product-item">
            <div className="product-item__image">
               <img src={props.image}/>
           </div>  
           <div className="product-item__info">
                <p className="product-item__info__title">{props.title}</p> 
                <p className="product-item__info__price">{props.price}$</p>
                <p className="product-item__info__description">{props.description}</p>
           </div>  
        </div>
    );
}

export default ProductItem;
