import Link from "next/link";
import Image from "next/image";
import { categories } from "@/lib/categories";

export default function CategoryCards() {
  return (
    <div className="grid grid-cols-2 w-full md:grid-cols-[75%,24%] gap-3 h-full mt-5">
      {/* 75% */}
      <div className="w-full md:flex md:h-full gap-3">
        <div className="relative block w-full h-[15.1rem] mb-3 md:h-full md:w-[70%]">
          <Link
            href={`/categories?categoryId=${categories.find(
              (cat) => cat.name === "Furnitures",
            )?.id}`}
            className="relative block w-full h-full"
          >
            <div className="relative w-full h-full">
              <Image
                src="/homeImg/home-img-1.jpg"
                alt="Live Comfortably"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-black opacity-30 hover:opacity-50 transition ease-linear duration-500"></div>
              <h1 className="text-white absolute text-2xl md:text-4xl font-[600] bottom-2 left-4">
                Live Comfortably
              </h1>
            </div>
          </Link>
        </div>
        <div className="relative block w-full h-[15.1rem] md:h-full md:w-[35%]">
          <Link
            href={`/categories?categoryId=${categories.find(
              (cat) => cat.name === "Skin Care",
            )?.id}`}
            className="relative block w-full h-full "
          >
            <div className="relative w-full h-full">
              <Image
                src="/homeImg/home-img-2.jpg"
                alt="Skin Care"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-black opacity-30 hover:opacity-50 transition ease-linear duration-500"></div>
              <h1 className="text-white absolute text-2xl md:text-4xl font-[600] bottom-2 left-4">
                Skin Care
              </h1>
            </div>
          </Link>
        </div>
      </div>

      {/* 25% */}
      <div className="w-full">
        <Link
          href={`/categories?categoryId=${categories.find(
            (cat) => cat.name === "Kitchen",
          )?.id}`}
          className="relative block w-full h-[15.1rem] mb-3"
        >
          <div className="relative w-full h-full">
            <Image
              src="/homeImg/home-img-3.jpg"
              alt="Kitchen"
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black opacity-30 hover:opacity-50 transition ease-linear duration-500"></div>
            <h1 className="text-white absolute text-2xl md:text-4xl font-[600] bottom-2 left-4">
              Kitchen
            </h1>
          </div>
        </Link>
        <Link
          href={`/categories?categoryId=${categories.find(
            (cat) => cat.name === "Electronics",
          )?.id}`}
          className="relative block w-full h-[15.1rem]"
        >
          <div className="relative w-full h-full">
            <Image
              src="/homeImg/home-img-4.jpg"
              alt="Electronics"
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black opacity-30 hover:opacity-50 transition ease-linear duration-500"></div>
            <h1 className="text-white absolute text-2xl md:text-4xl font-[600] bottom-2 left-4">
              Electronics
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
