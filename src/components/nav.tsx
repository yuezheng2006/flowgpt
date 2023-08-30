import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";

const Nav = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full">
      <nav className="footer items-center p-1 text-neutral-content">
        <div className="items-center grid-flow-col">
          <a
            className="btn btn-ghost"
            href="https://www.superkeys.app/"
            rel="noreferrer"
            target="_blank"
          >
            <Image
              src="/brand/logo_text.png"
              width={100}
              height={20}
              alt="Flowgpt Logo"
            />
            <div className="badge badge-sm self-end">alpha</div>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
