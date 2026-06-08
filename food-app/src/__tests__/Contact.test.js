import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";

test(render(<Contact />, () => {
    //Querying
    const heading = screen.getByRole(heading)

    //Assertion
    expect(heading)
}));
