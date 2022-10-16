import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TopNavbar from "./Components/TopNavBar";
import { useTheme } from "./Context/ThemeContext";
import Features from "./Pages/Features";
import HomePage from "./Pages/HomePage";
import Pricing from "./Pages/Pricing";
import NoPage from "./Pages/NoPage";

function App() {
  const { theme } = useTheme();
  return (
    <BrowserRouter>
      <div className={theme}>
        <TopNavbar />
        <Routes>
          <Route path="*" element={<NoPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
