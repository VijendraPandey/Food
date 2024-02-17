import { useState } from "react";

const Profile = ({ name }) => {
  const [count, setCount] = useState(1);

  return (
    <div>
      <h1>Profile Functional Component</h1>
      <h2>Name: {name}</h2>
      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          x = count + 1;
          setCount(x);
        }}
      >
        Set Count
      </button>
    </div>
  );
};

export default Profile;
