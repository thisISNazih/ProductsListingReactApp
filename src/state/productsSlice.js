import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "productsListing",
  initialState: {
    productsData: [],
    filteredData: [], 
    filtersSelected: false

  },
  reducers: {
    setProductsData: (state, action) => {
      state.productsData = action.payload; 
      state.filteredData = action.payload; 
    }, 
    filterProductsByCategory: (state, action) => {   
      state.filtersSelected = true; 
      state.filteredData = action.payload; 
    },  
    filterProductsByPrice: (state, action) => {    
      let min = action.payload[0];
      let max = action.payload[1];     
      if(state.filtersSelected)
      state.filteredData = state.filteredData.filter(
        (item) => item.price >= min && item.price <= max
      )     
      else 
      state.filteredData = state.productsData.filter(
        (item) => item.price >= min && item.price <= max
      ) 
      state.filtersSelected = true; 
     
   }, 
    sortProductsDataAsc: (state, action) => { 
      if(state.filtersSelected = true){
        state.filteredData.sort((a,b)=>(a.price>b.price)?1:-1)
      }
      else{
        state.productsData.sort((a,b)=>(a.price>b.price)?1:-1)
      } 

    },
    sortProductsDataDesc: (state, action) => { 
      if(state.filtersSelected = true){
        state.filteredData.sort((a,b)=>(a.price<b.price)?1:-1)
      }
      else{
        state.productsData.sort((a,b)=>(a.price<b.price)?1:-1)
      } 

    } 

  },
});

export const { setProductsData, filterProductsByCategory, filterProductsByPrice,sortProductsDataAsc,sortProductsDataDesc } = productsSlice.actions;

export default productsSlice.reducer;