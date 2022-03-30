import { screen, render, fireEvent } from "@testing-library/react";
import Accordion from "./Accordion";

describe("Accordion", () => {
  test("accordion expands when clicked", () => {
    render(<Accordion />);
    const button = screen.getAllByRole("button", { text: "+" });
    fireEvent.click(button[0]);
    expect(screen.getByText(/Unicorn vinyl/i)).toBeTruthy();
    fireEvent.click(button[0]);
    expect(screen.queryByText(/Unicorn vinyl/i)).not.toBeTruthy();
  });
});
