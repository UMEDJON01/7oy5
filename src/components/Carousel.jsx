import React from "react";

function Carousel() {
  return (
    <div className="max-w-[445px] h-auto">
      <div className="carousel block">
        <div id="item1" className="carousel-item ">
          <img
            className="w-full h-full rounded-btn "
            src="./src/assets/images/image-product-1.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-start py-2 gap-[40px] max-w-[445px] ">
        <a href="#item1" className="max-w-[80px] items-center">
          <img
            className="rounded-btn hover:b"
            src="./src/assets/images/image-product-1-thumbnail.jpg"
            alt="Product 1 Thumbnail"
          />
        </a>
        <a href="#item2" className="max-w-[80px]">
          <img
            className="rounded-btn hover:b"
            src="./src/assets/images/image-product-2-thumbnail.jpg"
            alt="Random Image 2 Thumbnail"
          />
        </a>
        <a href="#item3" className="max-w-[80px]">
          <img
            className="rounded-btn hover:b"
            src="./src/assets/images/image-product-3-thumbnail.jpg"
            alt="Random Image 3 Thumbnail"
          />
        </a>
        <a href="#item4" className="max-w-[80px]">
          <img
            className="rounded-btn hover:b"
            src="./src/assets/images/image-product-4-thumbnail.jpg"
            alt="Random Image 4 Thumbnail"
          />
        </a>
      </div>
    </div>
  );
}

export default Carousel;
