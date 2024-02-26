import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams(); // reads the dynamic URL
  const restaurant = useRestaurant(resId);

  if (!restaurant) {
    return <Shimmer />;
  }

  return (
    <div className="flex p-5 justify-center">
      <div className="mr-32">
        <h1 className="text-xs">Restaurant id: {resId}</h1>
        <h1 className="text-2xl font-bold mb-6">
          {restaurant[2]?.card?.card?.info?.name}
        </h1>
        <img
          className="w-60 border-2 border-slate-300 mb-6"
          src={IMG_CDN_URL + restaurant[2]?.card?.card?.info?.cloudinaryImageId}
        />
        <h2 className="text-sm font-medium">
          {restaurant[2]?.card?.card?.info?.areaName}
        </h2>
        <h2 className="text-sm font-medium">
          {restaurant[2]?.card?.card?.info?.city}
        </h2>
        <h2 className="text-sm font-medium">
          {restaurant[2]?.card?.card?.info?.avgRating + " stars"}
        </h2>
        <h2 className="text-lg font-semibold">
          {restaurant[2]?.card?.card?.info?.costForTwoMessage}
        </h2>
      </div>

      <div>
        <h2 className="text-xl font-bold ml-96 mb-10">Menu</h2>
        <div className="flex">
          <div className="mr-5">
            <h3 className="text-lg font-semibold">
              {
                restaurant[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
                  ?.card?.card?.itemCards[0]?.card?.info?.category
              }
            </h3>
            <ul>
              {(restaurant[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards).map(
                (item) => (
                  <li className="text-sm" key={item?.card?.info?.id}>
                    {item?.card?.info?.name}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="mr-5">
            <h3 className="text-lg font-semibold">
              {
                restaurant[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
                  ?.card?.card?.itemCards[0]?.card?.info?.category
              }
            </h3>
            <ul>
              {(restaurant[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards).map(
                (item) => (
                  <li className="text-sm" key={item?.card?.info?.id}>
                    {item?.card?.info?.name}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="mr-5">
            <h3 className="text-lg font-semibold">
              {
                restaurant[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]
                  ?.card?.card?.itemCards[0]?.card?.info?.category
              }
            </h3>
            <ul>
              {(restaurant[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards).map(
                (item) => (
                  <li className="text-sm" key={item?.card?.info?.id}>
                    {item?.card?.info?.name}
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              {
                restaurant[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]
                  ?.card?.card?.itemCards[0]?.card?.info?.category
              }
            </h3>
            <ul>
              {(restaurant[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards).map(
                (item) => (
                  <li className="text-sm" key={item?.card?.info?.id}>
                    {item?.card?.info?.name}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
