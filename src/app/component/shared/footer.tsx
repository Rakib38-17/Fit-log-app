import React from "react";
import logo from "@/app/assets/logo.png";
import Image from "next/image";

const FooterPage = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content justify-between p-4">
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-start">
        <div className="flex gap-1">
          <Image src={logo} alt="logo" width={30} height={30}></Image>
          <h2 className=" text-xl">FITLOG</h2>
        </div>
      </nav>
      <div className="grid-flow-col">
        <p>
          Copyright © {new Date().getFullYear()} Fitlog- Workout Library. Train
          hard, log honest
        </p>
      </div>
    </footer>
  );
};

export default FooterPage;
