import React, { useState } from "react";
import Data from "./data.json";
import ProductList from "./components/ProductList";


import { FaBeer } from "react-icons/fa";
import { WiAlien, WiNightAltThunderstorm } from "react-icons/wi";
const App = () => {const [data, setData] = useState(Data);
  const [userInput, setUserInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const changeHandle = (e) => {
    setUserInput(e.target.value);
  };

const lookUp =()=>{
  
 
  const userText = userInput.toLowerCase().trim();
  const userTextlength = userText.length;
      // const searchText = userText ? userText : "";
//this action to secure your app
  
    // console.log(sliceproductname);
    
    let newArr = data.filter((item) => {
  const slicedProductName = item.productName.slice(0,userTextlength );
  console.log(slicedProductName);
      return slicedProductName === userText;
    });
    setFilteredData(newArr);
  };


const handleSubmit = (e) => {
  e.preventDefault();
  lookUp();
};
return (
  <React.Fragment>
    {
      //<img src={`${process.env.PUBLIC_URL}/${data[0].img}`} alt="Sushi" />
      //<FontAwesomeIcon icon={["fab", "apple"]} size="6x" rotation={90} />
    }

    <h1>Welcome to our online store</h1>
    <h3>
      Lets go for a <FaBeer /> with <WiAlien /> when it's
      <WiNightAltThunderstorm />
    </h3>
    <form onSubmit={handleSubmit}>
      <input className="search" type="text" onChange={changeHandle} value={userInput} placeholder="search"/>
      <input className="filter" type="submit" value="filter" />
      <ProductList data={userInput ? filteredData : data} /> 
     
    </form>
    {
    //i will send only userinput data not all data
  }
  </React.Fragment>
);
};

export default App;

