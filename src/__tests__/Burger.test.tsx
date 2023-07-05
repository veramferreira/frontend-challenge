import GridArea from "../components/GridArea";
import Sidebar from "../components/Sidebar";
import Burger from "../icons/Burger";
import { getByLabelText, render, screen } from "@testing-library/react";

class ResizeObserver {
    observe() {
    }
    unobserve() {
    }
    disconnect() {
    }
  }
  window.ResizeObserver = ResizeObserver;


describe('Burger component', () => {
    test("renders Burger component without errors", () => {
        render(<Burger />);
      });
      test('renders Sidebar component without errors', () => {
        render(<Sidebar/>)
      });
      test('renders GridArea component without errors', () => {
        render(<GridArea/>)
      });
});