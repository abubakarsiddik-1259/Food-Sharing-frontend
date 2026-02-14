import React, { use } from "react";
import Foods from "./Foods";

const LatestFoods = ({ latestFoodsPromice }) => {
  const foods = use(latestFoodsPromice);

  return (
    <div>
      <h2 class="text-3xl font-bold mb-8 mt-15 text-center">Featured Foods</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {foods.map((food) => (
          <Foods key={food._id} food={food}></Foods>
        ))}
      </div>
    </div>
  );
};

export default LatestFoods;
