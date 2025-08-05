import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Employment from "./Employment";

import Agreement from "./Agreement";
import Confirmation from "./Confirmation";
import Education from "./Education";

const MemberForm = () => {
  const [formData, setFormData] = useState({
    membershipType: "",
    //Profile
    title: "",
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    nationality: "",
    maried: "",
    numOfChildren: 0,
    photo: "",
    //Address
    city: "",
    country: "",
    email: "",
    email2: "",
    phone1: "",
    phone2: "",
    pobox: "",
    //career
    employment: "",
    experiance: [],
    totalYearsOfExperaince: 0,
    careerInterest: "",
    //education
    highestQualification: "",
    education: [],
    otherQualification: "",
    temporary: "",
  });

  //destructure the form fields
  const {
    membershipType,
    title,
    firstName,
    middleName,
    lastName,
    gender,
    dateOfBirth,
    nationality,
    maried,
    numOfChildren,
    photo,
    //Address
    city,
    country,
    email,
    email2,
    phone1,
    phone2,
    pobox,
    //career
    employment,
    experiance,
    totalYearsOfExperaince,
    careerInterest,
    //education
    highestQualification,
    education,
    otherQualification,
    temporary,
  } = formData;
  //initialize useDispatch and navigate
  const dispatch = useDispatch();

  //generic onchange mehtod that can be use for each input, using the 'name' attiribute
  const onInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(formData);
  return (
    <>
      <h3 className="smallTitle">
        You are registering as a {membershipType} member
      </h3>

      <div className="profile">
        <h4 className="formSectionHeader">Profile</h4>
        <div className="form-group">
          <label htmlFor="">Title</label>
          <select
            className="form-control"
            name="title"
            id="title"
            value={title}
            onChange={onInputChange}
          >
            <option value="">Select your title</option>
            <option value="dr">Dr.</option>
            <option value="prof">Prof</option>
            <option value="mr">Mr.</option>
            <option value="mrs">Mrs.</option>
            <option value="mis">Mis.</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="firstName">
            First Name<span className="required">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={firstName}
            placeholder="Enter Your First Name"
            onChange={onInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="middleName">
            {" "}
            Middle Name<span className="required">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="middleName"
            name="middleName"
            value={middleName}
            placeholder="Enter Your Middle Name"
            onChange={onInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">
            Last Name<span className="required">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={lastName}
            placeholder="Enter Your Last Name"
            onChange={onInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">
            Date of Birth<span className="required">*</span>
          </label>
          <input
            type="date"
            className="form-control"
            id="dateOfBirth"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={onInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">
            Gender<span className="required">*</span>
          </label>
          <select
            id="gender"
            name="gender"
            className="form-control"
            value={gender}
            onChange={onInputChange}
            required
          >
            <option value="">Select your gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="nationality">
            Nationality<span className="required">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="nationality"
            name="nationality"
            value={nationality}
            placeholder="Enter Your Nationality/citizinship"
            onChange={onInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="maried">Marital Status:</label>
          <select
            id="maried"
            name="maried"
            className="form-control"
            value={maried}
            onChange={onInputChange}
          >
            <option value="">Select your gender</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="numOfChildren"> Number of Children:</label>
          <input
            type="number"
            className="form-control"
            id="numOfChildren"
            name="numOfChildren"
            value={numOfChildren}
            placeholder="Number of children"
            onChange={onInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="photo">
            {" "}
            Add your Photo<span className="required">*</span>
          </label>
          <input
            type="file"
            className="form-control"
            id="photo"
            name="photo"
            value={photo}
            accept="image/*"
            onChange={onInputChange}
            required
          />
        </div>
        <div className="pagination">
          <button>Prev</button>
          <button>Next</button>
        </div>
      </div>
      <div className="address">
        <h4 className="formSectionHeader">Contact Address</h4>
        <div className="form-group">
          <label htmlFor="city">
            City<span className="required">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            value={city}
            placeholder="City you are currently living in"
            onChange={onInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">
            Country<span className="required">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="country"
            name="country"
            value={country}
            placeholder="Country"
            onChange={onInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">
            {" "}
            Email(Primary)<span className="required">*</span>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            placeholder="yourmail@example.com"
            onChange={onInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email"> Email(Secondary)</label>
          <input
            type="email"
            className="form-control"
            id="email2"
            name="email2"
            value={email2}
            placeholder="secondary@example.com"
            onChange={onInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone1">
            Primary Phone Number<span className="required">*</span>
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone1"
            name="phone1"
            value={phone1}
            placeholder="Enter Your primary phone number"
            onChange={onInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone2"> Secondary Phone Number(optional)</label>
          <input
            type="tel"
            className="form-control"
            id="phone2"
            name="phone2"
            value={phone2}
            placeholder="Enter Your secondary phone number"
            onChange={onInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pobox"> P.o.Box(If any):</label>
          <input
            type="text"
            className="form-control"
            id="pobox"
            name="pobox"
            value={pobox}
            placeholder="P.o.box Number"
            onChange={onInputChange}
          />
        </div>

        <div className="pagination">
          <button>Prev</button>
          <button>Next</button>
        </div>
      </div>
      <div className="career">
        <h4 className="formSectionHeader">Career and Experiences</h4>
        <div className="form-group">
          <label htmlFor="employment">
            Employment<span className="required">*</span>
          </label>
          <select
            className="form-control"
            name="employment"
            id="employment"
            value={employment}
            onChange={onInputChange}
          >
            <option value="">Select employment history</option>
            <option value="unemployed">Unemployed</option>
            <option value="employed">Employed</option>
          </select>
        </div>

        {employment === "employed" ? (
          <Employment />
        ) : (
          <div>No employment history</div>
        )}
        <div className="form-group">
          <label htmlFor="totalYearsOfExperaince">
            Total years of experaince(In years)
            <span className="required">*</span>
          </label>
          <input
            type="Number"
            className="form-control"
            id="totalYearsOfExperaince"
            name="totalYearsOfExperaince"
            value={totalYearsOfExperaince}
            placeholder="experince in years"
            onChange={onInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="careerInterest">
            What is your career interest?<span className="required">*</span>
          </label>
          <select
            id="careerInterest"
            name="careerInterest"
            className="form-control"
            value={careerInterest}
            onChange={onInputChange}
            required
          >
            <option value="">Select your career interest</option>
            <option value="academician">Academician</option>
            <option value="researcher">Researcher</option>
            <option value="fieldPractitioner">Field Practitioner</option>
            <option value="privatePractitioner">Private Practitioner</option>
            <option value="developmentOrganization">
              To work for development organization
            </option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="pagination">
          <button>Prev</button>
          <button>Next</button>
        </div>
      </div>
      <div className="education">
        <h4 className="formSectionHeader">Education</h4>
        <div className="form-group">
          <label htmlFor="highestQualification">
            Highest Level of Academic Qualification Achieved
            <span className="required">*</span>
          </label>
          <select
            className="form-control"
            name="highestQualification"
            id="highestQualification"
            value={highestQualification}
            onChange={onInputChange}
            required
          >
            <option value="">Select your highest qualification</option>
            <option value="dvm">DVM</option>
            <option value="msc_mvsc">MSc/MVSc</option>
            <option value="phd">PhD</option>
            <option value="other">Other</option>
          </select>
        </div>
        <Education />
        <div className="form-group">
          <label htmlFor="otherQualification">
            Other qualification(if any separate them by comma) :
          </label>
          <textarea
            name="otherQualification"
            id="otherQualification"
            value={otherQualification}
            onChange={onInputChange}
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="temporary">
            Please upload scanned copy of your temporary degree
          </label>
          <input
            type="file"
            className="form-control"
            id="temporary"
            name="temporary"
            value={temporary}
            onChange={onInputChange}
            required
          />
        </div>
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

export default MemberForm;
