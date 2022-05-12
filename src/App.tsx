import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import "./App.scss";
import { Header } from "./components/Header/Header";
import { HomePage } from "./components/HomePage/HomePage";
import { Footer } from "./components/Footer/Footer";
import { Shop } from "./components/Shop/Shop";
import { ProInf } from "./components/ProInf/ProInf";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Contacts } from "./components/Contacts/Contacts";
import { Basket } from "./components/Basket/Basket";
import { Chekout } from "./components/Chekout/Chekout";

function App() {
  const database = useSelector((state: any) => state.main);

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        {/*  инфа про конкретный товар  */}
        {database.map((e: any) => {
          return (
            <Route
              key={e.src}
              path={e.src}
              element={
                <ProInf
                  name={e.name}
                  src={e.src}
                  img={e.img}
                  price={e.price}
                  oldPrece={e.oldPrece}
                  type={e.type}
                />
              }
            />
          );
        })}
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/chekout" element={<Chekout />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
