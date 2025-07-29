import "./App.css";
// import Article from "./components/Article";
// import Blog from "./components/Blog";
import Home from "./pages/Homepage";

function App() {
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
      <Home />
    </div>
  );
}

export default App;
