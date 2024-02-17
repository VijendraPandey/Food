import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams(); // reads the dynamic URL
  const [restaurant, setRestaurant] = useState();

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.884768303037962&lng=80.92255979776382&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json?.data?.cards);
    setRestaurant(json?.data?.cards);
  }

  if (!restaurant) {
    return <Shimmer />;
  }

  return (
    <div className="menu">
      <div>
        <h1>Restaurant id: {resId}</h1>
        <h1>{restaurant[2]?.card?.card?.info?.name}</h1>
        <img
          src={IMG_CDN_URL + restaurant[2]?.card?.card?.info?.cloudinaryImageId}
        />
        <h2>{restaurant[2]?.card?.card?.info?.areaName}</h2>
        <h2>{restaurant[2]?.card?.card?.info?.city}</h2>
        <h2>{restaurant[2]?.card?.card?.info?.avgRating + " stars"}</h2>
        <h2>{restaurant[2]?.card?.card?.info?.costForTwoMessage}</h2>
      </div>

      <div>
        <h2>Menu</h2>
        <div>
          <h3>
            {
                restaurant[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
              ?.card?.itemCards[0]?.card?.info?.category
            }
          </h3>
          <ul>
            {(restaurant[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards).map(
              (item) => (
                <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
              )
            )}
          </ul>
        </div>

        <div>
          <h3>
            {
              restaurant[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
                ?.card?.itemCards[0]?.card?.info?.category
            }
          </h3>
          <ul>
            {(restaurant[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards).map(
              (item) => (
                <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
              )
            )}
          </ul>
        </div>

        <div>
          <h3>
            {
              restaurant[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
                ?.card?.itemCards[0]?.card?.info?.category
            }
          </h3>
          <ul>
            {(restaurant[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards).map(
              (item) => (
                <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
              )
            )}
          </ul>
        </div>

        <div>
          <h3>
            {
              restaurant[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
                ?.card?.itemCards[0]?.card?.info?.category
            }
          </h3>
          <ul>
            {(restaurant[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards).map(
              (item) => (
                <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
