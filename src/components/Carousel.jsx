import React from "react";
import imageProduct1 from "../assets/images/image-product-1.jpg";
import imageProduct1Thumbnail from "../assets/images/image-product-1-thumbnail.jpg";
import imageProduct2Thumbnail from "../assets/images/image-product-2-thumbnail.jpg";
import imageProduct3Thumbnail from "../assets/images/image-product-3-thumbnail.jpg";
import imageProduct4Thumbnail from "../assets/images/image-product-4-thumbnail.jpg";

function Carousel() {
  return (
    <div className="max-w-[445px] h-auto">
      <div className="carousel block">
        <div id="item1" className="carousel-item">
          <img
            className="w-full h-full rounded-btn"
            src={imageProduct1}
            alt="Product 1"
          />
        </div>
        {/* Add other carousel items similarly */}
      </div>
      <div className="flex justify-start py-2 gap-[40px] max-w-[445px]">
        <a href="#item1" className="max-w-[80px] items-center">
          <img
            className="rounded-btn"
            src={imageProduct1Thumbnail}
            alt="Product 1 Thumbnail"
          />
        </a>
        <a href="#item2" className="max-w-[80px]">
          <img
            className="rounded-btn"
            src={imageProduct2Thumbnail}
            alt="Product 2 Thumbnail"
          />
        </a>
        <a href="#item3" className="max-w-[80px]">
          <img
            className="rounded-btn"
            src={imageProduct3Thumbnail}
            alt="Product 3 Thumbnail"
          />
        </a>
        <a href="#item4" className="max-w-[80px]">
          <img
            className="rounded-btn"
            src={imageProduct4Thumbnail}
            alt="Product 4 Thumbnail"
          />
        </a>
      </div>
    </div>
  );
}

export default Carousel;
