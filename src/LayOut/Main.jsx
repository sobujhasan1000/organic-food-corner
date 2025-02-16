import { Outlet } from "react-router";
import Footer from "../componants/shared/Footer";
import Navbar from "../componants/shared/Navbar";
import { useUser } from "../Context/useUser";

const Main = () => {
  const { user } = useUser() || {};
  return (
    <div className="bg-[#f1f5b9]">
      <Navbar user={user} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
