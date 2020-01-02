import React from "react";
import "./CardStyle.css";
import { Link } from "react-router-dom";
import Update from "./Update";
function CardRestaurant({ restaurant,deleteRestaurant ,getRestaurant}) {
  return (
    <div>
      <div className="my-2 mx-auto p-relative bg-white shadow-1 blue-hover firstClass">
        <img src={restaurant.img} alt="Man with backpack" className="d-block w-full" />
        <div className="px-2 py-2">
          <h1 className="mb-0 small font-weight-medium text-uppercase mb-1 text-muted lts-2px">
            {restaurant.name}
          </h1>
          <h2>specialite:{restaurant.specialite}</h2>
          <h6 className="ff-serif font-weight-normal text-black card-heading mt-0 mb-1 title address">
            Address:{restaurant.address}
          </h6>
          <p className="mb-1">
            Nachos est une enseigne de restauration rapide mexicaine, acteur
            incontournable sur le marché du fast casual mexicain, concept
            totalement novateur en France
          </p>
        </div>
        <Link to="/menu">
          <button className="text-uppercase d-inline-block font-weight-medium lts-2px ml-2 mb-2 text-center styled-link Button">
            Voir Menu
          </button>
        </Link>
      </div>
      <button type="button" class="btn btn-outline-danger " onClick={() => deleteRestaurant(restaurant._id)}>
        Supprimer
      </button>
     <Update getRestaurant={getRestaurant} restaurant={restaurant}/>
    </div>
  );
}

export default CardRestaurant;
