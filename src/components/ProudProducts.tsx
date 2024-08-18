import Image from "next/image";
import { Product } from "@/type";
import Link from "next/link";

type ProudProducts = {
  products: Product[];
};

const ProudProducts: React.FC<ProudProducts> = ({ products }) => {
  return (
    <div className="mt-24">
      <h1 className="text-2xl font-semibold mb-10">Products we are proud of</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {products.length > 0 ? (
          <>
            {products.map(
              (product) =>
                product.pwp && (
                  <Link
                    href={`/products/${product.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="border-2 border-gray-300 hover:border-black cursor-pointer transition duration-300"
                    key={product.id}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={280}
                      height={280}
                    />
                    <div className="p-2 flex flex-col gap-2">
                      <p className="text-lg">{product.name}</p>
                      <p className="text-xl font-semibold">{product.price}</p>
                    </div>
                  </Link>
                ),
            )}
          </>
        ) : (
          <p>No Products</p>
        )}
      </div>
    </div>
  );
};

export default ProudProducts;
