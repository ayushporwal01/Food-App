import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../components/RestaurantMenu";
import { act } from "react";
import fetchMock from "../mocks/fetchMock";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";

beforeEach(() => fetchMock(MOCK_DATA));

it("Should render Restaurant Menu Component", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>,
    ),
  );

  const categories = screen.getAllByTestId("category");
  expect(categories).toHaveLength(11);

  const accordionHeader = screen.getByText("Recommended (17)");

  fireEvent.click(accordionHeader);

  const items = screen.getAllByTestId("menu-item");

  expect(items).toHaveLength(17);

  const addBtn = screen.getAllByRole("button", { name: "Add" });

  fireEvent.click(addBtn[0]);

  const cart = 
  expect()
});
