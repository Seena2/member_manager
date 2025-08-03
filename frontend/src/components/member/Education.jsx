import { useState } from "react";

function Education() {
  //temporary state to collect each education and push to 'fromData.education[]' in 'MemberForm'
  const [allEducation, setAllEducation] = useState([]);
  const [formData, setFormData] = useState({
    degree: "",
    university: "",
    study: "",
    dateCompleted: "",
  });
  //destructure the form fields data
  const { degree, university, study, dateCompleted } = formData;

  //generic onchange mehtod that can be use for each input, using the 'name' attiribute
  const onInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const addEducation = () => {
    setAllEducation((allEducation) => [...allEducation, formData]);
    //clear form fields
    setFormData({
      degree: "",
      university: "",
      study: "",
      dateCompleted: "",
    });
  };
  // console.log(formData);
  // console.log(allEducation);
  return (
    <>
      <div className="school">
        <div className="form-group">
          <label htmlFor="degree">
            Degree <span className="required">*</span>
          </label>
          <select
            className="form-control"
            name="degree"
            id="degree"
            value={degree}
            onChange={onInputChange}
            required
          >
            <option value="">Select degree</option>
            <option value="first">First degree</option>
            <option value="masters">Masters</option>
            <option value="phd">PhD</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="university">
            University/Collage/ Institute Name?
            <span className="required">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="university"
            name="university"
            value={university}
            placeholder="Univercity or collage Name"
            onChange={onInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="study">
            Study <span className="required">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="study"
            name="study"
            value={study}
            placeholder="Univercity or collage"
            onChange={onInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateCompleted">
            Date completed<span className="required">*</span>
          </label>
          <input
            type="date"
            className="form-control"
            id="dateCompleted"
            name="dateCompleted"
            value={dateCompleted}
            onChange={onInputChange}
            required
          />
        </div>
        <button onClick={addEducation}>Add Education</button>
      </div>
    </>
  );
}

export default Education;
