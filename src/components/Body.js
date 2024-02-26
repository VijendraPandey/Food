import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearcInput] = useState("UP 14");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/mapi/restaurants/search/v3?lat=26.884768303037962&lng=80.92255979776382&str=Bakery%20all&trackingId=4a965010-f924-cb13-fa94-f0425834f6f7&submitAction=ENTER&queryUniqueId=dee27643-c7aa-d8d6-e438-2cb01046c19c"
    );
    const json = await data.json();
    console.log(json);
    setFilteredRestaurants(
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]
        ?.card?.card?.restaurants
    );
    setAllRestaurants(
      json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]
        ?.card?.card?.restaurants
    );
  }

  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-3 bg-orange-100 my-5">
        <input
          type="text"
          className="rounded-md px-3 py-1 focus:bg-orange-200"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearcInput(e.target.value); //captures what is being written in the text box
          }}
        />
        <button
          className="px-3 py-1 m-2 bg-red-300 rounded-md text-white hover:bg-orange-500"
          onClick={() => {
            const data = filterData(searchInput, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard {...restaurant.info} />
            </Link> //spread operator to destructure restaurant info into name, cuisines etc
          );
        })}
      </div>
    </>
  );
};

export default Body;
