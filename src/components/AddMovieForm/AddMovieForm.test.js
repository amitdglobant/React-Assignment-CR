// vendors
import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// component
import AddMovieForm from "./AddMovieForm";

configure({ adapter: new Adapter() });

describe("AddMovieForm component", () => {
  it("should render FormHeader with correct formTitle", () => {
    // test cases here
  });
  it("should call change handler on change event of Movie Name input control", () => {
    
      expect('Christoph').toMatch('/^[A-Z]+$/i');
    
   
  });
  it("should call change handler on change event of Website input control", () => {
    
  });
  it("should select correct value on Genre dropdown control option selection", () => {
    // test cases here
  });
  it("should select correct value on Rating radio button control selection", () => {
    // test cases here
  });
  it("should call onSubmit handler on click of Submit button", () => {
    const output = shallow(<AddMovieForm />);
    output
      .find(".submit-btn")
      .find("input")
      .simulate("click", {});
    // test cases here
  });
});
