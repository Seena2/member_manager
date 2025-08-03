import { useState, useEffect } from "react";
import MemberInfo from "../components/member/MemeberInfo";
import Cooperative from "../components/member/Cooperative";
import MemberForm from "../components/member/MemberForm";
import { Link } from "react-router-dom";

function Member() {
  const [formData, setFormData] = useState({
    membershipType: "",
  });
  //destructure the form fields
  const { membershipType } = formData;

  //generic onchange mehtod that can be use for each input, using the 'name' attiribute
  const onInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {/* <MemberInfo /> */}

      <ul className="justfy-left">
        <h4>Instructions</h4>
        <li>
          Before starting the registration process, please Make sure to{" "}
          <Link className="link" to="">
            read this instructions
          </Link>
        </li>
        <li>
          Pay the members fee to the
          <Link className="link" to="">
            {" "}
            EVA members bank account
          </Link>
        </li>
        <li>
          Choose the type of membership you want and start the registration
        </li>
        <li>
          Required fields are labelled with astrix (
          <span className="required">*</span>)
        </li>
      </ul>
      <h4>New Members Registration Form</h4>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="membershipType">
              Type of Memebership<span className="required">*</span>
            </label>
            <select
              id="membershipType"
              name="membershipType"
              className="form-control"
              value={membershipType}
              onChange={onInputChange}
              required
            >
              <option value="">Select membership type</option>
              <option value="regular">Regular</option>
              <option value="cooperative">Cooperative</option>
              <option value="lifeTime">Life Time</option>
              <option value="honorary">Honorary</option>
            </select>
          </div>

          {membershipType &&
            (membershipType === "cooperative" ? (
              <Cooperative />
            ) : (
              <MemberForm />
            ))}

          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
      <footer>Seena &copy; 2020</footer>
    </>
  );
}

export default Member;
