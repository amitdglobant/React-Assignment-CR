// vendors
import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./App";

configure({ adapter: new Adapter() });

describe("App component", () => {
  it("should render correctly", () => {
    const output = shallow(<App />);
    expect(output.find(".App").exists()).toBeFalsy();
  });
});
