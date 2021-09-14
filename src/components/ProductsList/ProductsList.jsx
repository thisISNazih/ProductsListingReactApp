
import { useSelector } from "react-redux";
import ProductItem from "../ProductItem/ProductItem";
import "./styles.css";

const ProductsList = () => {

    const productsList = useSelector((state) => state.productsListing.productsData);
    const filteredData = useSelector((state) => state.productsListing.filteredData);
    const filtersSelected = useSelector((state) => state.productsListing.filtersSelected);
    return (
        <div className="productsList-wrapper">
            {filtersSelected ? filteredData.map((item) => (
                <ProductItem
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    description={item.description}
                    image={item.image}
                // product={item}

                />
            )) : productsList.map((item) => (
                <ProductItem
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    description={item.description}
                    image={item.image}
                // product={item}

                />
            ))}
            <div className="divider"></div>
        </div>
    );

}

export default ProductsList;