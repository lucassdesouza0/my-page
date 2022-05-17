import React from "react";

import Menu from "components/Menu";

const Header: React.FC = () => {
  return (
    <header className="container mx-auto flex flex-row my-8">
      <h1 className="basis-1/2">Lucas Santos</h1>
      <Menu />
    </header>
  );
};

export default Header;
