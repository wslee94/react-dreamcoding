import { Outlet } from "react-router-dom";
import { AuthContextProvider } from "./components/context/AuthContext";
import NavBar from "./components/NavBar";

function App() {
  return (
    <AuthContextProvider>
      <NavBar />
      <Outlet />
    </AuthContextProvider>
  );
}

export default App;
