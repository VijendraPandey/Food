const heading = document.createElement("h1");
heading.innerHTML = "Namaste Javascript!";
const root = document.getElementById("root");
root.appendChild(heading);
const head1 = React.createElement("h1", {}, "Hey there it's React1");
const head2 = React.createElement("h1", {}, "Hey there it's React2");
const sect = React.createElement("div", {
    id: "sect"
}, [
    head1,
    head2
]);
const roots = ReactDOM.createRoot(document.getElementById("root"));
roots.render(sect);

//# sourceMappingURL=index.6bd02f5a.js.map
