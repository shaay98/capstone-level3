import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, vi, expect, beforeEach } from "vitest";
import MenuComponent from "../Menu";

vi.mock("../menuService", () => ({
  getMenuItems: vi.fn(() => Promise.resolve([])),
  createMenuItem: vi.fn(() => Promise.resolve()),
  deleteMenuItem: vi.fn(() => Promise.resolve()),
}));

import { getMenuItems, createMenuItem, deleteMenuItem } from "../menuService";

describe("MenuComponent", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the menu heading", async () => {
    render(<MenuComponent />);
    expect(screen.getByText("Menu")).toBeInTheDocument();
  });

  it("displays 'No menu items found.' when empty", async () => {
    render(<MenuComponent />);
    expect(await screen.findByText("No menu items found.")).toBeInTheDocument();
  });

  it("adds Margherita Pizza when the button is clicked", async () => {
    render(<MenuComponent />);

    const addButton = screen.getByText("Add Margherita Pizza");
    fireEvent.click(addButton);

    await waitFor(() => {
      expect(screen.getByText("Margherita Pizza")).toBeInTheDocument();
      expect(
        screen.getByText("Classic pizza with fresh mozzarella and basil.")
      ).toBeInTheDocument();
    });

    expect(createMenuItem).toHaveBeenCalledOnce();
  });

  it("calls deleteMenuItem when delete is clicked", async () => {
    getMenuItems.mockResolvedValueOnce([
      {
        id: "1",
        name: "Taco",
        description: "Beef taco with lettuce, cheese, and salsa.",
        price: 4.99,
      },
    ]);

    render(<MenuComponent />);

    expect(await screen.findByText("Taco")).toBeInTheDocument();

    const deleteButton = screen.getByTitle("Delete");
    fireEvent.click(deleteButton);

    await waitFor(() => {
      expect(deleteMenuItem).toHaveBeenCalledWith("1");
    });
  });
});
