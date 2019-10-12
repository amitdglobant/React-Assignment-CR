// vendors
import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// component
import MovieList from "./MovieList";
import FormHeader from "../FormHeader/FormHeader";

configure({ adapter: new Adapter() });

describe("MovieList component", () => {
  it("should render correctly when no data received in props", () => {
    const output = shallow(<MovieList />);
    // TODO:: add assertion for this test case here
    expect(output.find("h2").text()).toBe("No movies found to display")
  });
  it("should render correctly when valid data received in props", () => {
    const output = shallow(<MovieList />);
    // TODO:: add assertion for this test case here
    expect(output.find(FormHeader))
    expect(output.find("i"))
  });
});
