import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import "./styles.css";
import { productsInCategory } from "../../services/products-api";
import { filterProductsByCategory } from '../../state/productsSlice'
const ProductsFilters = ({filterType, filtersData}) => {

    const dispatch = useDispatch();
    const [selectedCategory, setCategory] = useState('')

    const categoryHandler = (item) => {
        setCategory(item)
    }
    useEffect(() => {
        productsInCategory(selectedCategory).then((res) => {
            return res.json();
        }).then((data) => {
            dispatch(filterProductsByCategory(data));
        })
    }, [selectedCategory])
    return (
        <div className="productsFilters-wrapper">
            <div className="productsFilters-wrapper__filterPlaceholder"> 
               <p className="filter-title">{filterType}</p>
                <ul className="filters-list">
                    {filtersData.map(item => {
                        return <li onClick={()=>categoryHandler(item)}>{item}</li>
                    })}
                </ul>
            </div>
        </div>
    );
}

export default ProductsFilters;
