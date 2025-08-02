import React from "react";

function Employment() {
  return (
    <>
      <div className="form-group">
        <label htmlFor="org"> Name of your Institute/Organization:</label>
        <input
          type="text"
          className="form-control"
          id="org"
          name="org"
          // value={firstName}
          placeholder="Enter Your Name of the organization/inititute"
          //   onChange={onInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="organizationType">Type of Organization:</label>
        <select
          id="organizationType"
          name="organizationType"
          className="form-control"
          //   value={organizationType}
          //   onChange={onInputChange}
          required
        >
          <option value="governmental">Governmental</option>
          <optgroup label="Non-Governmental">
            <option value="internationalOrganization">
              International Organization
            </option>
            <option value="associations">Associations</option>
            <option value="otherNgoTypes">Other NGO types</option>
          </optgroup>
          <option value="private">Private</option>
          <option value="runOwnBusiness">Run my own business</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="role"> Your role in the organization:</label>
        <input
          type="text"
          className="form-control"
          id="role"
          name="role"
          // value={role}
          placeholder="Your Role in the org"
          //   onChange={onInputChange}
          required
        />
      </div>
      <p>Work address</p>

      <div className="form-group">
        <label htmlFor="country:"> Country:</label>
        <input
          type="text"
          className="form-control"
          id="country"
          name="country"
          // value={country}
          placeholder="country"
          //   onChange={onInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="region:"> Region:</label>
        <input
          type="text"
          className="form-control"
          id="region"
          name="region"
          // value={region}
          placeholder="Region"
          //   onChange={onInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="district:"> District:</label>
        <input
          type="text"
          className="form-control"
          id="district"
          name="district"
          // value={district}
          placeholder="District"
          //   onChange={onInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="kebele:"> Kebele:</label>
        <input
          type="text"
          className="form-control"
          id="kebele"
          name="kebele"
          // value={kebele}
          placeholder="Kebele"
          //   onChange={onInputChange}
          required
        />
      </div>
      <button>
        Add any other organization(s) you have worked for previosuly
      </button>
      <div className="form-group">
        <label htmlFor="kebele:"> Total years of experaince(In years):</label>
        <input
          type="Number"
          className="form-control"
          id="experince"
          name="experince"
          // value={experince}
          placeholder="experince in years"
          //   onChange={onInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="careerInterest">What is your career interest?</label>
        <select
          id="careerInterest"
          name="careerInterest"
          className="form-control"
          //   value={careerInterest}
          //   onChange={onInputChange}
          required
        >
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
    </>
  );
}

export default Employment;
