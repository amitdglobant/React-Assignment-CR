// vendors
import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// component
import AddMovieForm from "./AddMovieForm";
import FormHeader from "../FormHeader/FormHeader";

configure({ adapter: new Adapter() });

describe("AddMovieForm component", () => {
  it("should render FormHeader with correct formTitle", () => {
    // test cases here
    const output = shallow(<AddMovieForm />);
    expect(output.find(FormHeader));
  });
  it("should call change handler on change event of Movie Name input control", () => {
    // test cases here
  });
  it("should call change handler on change event of Website input control", () => {
    // test cases here
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
      .find("#Submit")
      .simulate('click');
    // test cases here
  });
});
