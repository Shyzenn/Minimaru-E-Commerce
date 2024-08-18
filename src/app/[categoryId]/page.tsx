import products from "@/lib/data.json";
import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/categories";

const Page = ({ searchParams }: { searchParams: { categoryId: string } }) => {
  const selectedCategoryId = (searchParams.categoryId || "all")
    .toLowerCase()
    .replace(/\s+/g, "-");

  const selectedCategory = categories.find(
    (category) => category.id === selectedCategoryId,
  );
  const selectedCategoryName = selectedCategory ? selectedCategory.name : "All";

  const filteredProducts =
    selectedCategoryId === "all"
      ? products
      : products.filter((product) =>
          product.categories
            .map((cat) => cat.toLowerCase().replace(/\s+/g, "-"))
            .includes(selectedCategoryId),
        );

  return (
    <div className="mt-10">
      <h1 className="text-center mb-10 text-2xl font-bold uppercase">
        {selectedCategoryName}
      </h1>

      <div className="flex gap-5 mb-10 justify-center flex-wrap">
        {categories.map((category) => (
          <Link
            href={`?categoryId=${encodeURIComponent(category.id)}`}
            key={category.id}
            className={`border-2 px-4 ${
              selectedCategoryId === category.id
                ? "border-black"
                : "border-neutral-300"
            }`}
          >
            {category.name}
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
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
          ))
        ) : (
          <p>No Products</p>
        )}
      </div>
    </div>
  );
};

export default Page;
