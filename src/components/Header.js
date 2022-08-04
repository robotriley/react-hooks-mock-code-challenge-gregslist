import React from "react";
import Search from "./Search";

function Header({searchTerm, setSearchTerm, setRefresh} ) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} setRefresh={setRefresh} />
    </header>
  );
}

export default Header;
