export const getProducts = () => { 
    return fetch('https://fakestoreapi.com/products',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )

}


export const getCategories = () => { 
    return fetch('https://fakestoreapi.com/products/categories',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )

}

export const productsInCategory = (category) => { 
  return fetch(`https://fakestoreapi.com/products/category/${category}`,{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  }
  )

}
