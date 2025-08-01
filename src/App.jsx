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

    <div className="App">
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router} Fallback={<div>Loading...</div>} />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
