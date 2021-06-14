import React, { useState } from "react";
import ProductItem from "./ProductItems";

const ProductList = ({ data }) => {
  const [cart, setCart] = useState([]);
  const [totalBill, setTotalBill] = useState(0);
  const addToCart = (item) => {
    setCart((prevStat) => [...prevStat, item]);
    console.log(cart);
  };
  const items = data.map((item, i) => (
    <ProductItem key={i} info={item} addToCart={addToCart} />
  ));

  const bill = () =>
    setTotalBill(cart.reduce((acc, cur) => acc + cur.price, 0));
  return (
    <React.Fragment>
      <div>
        <button className="bill" onClick={bill}>Total bill</button> <div className="total">{totalBill}€</div>
      </div>
      <ul>{items}</ul>
    </React.Fragment>
  );
};
export default ProductList;