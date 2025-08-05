import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CooperativeMemberForm from "../components/member/CooperativeMemberForm";
import StandardMemberForm from "../components/member/StandardMemberForm";
import MembershipInfo from "../components/member/MembershipInfo";
import {
  createMember,
  getMember,
  reset,
} from ".././store/features/members/memberSlice";
import Spiner from "../components/Spiner";

function Dashboard() {
  //store the complete member data to be sent to the DB
  const [member, setMember] = useState({});
  const [formData, setFormData] = useState({
    membershipType: "",
    memberData: "",
    standardMember: [],
    cooperativeMember: [],
  });
  //destructure the form fields
  const { membershipType, memberData } = formData;

  //generic onchange mehtod that can be use for each input, using the 'name' attiribute
  const onInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  //initialize useDispath and useNavigate
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //get the user
  const { user } = useSelector((state) => state.auth);
  //get member states
  const { members, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.members
  );
  //check if user is logged, if not redirect user to login page
  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    }
    dispatch(getMember());
    //clear and reset member data on unmount
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  //Handler functions
  const goToRegistration = () => {
    console.log("hide info and show registration form");
    // const info = document.querySelector(".info");
    // info.classList.add("hide");
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createMember(memberData));
    //Clear the form input fields
  };

  if (isLoading) {
    return <Spiner />;
  }
  return (
    <div>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Members Dashboard</p>
      </section>
      <section>
        <MembershipInfo className="info" />

        <button onClick={goToRegistration}>
          {" "}
          Continue to the Registration
        </button>
        <ul className="justfy-left">
          <h4>Instructions</h4>
          <li>
            Before starting the registration process, please Make sure to
            carefuly read the{" "}
            <Link className="link" to="">
              Constitution of EVA
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
      </section>

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
              <CooperativeMemberForm />
            ) : (
              <StandardMemberForm membershipType />
            ))}

          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
      <section className="content">
        <h4>member details fetched from the DB</h4>
        {members.length > 0 ? (
          <div className="members">
            {members.map((member) => (
              <MemberItem key={member._id} member={member} />
            ))}
          </div>
        ) : (
          <p>No details to show</p>
        )}
      </section>
      <footer>Seena &copy; 2020</footer>
    </div>
  );
}
export default Dashboard;
