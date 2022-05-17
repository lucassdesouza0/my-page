import React from "react";

const Menu: React.FC = () => {
  return (
    <nav className="container basis-1/2 ">
      <ul className="flex flex-row divide-x">
        <li className="mx-8 border-solid border-2 border-sky-500">
          <a href="#bio">Bio</a>{" "}
        </li>
        <li className="mx-8 border-solid border-2 border-sky-500">
          <a href="#blog">Blog</a>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
