import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";

function App() {
  return (
    <div className="w-full max-w-4xl flex flex-col items-center justify-center m-auto p-2">
      <div>
        <h1 className="text-2xl text-slate-800 font-bold">GitHub Search</h1>
      </div>
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
