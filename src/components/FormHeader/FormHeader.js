// vendor
import React from "react";

import "./FormHeader.css";

function FormHeader(props) {
  return(
    <div className="col-12 form-title">
        <header className="text-center">
          <h2>{props.formTitle}</h2>
        </header>
      </div>
  )
};

export default FormHeader;
