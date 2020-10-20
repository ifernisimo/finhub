import React from "react";
import Slider from "react-slick";

const FeedBackComponent = (props) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const slider = React.createRef();

  return (
    <>
      <button onClick={() => slider.current.slickNext()}>NEXT</button>
      <button onClick={() => slider.current.slickPrev()}>PREV</button>
      <div>
        <Slider ref={slider} {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default FeedBackComponent;
