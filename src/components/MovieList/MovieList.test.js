// vendors
import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// component
import MovieList from "./MovieList";

configure({ adapter: new Adapter() });

describe("MovieList component", () => {
  it("should render correctly when no data received in props", () => {
    const output = shallow(<MovieList />);

    // TODO:: add assertion for this test case here
  });
  it("should render correctly when valid data received in props", () => {
    const output = shallow(<MovieList />);
    // TODO:: add assertion for this test case here
  });
});
