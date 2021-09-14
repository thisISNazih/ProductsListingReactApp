import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import "./styles.css";
import { sortProductsDataAsc, sortProductsDataDesc } from '../../state/productsSlice'
const ProductsSorting = () => {

    const dispatch = useDispatch();
    const [selectedSort, setSort] = useState('')

    const sortHandler = (event) => {
        setSort(event.target.value)
    }

    useEffect(() => {
        if (selectedSort === 'asc'){
            dispatch(sortProductsDataAsc())
    
        }
        if (selectedSort === 'desc'){
            dispatch(sortProductsDataDesc())
     
        }
    },[selectedSort])

    return (
        <div className="productsSorting-wrapper">
            <p className="filter-title">Sort by:</p>
            <select className="form-control"  value={selectedSort} onChange={sortHandler}>
                <option value='' disabled></option> 
                <option value={'asc'}>Price-Asc</option> 
                <option value={'desc'}>Price-Desc</option>
            </select>
        </div>
    );
}

export default ProductsSorting;
