import "./App.css";
// import Article from "./components/Article";
// import Blog from "./components/Blog";
import { GlobalContext } from "./context";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers";

function App() {
  const user = {
    username: "kouchh",
  };
  return (
    // <>
    //   {/* props gunakan {} untuk data aray atau bukan string*/}
    //   <Article
    //     name="budi"
    //     title={["ini adalah satu", "ini adalah dua", "ini adalah tiga"]}
    //   />
    //   <br />
    //   <Article
    //     name="Tono"
    //     title={["ini adalah tiga", "ini adalah dua", "ini adalah satu"]}
    //   />
    //   <br />
    //   <Blog />
    // </>
    <div className="App">
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
