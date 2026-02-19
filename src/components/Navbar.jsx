import React from "react";
import { FaCaretDown } from "react-icons/fa";
const navlinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Menu",
    link: "/menu",
  },
  {
    id: 3,
    name: "Contact",
    link: "/contact",
  },
];

function Navbar() {
  return (
    <section className="bg-white shadow-sm">
      <div className="container ">
        <div className="flex justify-between items-center text-2xl py-4">
          <div className="font-bold">Logo</div>

          <ul className="flex gap-20">
            {navlinks.map((items) => (
              <li key={items.id}>
                <a href={items.link}>{items.name}</a>
              </li>
            ))}
            <li>
              <a
                href="/#"
                className="flex hover:text-primary text-xl font-semibold"
              >
                Dropdown
                <span>
                  <FaCaretDown />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
