import products from "@/lib/data.json";
import CarouselProduct from "@/components/shadcnComponent/CarouselProduct";
import ProductImages from "@/components/ProductImages";
import ProductDesc from "@/components/ProductDesc";
import ProductSpecs from "@/components/ProductSpecs";
import { Product } from "@/type";

const ProductPage = ({ params }: { params: { productId: string } }) => {
  const product = products.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, "-") === params.productId,
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="w-full">
      <div className="w-full flex flex-col justify-center items-center md:flex-row md:gap-16 md:relative mt-5">
        <h1 className="text-4xl font-bold text-center mb-1 md:absolute md:top-1 z-10">
          {product.name}
        </h1>
        <ProductImages product={product} />
        <ProductDesc product={product} />
      </div>
      <ProductSpecs product={product} />
      <div className="mt-16">
        <h1 className="text-2xl font-semibold mb-8">Trending now</h1>
        <CarouselProduct products={products as Product[]} />
      </div>
    </div>
  );
};

export default ProductPage;
