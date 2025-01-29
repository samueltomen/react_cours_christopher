import "./App.css";
import Login from "./pages/Login.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import ProtectedRoute from "./pages/ProtectedRoute.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
