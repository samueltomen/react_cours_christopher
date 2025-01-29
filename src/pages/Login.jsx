import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slices/authSlice.js";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(formData));
    if (auth.isAuthenticated) {
      console.log("Login successful");
      navigate("/");
    }
  };

  useEffect(() => {
    if (auth.status === "succeeded") {
      navigate("/");
    }
  });

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
        {auth.error && <div>{auth.error}</div>}
      </form>
    </div>
  );
}
