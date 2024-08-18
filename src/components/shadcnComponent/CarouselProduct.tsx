import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Product } from "@/type";
import Link from "next/link";

type CarouselProduct = {
  products: Product[];
};

const CarouselProduct: React.FC<CarouselProduct> = ({ products }) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-screen-xl relative"
    >
      <CarouselContent className="-ml-[]">
        {products.length > 0 ? (
          products.map((product) => (
            <CarouselItem
              key={product.id}
              className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 w-full"
            >
              <Link
                href={`/products/${product.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                <Card className="w-full h-[20rem] md:h-[19rem] border-2 border-gray-300 rounded-none cursor-pointer transition duration-300 hover:border-black ">
                  <CardContent className="flex flex-col p-0 w-full">
                    <div className="flex items-center justify-center w-full mb-5">
                      <Image
                        src={product.image}
                        alt={`${product.name} image`}
                        width={200}
                        height={300}
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="flex flex-col p-3">
                      <div>
                        <h3 className="font-medium text-lg">{product.name}</h3>
                      </div>
                      <div className="">
                        <p className="font-semibold text-xl">{product.price}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          ))
        ) : (
          <p>No products to display</p>
        )}
      </CarouselContent>
      <div className="absolute -top-12 right-12">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default CarouselProduct;
