import React from "react";
import ReactDOM from "react-dom/client";

const heading = document.createElement("h1");
heading.innerHTML = "Namaste Javascript!";
const root = document.getElementById("root");
root.appendChild(heading);

const head1 = React.createElement("h1", {}, "Hey there it's Parcel1");
const head2 = React.createElement("h1", {}, "Hey there it's Parcel2");
const sect = React.createElement("div", { id: "sect" }, [head1, head2]);
const roots = ReactDOM.createRoot(document.getElementById("root"));
roots.render(sect);
