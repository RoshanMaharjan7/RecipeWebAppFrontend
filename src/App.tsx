import "./App.css";
import Headbar from "./components/Headbar";
import Layout from "./components/Layout";
import HomeBanner from "./components/pages/HomePage/HomeBanner";

function App() {
  return (
    <>
    <Layout>
      <Headbar/>
      <HomeBanner/>
    </Layout>
    </>
  );
}

export default App;
