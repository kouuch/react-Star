import React from "react";

function Blog() {
  const name = "Rifky";
  // arry
  const juduls = ["judul1", "judul2", "judul3"];

  
  return (
    <>
    {/* // kalibrasi {} */}
    <div>{name}</div>
    {/*kalibrari arry dengan mapping */}
    <div>{juduls.map(judul =>{
      return (
        <>
          <div>{judul}</div>
          <div>{judul}</div>
        </>
      )
    })}</div>
    </>
    
    
  );
}

export default Blog;
