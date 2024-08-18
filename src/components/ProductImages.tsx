"use client";

import { useState } from "react";
import Image from "next/image";
import { Product } from "@/type";

interface ProductImagesProps {
  product: Product;
}

const ProductImages: React.FC<ProductImagesProps> = ({ product }) => {
  const [mainImage, setMainImage] = useState(product.image);

  return (
    <div className="w-full flex flex-col items-center md:w-[45%]">
      {/* Main Image */}
      <div className="w-[20rem] h-[20rem] relative mb-5 md:h-[25rem]">
        <Image
          src={mainImage}
          alt={product.name}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Thumbnail Images */}
      <div className="flex gap-5 w-full items-center justify-center">
        {product.allImage.map((img, index) => (
          <button
            key={index}
            className="w-[7rem] h-[7rem] relative mb-5 md:h-[8rem] md:w-[8rem] hover:border-2 hover:border-black"
          >
            <Image
              src={img}
              alt={`${product.name} image ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
              className="cursor-pointer"
              onClick={() => setMainImage(img)}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
