// import './App.css';
import React from "react";

const Product = ({sabor}) => {
  console.log(sabor);
  return(
    <div className="content">
      <img src={'choco.jpg'} className="product-img" alt="img"></img>
      <p>Este batido de {sabor} es una opción mucho más saludable. </p> 
    </div>
  )
}

export default Product;