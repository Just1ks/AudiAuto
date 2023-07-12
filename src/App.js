import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import { Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Car from "./pages/Car";
import Auth from "./pages/Auth";
import Profile  from "./pages/Profile";
import NotFound from "./pages/NotFound";
import TestDrive from "./pages/TestDrive";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );

  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/car/:name/:id" element={<Car />}/>
          <Route path="/login" element={<Auth onLogin={setIsLoggedIn}/>}/>            
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile onLogout={setIsLoggedIn}/>}/>
          </Route>
          <Route path="/test-drive" element={<PrivateRoute />}>
            <Route path="/test-drive" element={<TestDrive />}/>
          </Route>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>      
      <Footer />
    </div>
  );
}

export default App;
