import { Routes } from "./routes";

export const App = () => {
  return (
    <div className="App">
      <div>
        <a href="/">Dashboard</a>
        <a href="/login">Login</a>
      </div>
      <Routes />
    </div>
  );
}
