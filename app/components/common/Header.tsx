// "use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-center p-2">
      <Link href={'/'}>
        <Image
            className=""
            src="/logo.png"
            alt="Logo"
            width={150}
            height={150}
            priority
          />
      </Link>
    </header>
  );
};

export default Header;