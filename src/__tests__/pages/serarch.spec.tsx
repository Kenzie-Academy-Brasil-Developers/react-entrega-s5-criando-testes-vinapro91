import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import Search from "../../components/Search/index";
import Providers from "../../providers";

describe("Search Page", () => {
  test("Should search by CEP", async () => {
    render(
      <Providers>
        <Search />
      </Providers>
    );
    const cepField = screen.getByPlaceholderText("Insira o CEP");
    const button = screen.getByText("Buscar pelo CEP");

    fireEvent.change(cepField, { target: { value: 81630180 } });
    fireEvent.click(button);
    await waitFor(() => {
      expect(cepField).toHaveValue(81630180);
    });
  });
});
