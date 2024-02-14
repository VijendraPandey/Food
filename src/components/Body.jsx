import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterData(searchInput, filteredRestaurants) {
  const filterData = filteredRestaurants.filter((restaurants) =>
    restaurants.info.name.includes(searchInput)
  );
  return filterData;
}

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(restaurantList);
  const [searchInput, setSearcInput] = useState("UP 14");

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearcInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchInput, filteredRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
