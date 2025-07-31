import React from "react";
import { useState } from "react";
function Search(props) {
  const [search, setSearch] = useState("");

  // const changeSearch = (e) => {
  //   setSearch(e.target.value);
  //   props.changeSearch(e.target.value)
  // };

  const changeSearch = () => {
    props.changeSearch(search);
  };

  const searchKeydown = (e) => {
    if (e.key === "Enter") {
      changeSearch();
    }
  };

  return (
    <>
      <div>
        {/* ex 1 */}
        {/* Cari Artikel : <input onChange={changeSearch} />  */}
        {/* ex2  menggunakan btn dan enter*/}
        Cari Artikel :{" "}
        <input
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={searchKeydown}
        />
        <button onClick={changeSearch}>Cari</button>
      </div>
      <small>
        {props.totalPosts} data dengan pencarian kata {search}
      </small>
      <br />
      <br />
    </>
  );
}

export default Search;
