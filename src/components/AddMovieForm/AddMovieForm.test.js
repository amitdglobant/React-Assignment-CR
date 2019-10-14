// vendors
import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// component
import AddMovieForm from "./AddMovieForm";


configure({ adapter: new Adapter() });

describe("AddMovieForm component", () => {
  it("should render FormHeader with correct formTitle", () => {
    const output = shallow(<AddMovieForm />);
    expect(output.find("h2").text()).toBe("Add your favorite movie");

    // test cases here
  });
  it("should call change handler on change event of Movie Name input control", () => {
    // test cases here
  });
  it("should call change handler on change event of Website input control", () => {
    // test cases here
  });
  it("should select correct value on Genre dropdown control option selection", () => {
    // test cases here
    const output = shallow(<AddMovieForm />);
    var data = output.find("#Genre").childAt(0).childAt(0).simulate("click");
    expect(data).toBe("Science Fiction")
  });
  it("should select correct value on Rating radio button control selection", () => {
    // test cases here
    const output = shallow(<AddMovieForm />);
    var data = output.find(".form-check-input").childAt(0).simulate("change",{target:{value :1}})
    expect(data).toBe(1);
  });
  it("should call onSubmit handler on click of Submit button", () => {
    const output = shallow(<AddMovieForm />);
    output
      .find(".submit-btn")
      //.find("input")
      .simulate("click", {});
    // test cases here

  });
});
