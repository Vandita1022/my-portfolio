import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Button from "./Button";

function Card({ imagen, title, description, buttons = [] }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgba(0,0,0,0.25)"
      : "0 2px 10px rgba(0,0,0,0.08)",
  });

  return React.createElement(
    animated.div,
    {
      className: "bg-[rgba(16,16,40,0.9)] border-2 border-purple-300 rounded-lg p-5 shadow-md cursor-pointer max-w-[18rem] mx-auto text-white mt-8",
      style: props3,
      onMouseEnter: () => setShown(true),
      onMouseLeave: () => setShown(false),
    },
    React.createElement("img", {
      src: imagen,
      alt: "",
      className: "rounded-md w-full h-40 object-cover mb-4",
    }),
    React.createElement("h2", { className: "text-xl font-semibold mb-2" }, title),
    React.createElement("p", { className: "text-gray-600 mb-4" }, description),
    React.createElement(
      "div",
      { className: "flex gap-3" },
      ...buttons.map((text, i) => React.createElement(Button, { key: i, text }))
    )
  );
}


export default Card;
