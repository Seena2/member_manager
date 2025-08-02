import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../store/features/auth/authSlice";
import Spiner from "../components/Spiner";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  //destructure the form fields
  const { name, email, password, password2 } = formData;
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
    }
    if (isSuccess || user) {
      //redirect user
      navigate("/");
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
    //check if the password matches
    if (password !== password2) {
      toast.error("Password do not match");
    } else {
      //get the form data for registration
      const userData = { name, email, password };
      //register the user using 'register method(from the authSlice) via dispatcher
      dispatch(register(userData));
    }
  };
  if (isLoading) {
    <Spiner />;
  }
  return (
    <>
      <section className="heading">
        <h1>
          <FaUser />
          Register
        </h1>
        <p>Create an account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              placeholder="Enter Your name"
              onChange={onInputChange}
            />
          </div>
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
            <input
              type="password"
              className="form-control"
              id="password2"
              name="password2"
              value={password2}
              placeholder="Confirm password"
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
          you have an account? <Link to="/login">Sign in here</Link>
        </p>
      </section>
    </>
  );
}

export default Register;
