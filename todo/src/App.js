import { ThemeProvider } from "./context/ThemeContext";
import ToDo from "./template/todo";

function App() {
  return (
    <ThemeProvider>
      <ToDo />
    </ThemeProvider>
  );
}

export default App;
