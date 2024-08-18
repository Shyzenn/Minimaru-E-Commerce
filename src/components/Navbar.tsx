import Image from "next/image";
import NavbarLink from "./NavbarLink";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="max-w-[1300px] mx-auto my-0 flex items-center justify-between p-2 pr-5 md:pr-3.5 lg:pr-5">
      <Link href="/">
        <Image
          src="/logo.png"
          alt=""
          width={85}
          height={85}
          className="cursor-pointer"
        />
      </Link>

      <NavbarLink />
    </div>
  );
};

export default Navbar;
