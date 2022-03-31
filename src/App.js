import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Bag from "./Containers/Bag";
import Bagdetail from "./Containers/Bagdetail";
import Nav from "./Containers/Nav";
import Products from "./Containers/Products";

function App() {
  const [bag, setBag] = useState(JSON.parse(localStorage.getItem("bag")) || [])
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get("http://142.93.229.148/products")
      .then(res => setProducts(res.data))
  }, [])

  const addtobag = (data) => {
    setBag([...bag, data]);
    localStorage.setItem("bag", JSON.stringify([...bag, data]))
  }

  return (
    <Wrapper>
      <Nav />

      <Routes>
        <Route path="/" element={<Products elements={products} addtobag={addtobag} />} />
        <Route path="/bag" element={<Bagdetail />} />
      </Routes>

      <Bag elements={bag} />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 36px 30px;
  display: grid;
  grid-template-columns: 72px 1fr 300px;
  gap: 25px;
`;
