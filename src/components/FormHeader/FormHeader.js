// vendor
import React from "react";

import "./FormHeader.css";

const FormHeader = props => {
  return (
    <div className="col-12 form-title">
      <header>
        <h2>{props.formTitle}</h2>
      </header>
    </div>
  );
};

export default FormHeader;
