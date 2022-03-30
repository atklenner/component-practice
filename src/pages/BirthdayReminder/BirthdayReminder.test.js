import { render, screen, fireEvent } from "@testing-library/react";
import BirthdayReminder from "./BirthdayReminder";

describe("BirthdayReminder", () => {
  test("clear all button", async () => {
    render(<BirthdayReminder />);
    const clearButton = screen.getByText(/clear all/i);
    fireEvent.click(clearButton);
    expect(screen.queryByText(/First Last/i)).not.toBeTruthy();
    expect(
      screen.getByRole("heading", { text: /0 birthdays today/i })
    ).toBeTruthy();
  });
});
