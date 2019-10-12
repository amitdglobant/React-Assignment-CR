// vendor
import React from "react";

import "./FormHeader.css";

const FormHeader = ({ formTitle }) =>  (
      <div className="col-12 form-title">
        <header>
          <h2>{formTitle}</h2>
        </header>
      </div>
    );


export default FormHeader;
