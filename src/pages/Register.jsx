import { useState } from "react";
import { register } from "../redux/slices/authSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Register() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(register(formData));
      if (auth.isAuthenticated) {
        navigate("/login");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" disabled={auth.status === "loading"}>
          {auth.status === "loading" ? "Loading..." : "Register"}
        </button>
        {auth.error && <div>{auth.error}</div>}
      </form>
    </div>
  );
}
