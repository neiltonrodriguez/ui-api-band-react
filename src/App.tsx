import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/dashboard";
import LoginPage from "./pages/login";

function App() {
  return (
    <div className="w-full h-auto bg-slate-100">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
