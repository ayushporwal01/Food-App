import { render } from "@testing-library/react";
import RestaurantMenu from "../components/RestaurantMenu";
import { act } from "react";
import fetchMock from "../mocks/fetchMock";

beforeEach(() => fetchMock())

it("Should render Restaurant Menu Component", async () => {
  await act(() => render(<RestaurantMenu />));
});
