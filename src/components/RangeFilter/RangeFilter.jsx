import React, { useState, useEffect } from "react"; 
import { useDispatch } from "react-redux";
import {filterProductsByPrice} from "../../state/productsSlice";
import Slider from "@material-ui/core/Slider";

import "./styles.css";
const RangeFilter = () => {
  const [value, setValue] = useState([0, 1000]);
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => { 
    setValue(newValue); 
    dispatch(filterProductsByPrice(value)) 
  };
  function valuetext(value) {
    return `${value}$`;
  } 
  return (
    <div className="slider-wrapper">
      <p className="title">Price</p>
      <Slider
        value={value} 
        max={1000}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
};

export default RangeFilter;
