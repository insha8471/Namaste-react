import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

describe("contact us page Test case", ()=> {
    test("should load contact us component", () => {
        render(<Contact/>);

        const heading = screen.getByRole("heading");

        // Assertion
        expect(heading).toBeInTheDocument();
    })

    test("should load button inside  contact us component", () => {
        render(<Contact/>);

        const button = screen.getByRole("button");

        // Assertion
        expect(button).toBeInTheDocument();
    })

    test("should load input inside  contact us component", () => {
        render(<Contact/>);

        //Querying
        const inputBoxes = screen.getAllByRole("textbox");

        // Assertion
        expect(inputBoxes.length).toBe(2)
    })

})
