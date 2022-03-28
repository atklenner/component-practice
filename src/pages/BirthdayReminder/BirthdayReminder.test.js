import { render, screen } from "@testing-library/react";
import BirthdayReminder from "./BirthdayReminder";

it("runs a test successfully", async () => {
  render(<BirthdayReminder />);
  const clearButton = screen.getByText(/clear all/i);
  expect(clearButton).toBeInTheDocument();
});
