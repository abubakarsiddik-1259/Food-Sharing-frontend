import React from "react";
import { Link } from "react-router";

const Foods = ({ food }) => {
  const {
    food_name,
    food_quantity,
    pickup_location,
    food_image,
    _id,
    expire_date,
  } = food;
  return (
    <div
      className="card bg-base-100 shadow-sm     border-4
  border-t-purple-600
  border-r-gray-400
  border-b-gray-400
  border-l-pink-600
   "
    >
      <figure className="px-4 ">
        <img src={food_image} alt="Shoes" className="rounded-xl h-60 w-80" />
      </figure>
      <div className="card-body  ">
        <div className="text-start text-[16px] text-gray-700">
          <h2 className="card-title">food : {food_name}</h2>
          <p> Food quantity : {food_quantity} </p>
          <h4> Pickup location : {pickup_location}</h4>
          <h4> Expire date : {expire_date}</h4>
        </div>
        <div className="card-actions">
          <Link
            to={`/productsDetails/${_id}`}
            className="btn mt-6 btn-gradient w-full"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Foods;
