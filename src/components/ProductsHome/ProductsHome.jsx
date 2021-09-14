import { useDispatch} from 'react-redux';
import React, { useEffect, useState } from 'react';
import { getProducts, getCategories } from "../../services/products-api";
import ProductsList from "../ProductsList/ProductsList";
import ProductsFilters from "../ProductsFilter/ProductsFilter"; 
import HomepageHero from '../HomepageHero/HomepageHero';
import Header from "../Header/Header"; 
import {setProductsData} from '../../state/productsSlice'; 
import RangeFilter from "../RangeFilter/RangeFilter"; 
import ListingBanner from '../ListingBanner/ListingBanner';
import "./styles.css"; 
const ProductsHome = () => {

    const dispatch = useDispatch();
    const [categories, setCategories] = useState([]);
    useEffect(() => {
         getProducts().then((res) => {
            return res.json();
        }).then((data) => {
            dispatch(setProductsData(data));
        }) 

        getCategories().then((res) => {
            return res.json();
        }).then((data) => {
            setCategories(data);
        })
    }, []);
    
    return (
        <div className="homePage-wrapper">
           <Header /> 
           <div className="homePage-wrapper__main">
                 <div className="row">
                     <div className="filters-placeholder col-lg-3 col-sm-12">
                            <ProductsFilters filterType="Category" filtersData={categories} />  
                            <RangeFilter />
                     </div> 
                     <div className="listing-placeholder col-lg-9 col-sm-12">  
                     <HomepageHero featuredImage="Banner.png"/>
                     <ListingBanner />
                         <ProductsList />
                     </div> 
                 </div>
           </div>
        </div>
    );
}

export default ProductsHome;