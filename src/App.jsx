import { Bounce, ToastContainer } from "react-toastify";
import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./Components/common/Navbar"

function App() {
  return (
    <>
      <Navbar/>
      <AllRoutes />

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme={"light"}
        transition={Bounce}
      />
    </>
  );
}

export default App;
