import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Layout from "./Layout";
import RecepieList from "./components/recepies/RecepieList";
import RecipeDetails from "./components/recepies/RecipeDetails";
import DiscoverProfile from "./components/discover/DiscoverProfile";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover-profile" element={<DiscoverProfile />} />
        <Route path="/recepies" element={<RecepieList />} />
        <Route path={"/recipe/details/:id"} element={<RecipeDetails />} />
      </Routes>
    </Layout>
  );
}

export default App;
