import { useState } from "react";
import Employment from "./Employment";
import Fee from "./Fee";
import Agreement from "./Agreement";
import Confirmation from "./Confirmation";

const Regular = () => {
  const [formData, setFormData] = useState({
    employment: "unemployed",
    organizationName: "",
  });
  //destructure the form fields
  const { employment, organizationName } = formData;
  //generic onchange mehtod that can be use for each input, using the 'name' attiribute
  const onInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div>
      {/* <h3>`You are registering as {memberType}</h3> */}
      <h3>Regular</h3>

      <div className="profile">
        <h4>Profile</h4>
        <div className="form-group">
          <label htmlFor="">Title</label>
          <select
            className="form-control"
            name="title"
            id="title"
            //   value={title}
            //   onChange={onInputChange}
          >
            <option value="dr">Dr.</option>
            <option value="prof">Prof</option>
            <option value="mr">Mr.</option>
            <option value="mrs">Mrs.</option>
            <option value="mis">Mis.</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="firstName"> First Name :</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            // value={firstName}
            placeholder="Enter Your First Name"
            //   onChange={onInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="middleName"> Middle Name:</label>
          <input
            type="text"
            className="form-control"
            id="middleName"
            name="middleName"
            // value={middleName}
            placeholder="Enter Your Middle Name"
            //   onChange={onInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName"> Last Name :</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            // value={lastName}
            placeholder="Enter Your Last Name"
            //   onChange={onInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth"> Date of Birth:</label>
          <input
            type="date"
            className="form-control"
            id="dateOfBirth"
            name="dateOfBirth"
            // value={dateOfBirth}
            //   onChange={onInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            className="form-control"
            //   value={gender}
            //   onChange={onInputChange}
            required
          >
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="nationality"> Nationality:</label>
          <input
            type="text"
            className="form-control"
            id="nationality"
            name="nationality"
            // value={nationality}
            placeholder="Enter Your Nationality/citizinship"
            //   onChange={onInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="maried">Marital Status:</label>
          <select
            id="maried"
            name="maried"
            className="form-control"
            //   value={maried}
            //   onChange={onInputChange}
            required
          >
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
            // value={numOfChildren}
            placeholder="Number of children"
            //   onChange={onInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="photo"> Add your Photo::</label>
          <input
            type="file"
            className="form-control"
            id="photo"
            name="photo"
            // value={photo}
            accept="image/*"
            //   onChange={onInputChange}
            required
          />
        </div>
        <button>Prev</button>
        <button>Next</button>
      </div>
      <div className="address">
        <h4>Contact Address</h4>

        <div className="form-group">
          <label htmlFor="country"> Country:</label>
          <input
            type="text"
            className="form-control"
            id="country"
            name="country"
            // value={country}
            placeholder="Country"
            //   onChange={onInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city"> City:</label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            // value={city}
            placeholder="City"
            //   onChange={onInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email"> Email(Primary)</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            // value={email}
            placeholder="yourmail@example.com"
            //   onChange={onInputChange}
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
            // value={email2}
            placeholder="secondary@example.com"
            //   onChange={onInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone1"> Primary Phone Number:</label>
          <input
            type="tel"
            className="form-control"
            id="phone1"
            name="phone1"
            // value={phone1}
            placeholder="Enter Your primary phone number"
            //   onChange={onInputChange}
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
            // value={phone2}
            placeholder="Enter Your secondary phone number"
            //   onChange={onInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pobox"> P.o.Box(If any):</label>
          <input
            type="text"
            className="form-control"
            id="pobox"
            name="pobox"
            // value={pobox}
            placeholder="P.o.box Number"
            //   onChange={onInputChange}
          />
        </div>

        <button>Prev</button>
        <button>Next</button>
      </div>
      <div className="career">
        <h4>Career and Experiences</h4>
        <div className="form-group">
          <label htmlFor="employment">Employment</label>
          <select
            className="form-control"
            name="employment"
            id="employment"
            value={employment}
            onChange={onInputChange}
          >
            <option value="unemployed">Unemployed</option>
            <option value="employed">Employed</option>
          </select>
        </div>

        {employment === "employed" ? (
          <Employment />
        ) : (
          <div>No employment history</div>
        )}

        <button>Prev</button>
        <button>Next</button>
      </div>
      <div className="education">
        <h4>Education Background</h4>
        <div className="form-group">
          <label htmlFor="highestQualification">
            Highest Level of Academic Qualification Achieved
          </label>
          <select
            className="form-control"
            name="highestQualification"
            id="highestQualification"
            //   value={highestQualification}
            //   onChange={onInputChange}
          >
            <option value="dvm">DVM</option>
            <option value="msc_mvsc">MSc/MVSc</option>
            <option value="phd">PhD</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="school">
          <div className="form-group">
            <label htmlFor="firstDegree">
              From which institute have you acquired your first degree? :
            </label>
            <input
              type="text"
              className="form-control"
              id="firstDegree"
              name="firstDegree"
              // value={firstDegree}
              placeholder="Univercity or collage"
              //   onChange={onInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="study">Study :</label>
            <input
              type="text"
              className="form-control"
              id="study"
              name="study"
              // value={study}
              placeholder="Univercity or collage"
              //   onChange={onInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateCompleted">
              {" "}
              When have you completed your first degree?
            </label>
            <input
              type="date"
              className="form-control"
              id="dateCompleted"
              name="dateCompleted"
              // value={dateCompleted}
              //   onChange={onInputChange}
              required
            />
          </div>
          <button>Add Education</button>
        </div>
        <div className="school">
          <div className="form-group">
            <label htmlFor="mastersSchool">
              From which institute have you acquired your masters degree?(If
              any) :
            </label>
            <input
              type="text"
              className="form-control"
              id="mastersSchool"
              name="mastersSchool"
              // value={mastersSchool}
              placeholder="Univercity or collage"
              //   onChange={onInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="study">Study :</label>
            <input
              type="text"
              className="form-control"
              id="study"
              name="study"
              // value={study}
              placeholder="specialization"
              //   onChange={onInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateCompleted">
              When have you completed your masters degree?
            </label>
            <input
              type="date"
              className="form-control"
              id="dateCompleted"
              name="dateCompleted"
              // value={dateCompleted}
              //   onChange={onInputChange}
              required
            />
          </div>
          <button>Add Education</button>
        </div>
        <div className="school">
          <div className="form-group">
            <label htmlFor="mastersSchool">
              From which institute have you acquired your PhD?(If any) :
            </label>
            <input
              type="text"
              className="form-control"
              id="mastersSchool"
              name="mastersSchool"
              // value={mastersSchool}
              placeholder="Univercity or collage"
              //   onChange={onInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="study">Study :</label>
            <input
              type="text"
              className="form-control"
              id="study"
              name="study"
              // value={study}
              placeholder="specialization"
              //   onChange={onInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateCompleted">
              When have you completed your PhD?
            </label>
            <input
              type="date"
              className="form-control"
              id="dateCompleted"
              name="dateCompleted"
              // value={dateCompleted}
              //   onChange={onInputChange}
              required
            />
          </div>
          <button>Add Education</button>
        </div>

        <div className="form-group">
          <label htmlFor="otherQualification">
            If you have any other qualification, please list(separated by comma)
            :
          </label>
          <textarea
            name="otherQualification"
            id="otherQualification"
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="tempo">
            Please upload scanned copy of your temporary degree
          </label>
          <input
            type="file"
            className="form-control"
            id="tempo"
            name="tempo"
            // value={tempo}
            //   onChange={onInputChange}
            required
          />
        </div>

        <button>Prev</button>
        <Fee />
        <Agreement />
        <Confirmation />
      </div>
    </div>
  );
};

export default Regular;
