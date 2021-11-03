import React from "react";
import { render, screen } from "@testing-library/react";

import Search from "../../components/Search/index";

describe("button component:", () => {
  test("should be able to render an button", async () => {
    render(<Search />);
    const buttonElement = screen.getByText("Buscar pelo CEP");
    expect(buttonElement).toBeTruthy();
  });

  test("the button component must start disabled", async () => {
    render(<Search />);
    const buttonElement = screen.getByText("Buscar pelo CEP");
    expect(buttonElement).toBeDisabled();
  });
});
