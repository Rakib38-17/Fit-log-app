import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/logo.png";
import DynamicNav from "./dynamicNav";

const Navbar = () => {
  const link = (
    <>
      <li>
        <Link
          className="hover:bg-[#1A2312] text-[#CCFF00] rounded-3xl"
          href="/homePage">
          workouts{" "}
        </Link>
      </li>
      <li>
        <Link className="rounded-3xl" href="/myPlan">
          my plan{" "}
        </Link>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-base-100 shadow-sm">
      <div className=" navbar  container mx-auto ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {link}
            </ul>
          </div>
          <div className="flex gap-1">
            <Image src={logo} alt="logo" width={30} height={30}></Image>
            <h2 className=" text-xl">FITLOG</h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className=" flex gap-4 navbar-end">
          <DynamicNav></DynamicNav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
