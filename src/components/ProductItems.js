import React from "react";

const ProductItem = ({info, addToCart})=>{
    const { id, productName, icon, price, inventory } = info;



return (
    <React.Fragment>
        <div className="products-father">
         <li  key={id}>
      {productName} <i>{icon}</i>
      <h5>{price}€</h5>
      <h6>{inventory} items in stock</h6>
      <button className="addcart"
        disabled ={ inventory ===0}
        onClick={() => {
          console.log(info);
          addToCart(info);
        }}
      >
        {inventory > 0 ? "Add to cart": "Sell out"}
      </button>
    </li>
    </div>



    </React.Fragment>

);
    };

export default ProductItem;