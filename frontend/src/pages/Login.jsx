import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../store/features/auth/authSlice";
import { toast } from "react-toastify";
import Spiner from "../components/Spiner";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  //destructure the form fields
  const { email, password } = formData;
  //initialize hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //select what you want to get from state
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  //monitor for change in state values
  useEffect(() => {
    if (isError) {
      toast.error(message);
      navigate("/login");
    }
    if (isSuccess || user) {
      if (user && password) {
        //redirect user
        navigate("/");
      }
    }
    //reset state data
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  //generic onchange mehtod that can be use for each input, using the 'name' attiribute
  const onInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(login(userData));
    dispatch(reset());
  };
  if (isLoading) {
    <Spiner />;
  }
  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt />
          Login
        </h1>
        <p>Login to register as a member</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter Your email"
              onChange={onInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter password"
              onChange={onInputChange}
            />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
        <p>
          you don't have an account? <Link to="/register">Sign up here</Link>
        </p>
      </section>
    </>
  );
}

export default Login;
