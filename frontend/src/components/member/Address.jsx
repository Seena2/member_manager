import { useState } from "react";

const Address = () => {
  //temporary state to collect each education and push to 'fromData.address[]' in 'MemberForm'
  const [address, setAddress] = useState([]);
  const [formData, setFormData] = useState({
    city: "",
    country: "",
    email: "",
    email2: "",
    phone1: "",
    phone2: "",
    pobox: "",
  });
  //destructure the form fields
  const { city, country, email, email2, phone1, phone2, pobox } = formData;
  //generic onchange mehtod that can be use for each input, using the 'name' attiribute
  const onInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const addAddress = () => {
    setAddress((address) => [...address, formData]);
    //clear form fields
    setFormData({
      degree: "",
      agree: "",
    });
  };
  console.log(formData);
  return (
    <div>
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
      </div>
    </div>
  );
};

export default Address;
