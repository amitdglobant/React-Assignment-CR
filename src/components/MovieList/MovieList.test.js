// vendors
import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// component
import MovieList from "./MovieList";
import Movie from '../Movie'

import data from './dummyData'

configure({ adapter: new Adapter() });



describe("MovieList component", () => {
  it("should render correctly when no data received in props", () => {
    const output = shallow(<MovieList />);
    // TODO:: add assertion for this test case here

    expect(output.find(Movie).length).toBe(0)
    expect(output.find('.empty-message').length).toBe(1)

  });
  it("should render correctly when valid data received in props", () => {
    const output = shallow(<MovieList />);
    // TODO:: add assertion for this test case here

    output.setProps({
      movieList: data.movieList
    })

    expect(output.find(Movie).length).toBe(data.movieList.length)
    expect(output.find('.empty-message').length).toBe(0)
  });
});
