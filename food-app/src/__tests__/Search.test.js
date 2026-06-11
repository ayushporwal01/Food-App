import Home from "../components/Home";
import fetchMock from "../mocks/fetchMock";
import MOCK_DATA from "../mocks/mockResListData.json";

fetchMock(MOCK_DATA)

it("Should render Home Component with Search", () => {
  render(<Home />);
});
