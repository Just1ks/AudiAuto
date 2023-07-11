import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route, Link } from "react-router-dom";

import Main from "./pages/Main";
import Car from "./pages/Car";
import Registration from "./pages/Registration";
import Auth from "./pages/Auth";
import Profile  from "./pages/Profile";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/car/:name/:id" element={<Car />}/>
          <Route path="/registration" element={<Registration />}/>
          <Route path="/auth" element={<Auth />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>      
      <Footer />
    </div>
  );
}

export default App;
