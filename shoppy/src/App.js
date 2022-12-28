import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="max-w-5xl	w-full mx-auto p-1">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
