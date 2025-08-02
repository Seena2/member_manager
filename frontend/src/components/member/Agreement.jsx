import React from "react";

function Agreement() {
  return (
    <div>
      <h4>Agreement</h4>
      <div className="form-group justfyParagraphs">
        <p>
          I have carefully read the Ethiopian Veterinary Association
          constitution as amended at the meeting held from 19-20 June 1992, in
          Addis Ababa and I fully agree to be bound to the rules and regulations
          of the Association. With this in mind, I apply:
        </p>
        <div className="radio">
          <input
            type="radio"
            id="newMember"
            name="agreementToMembership"
            value="new member"
          />
          <label for="newMember" class="radio-label">
            to be registered as a new member
          </label>
        </div>
        <div className="radio">
          <input
            type="radio"
            id="renewalOfMembership"
            name="agreementToMembership"
            value="renewal"
          />
          <label for="renewalOfMembership" class="radio-label">
            to renew my membership
          </label>
        </div>
      </div>
    </div>
  );
}

export default Agreement;
