import { useState } from "react";

function Agreement() {
  //temporary state to collect each education and push to 'fromData.education[]' in 'MemberForm'
  const [registermember, setRegisterMember] = useState([]);
  const [formData, setFormData] = useState({
    reciept: "",
    agreement: "",
  });
  //destructure the form fields data
  const { reciept, agreement } = formData;

  //generic onchange mehtod that can be use for each input, using the 'name' attiribute
  const onInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const finish = () => {
    setRegisterMember((registermember) => [...registermember, formData]);
    //clear form fields
    setFormData({
      degree: "",
      agree: "",
    });
  };
  console.log(formData);
  return (
    <>
      <div className="fee">
        <h3 className="formSectionHeader">Membership Fee</h3>
        <div className="form-group justfyParagraphs">
          <p>
            Dear applicant, the registration fee for regular members is 350
            Ethiopian Birr. Kindly transfer the payment to the Ethiopian
            Veterinary Association bank account indicated below:
          </p>

          <ul>
            <li>
              <strong className="lightLabel">Bank Name: </strong> Commercial
              Bank of Ethiopia
            </li>
            <li>
              <strong className="lightLabel">Bank Branch Address: </strong>
              Finfine, Cape Verde Street
            </li>
            <li>
              <strong className="lightLabel">Swift Code: </strong> CBETATAA
            </li>
            <li>
              <strong className="lightLabel">Account Number:</strong>{" "}
              10000xxxxxxx
            </li>
            <li>
              <strong className="lightLabel">Account Holder's Name:</strong> EVA
            </li>
          </ul>

          <p>
            Once you have made the payment, Please send us the scanned copy of
            your bank reciept or screenshot of mobile banking payment
            transaction(if you have payed via mobile banking).
          </p>
          <p className="notice">
            <strong>Please Note that, </strong>your registration will only be
            completed after reciept is recieved by the association.
          </p>
        </div>
        <div className="form-group">
          <label htmlFor="reciept">Upload your Reciept</label>
          <input
            type="file"
            className="form-control"
            id="reciept"
            name="reciept"
            value={reciept}
            onChange={onInputChange}
            required
          />
        </div>
      </div>
      <div className="agree">
        <h4 className="formSectionHeader">Agreement</h4>
        <div className="form-group justfyParagraphs">
          <p>
            I have carefully read the Ethiopian Veterinary Association
            constitution as amended at the meeting held from 19-20 June 1992, in
            Addis Ababa and I fully agree to be bound to the rules and
            regulations of the Association. With this in mind, I apply:
          </p>
          <div className="radio">
            <input
              type="radio"
              id="new"
              name="agreement"
              value="new"
              onChange={onInputChange}
              checked={agreement === "new"}
            />
            <label htmlFor="new" className="radio-label">
              to be registered as a new member
            </label>
          </div>
          <div className="radio">
            <input
              type="radio"
              id="renewal"
              name="agreement"
              value="renewal"
              onChange={onInputChange}
              checked={agreement === "renewal"}
            />
            <label htmlFor="renewal" className="radio-label">
              to renew my membership
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Agreement;
