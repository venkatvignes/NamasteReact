const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h3", { id: "heading3" }, "hello sturctured react")
  )
);

const h1 = React.createElement(
  "h1",
  { id: "name", className: "vaue" },
  "hello in new Js file"
);
console.log(h1);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(parent);
