import React, { useState, useEffect } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";

function Carroussel(props) {
  const [goToSlide, setGoToSlide] = useState(null);
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);

  const table = props.cards.map(function (element, index) {
    return Object.assign({}, element, {
      onClick: function () {
        setGoToSlide(index);
      },
    });
  });

  const [cards] = useState(table);

  useEffect(
    function () {
      setOffsetRadius(props.offset);
      setShowArrows(props.showArrows);
    },
    [props.offset, props.showArrows]
  );

  return React.createElement(
    "div",
    {
      className: "mx-auto",
      style: {
        width: props.width,
        height: props.height,
        margin: props.margin,
      },
    },
    React.createElement(Carousel, {
      slides: cards,
      goToSlide: goToSlide,
      offsetRadius: offsetRadius,
      showNavigation: showArrows,
      animationConfig: config.gentle,
    })
  );
}

export default Carroussel;
