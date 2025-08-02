import React from "react";

function Confirmation() {
  return (
    <div>
      <h4>Confirmation</h4>

      {/* <!--Form End -->
      <!--will be displayed after the record is successfully stored on the DB--> */}
      <p>
        Dear Sir/Madam, Thank you very much for choosing to be member of EVA.
        your application has been recorded successfully and we will process it
        and send your ID Card and reciept in a few days.
      </p>
      <p>
        In case you have any enquiries, Kindly reach us through:
        <i>
          <a href="http://">ethiopianveterinaryassociation@gmail.com</a>{" "}
        </i>
      </p>

      <h4>Thank you! Stay Safe!</h4>
    </div>
  );
}

export default Confirmation;
