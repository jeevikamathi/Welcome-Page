import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/sign-in";
import Login from "./pages/log-in";

function App() {
  return (
    <Router>
      <div>
        {/* Navigation */}
        <nav className="bg-gray-800 p-4">
          <ul className="flex space-x-4 text-white">
            <li>
              <Link to="/" className="hover:text-indigo-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/signin" className="hover:text-indigo-400">
                Sign In
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-indigo-400">
                Login
              </Link>
            </li>
          </ul>
        </nav>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
