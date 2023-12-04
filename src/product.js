import React from "react";

const Product = ({sabor, img}) => {
  console.log(sabor);
  return(
    <div className="content">
      <setion className="group-content">
        <img src={'img'} className="product-img" alt="img"></img>
        <p>Este batido de {sabor} es una opción mucho más saludable. </p>
      </setion>
    </div>
  )
}

export default Product;