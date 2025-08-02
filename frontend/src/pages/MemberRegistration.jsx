import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import MemberHeader from "../components/member/MemberHeader";
import MemberInfo from "../components/member/MemeberInfo";
import Cooperative from "../components/member/Cooperative";
import Regular from "../components/member/Regular";

function Member() {
  const [formData, setFormData] = useState({
    membershipType: "regular",
    organizationName: "",
  });
  //destructure the form fields
  const { membershipType, organizationName } = formData;

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
      <MemberHeader />

      {/* <MemberInfo /> */}
      <h1>New Members Registration Form</h1>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="">Type of Memebership:</label>
            <select
              id="membershipType"
              name="membershipType"
              className="form-control"
              value={membershipType}
              onChange={onInputChange}
              required
            >
              <option value="regular">Regular</option>
              <option value="cooperative">Cooperative</option>
              <option value="lifeTime">Life Time</option>
              <option value="honorary">Honorary</option>
            </select>
          </div>
          <p>
            Required fields are labelled with "required"
            <strong>
              <abbr title="required">(*)</abbr>
            </strong>
          </p>
          {membershipType === "cooperative" ? <Cooperative /> : <Regular />}

          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Member;
