import React from "react";
import { render, screen } from "@testing-library/react";

import { App } from "../App";
import Burger from "../icons/Burger";

class ResizeObserver {
  observe() {
  }
  unobserve() {
  }
  disconnect() {
  }
}
window.ResizeObserver = ResizeObserver;

describe('App component', () => {
  test("Renders React App", () => {
    render(<App />);
  });
  test("renders Burger component without errors", () => {
    render(<Burger/>);
  });
});


