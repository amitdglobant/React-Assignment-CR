// vendors
import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
// component
import AddMovieForm from "./AddMovieForm";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

configure({ adapter: new Adapter() });

describe("AddMovieForm component", () => {
  it("should render FormHeader with correct formTitle", () => {
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
  });
  it("should select correct value on Rating radio button control selection", () => {
    // test cases here
  });
  it("should call onSubmit handler on click of Submit button", () => {
    const onClickSubmit = jest.fn();
    const output = shallow(
      <Provider store={store}>
        <AddMovieForm />
      </Provider>
    );

    console.log(output.find("Connect").debug());
    output
      .find("Connect")
      .find(".submit-btn")
      .find("input")
      .simulate("click", {});

    expect(onClickSubmit).toBeCalledWith({});
  });
});
