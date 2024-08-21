import "./App.css";
import Headbar from "./components/Headbar";
import Layout from "./components/Layout";
import Categories from "./components/pages/HomePage/Categories";
import HomeBanner from "./components/pages/HomePage/HomeBanner";

function App() {
  return (
    <>
    <Layout>
      <Headbar/>
      <HomeBanner/>
      <Categories/>
    </Layout>
    </>
  );
}

export default App;
