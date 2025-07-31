import React from "react";
import { useState } from "react";
function Search() {
  const [search, setSearch] = useState("");

  const changeSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div>
        Cari Artikel : <input onChange={changeSearch} />
      </div>
      <small>0 data dengan pencarian kata {search}</small>
      <br />
      <br />
    </>
  );
}

export default Search;
