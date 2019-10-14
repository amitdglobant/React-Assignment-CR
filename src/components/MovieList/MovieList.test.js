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
    expect(output.find("h1").text()).toBe("No movies found to display");
    //expect(output.containsAnyMatchingElements(<h1>No movies found to display</h1>)).toBeTruthy();
    // TODO:: add assertion for this test case here

  });
  it("should render correctly when valid data received in props", () => {
    const output = shallow(<MovieList />);
    //expect(output.hasClass('movie')).toBe(true)
    expect(output.children.length>0).toBe(true)
    // TODO:: add assertion for this test case here

  });
});
