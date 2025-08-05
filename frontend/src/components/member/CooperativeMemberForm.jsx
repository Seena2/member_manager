import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Address from "./Address";
import Agreement from "./Agreement";
import Confirmation from "./Confirmation";

const Cooperative = () => {
  const [corporateMember, setCorporateMember] = useState([]);
  const [formData, setFormData] = useState({
    membershipType: "cooperative",
    orgType: "",
    organizationName: "",
    address: [],
    fee: "",
    agreement: "",
  });
  //destructure the form fields data
  const { orgType, organizationName, fee, agreement } = formData;
  //generic onchange mehtod that can be use for each input, using the 'name' attiribute
  const onInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const finish = () => {
    setCorporateMember((corporateMember) => [...corporateMember, formData]);
    //clear form fields
    setFormData({
      degree: "",
      university: "",
      study: "",
      dateCompleted: "",
    });
  };
  console.log(formData);
  console.log(corporateMember);

  return (
    <>
      <h4>You are registering as Cooperative member</h4>
      <p>For Corporate Members Only</p>
      <div className="profile">
        <h4 className="formSectionHeader">Profile</h4>
        <div className="form-group">
          <label>Name of your organization or institute</label>
          <input
            type="text"
            className="form-control"
            id="organizationName"
            name="organizationName"
            value={organizationName}
            placeholder="Enter Your organization name"
            onChange={onInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="orgType">
            Organization type <span className="required">*</span>
          </label>
          <select
            className="form-control"
            name="orgType"
            id="orgType"
            value={orgType}
            onChange={onInputChange}
            required
          >
            <option value="">Select organization type</option>
            <option value="governmental">Governmental</option>
            <option value="NGO">Non Governmental</option>
            <option value="civil">Civil</option>
            <option value="military">Military</option>
            <option value="association">Association</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div className="address">
        <Address />
        <div className="pagination">
          <button>Prev</button>
          <button>Next</button>
        </div>
      </div>
      <div className="agreement">
        <Agreement />
        <div className="pagination">
          <button>Prev</button>
          <button>Finish</button>
        </div>

        <Confirmation />
      </div>
    </>
  );
};

export default Cooperative;
