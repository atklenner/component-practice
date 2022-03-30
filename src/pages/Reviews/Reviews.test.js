import { screen, fireEvent, render } from "@testing-library/react";
import Reviews from "./Reviews";

describe("Reviews", () => {
  test("surprise me button", () => {
    render(<Reviews />);
    const button = screen.getByRole("button", { name: /surprise me/i });
    fireEvent.click(button);
    expect(screen.queryByText(/susan smith/i)).not.toBeTruthy();
  });

  test("next review button", () => {
    render(<Reviews />);
    const button = screen.getByRole("button", { name: />/i });
    fireEvent.click(button);
    expect(screen.queryByText(/susan smith/i)).not.toBeTruthy();
  });
});
