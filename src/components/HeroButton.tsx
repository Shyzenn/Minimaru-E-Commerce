import Link from "next/link";

export default function HeroButton() {
  return (
    <>
      <div>
        <Link href="/category?=all">
          <button className="px-4 py-2 text-xl font-semibold uppercase transition duration-200 bg-black border-2 border-black text-white hover:bg-white hover:text-black">
            Shop now
          </button>
        </Link>
      </div>
    </>
  );
}
