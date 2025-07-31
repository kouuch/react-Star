import React from "react";
import { useState } from "react";
function Search(props) {
  const [search, setSearch] = useState("");
  
  const changeSearch = (e) => {
    setSearch(e.target.value);
    props.changeSearch(e.target.value)
  };
  return (
    <>
      <div>
        Cari Artikel : <input onChange={changeSearch} />
      </div>
      <small>{props.totalPosts} data dengan pencarian kata {search}</small>
      <br />
      <br />
    </>
  );
}

export default Search;
