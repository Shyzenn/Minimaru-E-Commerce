import Link from "next/link";
import MobileMenu from "./MobileMenu";
import CartIcon from "./CartIcon";
import CartContent from "./CartContent";

const NavbarLink = () => {
  return (
    <div className="flex items-center">
      <div className="hidden md:flex items-center gap-4">
        <Link href="/" className=" hover:underline">
          Home
        </Link>
        <Link href="/category?=all" className=" hover:underline">
          Categories
        </Link>
        <div className="flex gap-4 mr-7">
          <Link
            href="/"
            className="text-lg border-l border-slate-400 pl-4 hover:underline"
          >
            Sign up
          </Link>
          <Link
            href="/categories"
            className="text-lg border-l border-slate-400 pl-4 hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
      <div className=" flex items-center gap-8 justify-center">
        <CartContent />
        <MobileMenu />
      </div>
    </div>
  );
};

export default NavbarLink;
