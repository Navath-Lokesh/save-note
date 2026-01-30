import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Paste from "./components/Paste";
import ViewPaste from "./components/ViewPaste";
import "./App.css";

/* ============================
   🔽 ADDED: Common Layout
   This centers everything
============================ */
const Layout = ({ children }) => {
  return (
    <div
      className="
        min-h-screen 
        flex 
        justify-center 
        pt-10
      "
    >
      {/* 🔽 ADDED: Center card */}
      <div
        className="
          w-full 
          max-w-[750px] 
        "
      >
        {/* Navbar stays inside center */}
        <Navbar />

        {/* Page content */}
        {children}
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/pastes",
    element: (
      <Layout>
        <Paste />
      </Layout>
    ),
  },
  {
    path: "/pastes/:id",
    element: (
      <Layout>
        <ViewPaste />
      </Layout>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
