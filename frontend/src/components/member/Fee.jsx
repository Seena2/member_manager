import React from "react";

function Fee() {
  return (
    <div>
      <h3>Membership Fee</h3>
      <div className="form-group justfyParagraphs">
        <p>
          Dear applicant, the registration fee for regular members is 350
          Ethiopian Birr. Kindly transfer the payment to the Ethiopian
          Veterinary Association bank account indicated below:
        </p>
        <p>
          <strong>Bank Name</strong> : Commercial Bank of Ethiopia
        </p>
        <p>
          <strong>Bank Branch Address</strong> : Addis Ababa, Cape Verde Streer
        </p>
        <p>
          <strong>Swift Code</strong> :CBETATAA
        </p>
        <p>
          <strong>Account Number</strong> :1000050555333
        </p>
        <p>
          <strong>Account Holder's Name</strong> :Ethiopian Veterinary
          Association
        </p>
        <p>
          Once you have made the payment, Please send us the scanned copy of
          your bank reciept or screenshot of mobile banking payment
          transaction(if you have payed via mobile banking).
        </p>
        <p>
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
          // value={reciept}
          //   onChange={onInputChange}
          required
        />
      </div>
    </div>
  );
}

export default Fee;
