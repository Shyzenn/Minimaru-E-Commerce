import CategoryCard from "@/components/CategoryCard";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
import ProudProducts from "@/components/ProudProducts";
import Trend from "@/components/trend";
import products from "@/lib/data.json"; // Import the JSON data directly
import { Product } from "@/type";

export default function Home() {
  return (
    <>
      <CategoryCard />
      <ProudProducts products={products as Product[]} />
      <Hero />
      <Trend />
      <Hero2 />
    </>
  );
}
