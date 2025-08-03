import { useState } from "react";

function Employment() {
  //temporary state to collect each experaince and push to 'fromData.experaince[]' in 'MemberForm'
  const [allExperaiance, setAllExperaince] = useState([]);
  const [formData, setFormData] = useState({
    orgName: "",
    organizationType: "",
    role: "",
    from: "",
    to: "",
    //work address
    city: "",
    region: "",
    country: "",
  });
  //destructure the form fields data
  const { orgName, organizationType, role, from, to, city, region, country } =
    formData;

  //generic onchange mehtod that can be use for each input, using the 'name' attiribute
  const onInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const addExperiance = () => {
    setAllExperaince((allExperaiance) => [...allExperaiance, formData]);
    //clear form fields
    setFormData({
      orgName: "",
      organizationType: "",
      role: "",
      from: "",
      to: "",
      //work address
      city: "",
      region: "",
      country: "",
    });
  };

  return (
    <>
      <div className="form-group">
        <label htmlFor="orgName">
          Name of the Organization/Institute<span className="required">*</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="orgName"
          name="orgName"
          value={orgName}
          placeholder="Where you work/ed"
          onChange={onInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="organizationType">
          Type of Organization<span className="required">*</span>
        </label>
        <select
          id="organizationType"
          name="organizationType"
          className="form-control"
          value={organizationType}
          onChange={onInputChange}
          required
        >
          <option value="">Select organization type</option>
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
        <label htmlFor="role">
          Your role in the organization<span className="required">*</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="role"
          name="role"
          value={role}
          placeholder="Your role in the org"
          onChange={onInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="from">
          From<span className="required">*</span>
        </label>
        <input
          type="date"
          className="form-control"
          id="from"
          name="from"
          value={from}
          onChange={onInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="to">
          To <span className="required">*</span>
        </label>
        <input
          type="date"
          className="form-control"
          id="to"
          name="to"
          value={to}
          onChange={onInputChange}
          required
        />
      </div>
      <p>Work address</p>

      <div className="form-group">
        <label htmlFor="country:">
          City<span className="required">*</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="city"
          name="city"
          value={city}
          placeholder="city"
          onChange={onInputChange}
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
          value={region}
          placeholder="Region"
          onChange={onInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="country:">
          Country<span className="required">*</span>
        </label>
        <input
          type="text"
          className="form-control"
          id="country"
          name="country"
          value={country}
          placeholder="country"
          onChange={onInputChange}
          required
        />
      </div>

      <button onClick={addExperiance}>Add Experaince</button>
    </>
  );
}

export default Employment;
