import { Outlet } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Categories from "./components/pages/HomePage/Categories";
import HomeBanner from "./components/pages/HomePage/HomeBanner";

function App() {
  return (
    <>
    <Layout>
      <HomeBanner/>
      <Categories/>
      <Outlet/>
    </Layout>
    </>
  );
}

export default App;
