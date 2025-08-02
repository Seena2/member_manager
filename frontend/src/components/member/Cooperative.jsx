import React from "react";

const Cooperative = () => {
  return (
    <div>
      <h3>You are registering as Cooperative member</h3>
      <p>For Corporate Members Only</p>

      <div className="form-group">
        <label>Name of your organization or institute</label>
        <input
          type="text"
          className="form-control"
          id="organizationName"
          name="organizationName"
          //   value={organizationName}
          placeholder="Enter Your organization name"
          //   onChange={onInputChange}
        />
      </div>
    </div>
  );
};

export default Cooperative;
