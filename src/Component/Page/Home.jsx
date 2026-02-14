import React from "react";
import Bannar from "./Bannar";
import LatestFoods from "./LatestFoods";

const latestFoodsPromice = fetch("http://localhost:3000/latest-foods").then(
  (res) => res.json(),
);

const Home = () => {
  return (
    <div>
      <Bannar></Bannar>

      <div className="">
        <LatestFoods latestFoodsPromice={latestFoodsPromice}></LatestFoods>
      </div>
    </div>
  );
};

export default Home;
