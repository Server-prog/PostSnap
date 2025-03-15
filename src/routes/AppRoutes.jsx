import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Chat from "../pages/Chat";
import Emailconfirmation from "../pages/Emailconfirmation";
import Resetpassword from "../pages/Resetpassword";
import Navbar from "../components/Navbar";

function AppLayout() {
  const location = useLocation();
  
  // Define as páginas onde a Navbar NÃO deve aparecer
  const hideNavbarRoutes = ["/", "/login", "/emailconfirmation", "/resetpassword"];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <main className="flex-grow p-4">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/emailconfirmation" element={<Emailconfirmation />} />
          <Route path="/resetpassword" element={<Resetpassword />} />
        </Routes>
      </main>
    </>
  );
}

function AppRoutes() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default AppRoutes;
