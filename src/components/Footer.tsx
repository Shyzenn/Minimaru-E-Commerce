import Link from "next/link";

export default function Footer() {
  const links = [
    "About",
    "Store locator",
    "FAQs",
    "News",
    "Careers",
    "Contact Us",
  ];

  return (
    <>
      <div className="h-[28rem] mt-20">
        <div className="bg-zinc-900 h-[65%] flex flex-col items-center justify-center gap-5">
          <h1 className="text-4xl text-white font-bold">Newsletter</h1>
          <div className="flex gap-2">
            <input
              className="px-2 py-1 outline-none w-64 text-lg"
              type="email"
              placeholder="your@email.com"
            />
            <button className="bg-white text-lg px-2">Subscribe</button>
          </div>
        </div>
        <div className="bg-zinc-950 h-[35%] text-white flex flex-col items-center justify-center gap-5">
          <ul className="flex flex-wrap gap-8 text-lg justify-center">
            {links.map((link, index) => (
              <Link href="/" key={index}>
                <li className="cursor-pointer hover:underline">{link}</li>
              </Link>
            ))}
          </ul>
          <p className="text-lg">Design by Abderraouf</p>
        </div>
      </div>
    </>
  );
}
