import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";


export const Dashboard = () => {

  return (
    <div className="bg-slate-100 h-screen">
      <NavBar />
      <div className="bg-white w-full max-w-7xl m-auto mt-10 rounded-lg h-96">
      <Outlet />
      </div>
      



    </div>
  );
}
