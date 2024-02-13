import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return (
    <img
      className="logo"
      alt="logo"
      src="https://wallpapercave.com/wp/wp11030601.jpg"
    />
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Haldiram = {
  image:
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/domuja3qjqsuwgtl1fyp",
  name: "Haldiram's",
  cuisines: ["Sweets", "Snacks"],
  rating: "4.2",
};

const restaurantList = [
  {
    info: {
      id: "672401",
      name: "Khadak Singh Da Dhaba",
      cloudinaryImageId: "8144bf37947c161953f656308d1bfc30",
      locality: "Noor Nagar Raj Nagar",
      areaName: "Raj Nagar Extension",
      costForTwo: "₹300 for two",
      cuisines: ["North Indian", "Mughlai", "Tandoor", "Indian", "Snacks"],
      avgRating: 4.2,
      avgRatingString: "4.1",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 6.4,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "6.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "677936",
      name: "Goila Butter Chicken",
      cloudinaryImageId: "5e19832da032dd69547565e27104706f",
      locality: "Gaur City 1",
      areaName: "Noida Ext.",
      costForTwo: "₹600 for two",
      cuisines: ["North Indian", "Biryani", "Kebabs", "Desserts"],
      avgRating: 4.1,
      parentId: "322587",
      avgRatingString: "4.1",
      totalRatingsString: "100+",
      promoted: true,
      adTrackingId:
        "cid=11029008~p=2~eid=0000018d-a303-176f-023b-369c0024021a~srvts=1707836905327~83645",
      sla: {
        deliveryTime: 69,
        lastMileTravel: 9.6,
        serviceability: "SERVICEABLE",
        slaString: "65-70 mins",
        lastMileTravelString: "9.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "569689",
      name: "Nazeer Foods",
      cloudinaryImageId: "6aa38b251b1ee1662961a6dc19e41e95",
      locality: "Sector 4",
      areaName: "Gaur City 1",
      costForTwo: "₹400 for two",
      cuisines: ["North Indian", "Biryani", "Mughlai", "Snacks"],
      avgRating: 4,
      parentId: "2351",
      avgRatingString: "4.0",
      totalRatingsString: "100+",
      promoted: true,
      adTrackingId:
        "cid=11026505~p=4~eid=0000018d-a303-176f-023b-369e0024044e~srvts=1707836905327~83645",
      sla: {
        deliveryTime: 48,
        lastMileTravel: 9.1,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "9.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "533477",
      name: "Veer Ji Malai Chaap Wale",
      cloudinaryImageId: "n4d67w0ak0ga6pdivmp0",
      locality: "Sanjay Nagar",
      areaName: "Raj Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["North Indian", "Indian", "Snacks"],
      avgRating: 3.9,
      veg: true,
      parentId: "12056",
      avgRatingString: "3.9",
      totalRatingsString: "500+",
      promoted: true,
      adTrackingId:
        "cid=11224056~p=5~eid=0000018d-a303-176f-023b-369f0024057b~srvts=1707836905327~83645",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "347943",
      name: "Wakhra Swaad",
      cloudinaryImageId: "06614d33a0adb57e8baf7c0f736937da",
      locality: "Near Radha Public School",
      areaName: "Gaur City 2",
      costForTwo: "₹500 for two",
      cuisines: ["North Indian", "Biryani", "Chinese", "Desserts"],
      avgRating: 4.1,
      parentId: "6455",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      promoted: true,
      adTrackingId:
        "cid=10968469~p=6~eid=0000018d-a303-176f-023b-36a00024067b~srvts=1707836905327~83645",
      sla: {
        deliveryTime: 48,
        lastMileTravel: 8.1,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "8.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "353154",
      name: "Kake Da Hotel",
      cloudinaryImageId: "mbbqfvs6cssk4tggnzwg",
      locality: "RDC Concrete (India) Pvt Ltd",
      areaName: "Raj Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["Chinese", "Tandoor"],
      avgRating: 4.1,
      parentId: "113762",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
  {
    info: {
      id: "116198",
      name: "Nathu's Sweets",
      cloudinaryImageId: "mlredl6hkkqh33tcg9ks",
      locality: "Raj Nagar",
      areaName: "Raj Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["North Indian", "South Indian", "Sweets"],
      avgRating: 4.2,
      veg: true,
      parentId: "1945",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
    },
  },
];

const RestaurantCard = () => {
  return (
    <div className="card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          restaurantList[4].info?.cloudinaryImageId
        }
      ></img>
      <h2>{restaurantList[4].info?.name}</h2>
      <h3>{restaurantList[4].info?.cuisines.join(", ")}</h3>
      <h4>{restaurantList[4].info?.avgRating} stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-list">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  );
};

const Footer = () => {
  return <h1>Footer</h1>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
