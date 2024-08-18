import { Product } from "@/type";

const ProductSpecs: React.FC<{ product: Product }> = ({ product }) => {
  const specs = [
    { label: "Texture", value: product.Texture },
    { label: "Weight", value: product.Weight },
    { label: "Size", value: product.Size },
  ];

  return (
    <div className="w-full flex flex-col mt-16 gap-7 md:flex-row">
      {specs.map((spec, index) => (
        <div key={index} className="bg-stone-200 p-5 md:w-[23rem]">
          <h2 className="text-2xl font-semibold">Texture:</h2>
          <p>{spec.value}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductSpecs;
