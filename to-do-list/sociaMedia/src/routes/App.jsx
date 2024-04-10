import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import PostListProvider from "../store/post-list-store";

function App() {
  return (
    <PostListProvider>
      <div className="appContainer">
        <Sidebar></Sidebar>
        <div className="contentClass">
          <Header></Header>
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
