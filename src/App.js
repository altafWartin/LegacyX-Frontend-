import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import AuthorizedCom from "./containers/AuthorizedCom";
import UnAuthorizedCom from "./containers/UnAuthorizedCom";

function PrivateRoute({ element, ...rest }) {
  const isAuthenticated = !!localStorage.getItem("token");

  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" />
  );
}

function App() {
  return (
    <div className="w-full">
     <UnAuthorizedCom />
        <AuthorizedCom />

    </div>
  );
}

export default App;
