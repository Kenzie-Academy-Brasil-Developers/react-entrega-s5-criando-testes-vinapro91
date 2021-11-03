import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import Search from "../../components/Search/index";
import MockAdapter from "axios-mock-adapter";
import api from "../../services";
import Providers from "../../providers";

const apiMock = new MockAdapter(api);

describe("search components:", () => {
  test("should be able to render an input", () => {
    render(<Search />);
    expect(screen.getByPlaceholderText("Insira o CEP")).toBeTruthy();
  });
});
