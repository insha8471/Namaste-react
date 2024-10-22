import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import Body from "../Body.js";
import MOCK_DATA from "../mock/ResData.json";


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("should render the Body component with search", async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>)
        
    })

    const cardBeforeSearch = screen.getAllByTestId("resCardId")
    expect(cardBeforeSearch.length).toBe(20)

    const searchButton = screen.getByRole("button", { name: "Search"})

    const searchInput = screen.getByTestId("searchInput")

    // fireEvent.change(searchInput, {target: {value:"pizza"}})

    // fireEvent.click(searchButton);

    // const cards = screen.getAllByTestId("resCardId");

    // expect(cards.length).toBe(1)
})

it("should filter top rated restaurant",async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )
    })

    const topRatedBtn = screen.getByRole("button", {name:"Top Rated Restaurant"})

    fireEvent.click(topRatedBtn);

    const cardAfterFilter = screen.getAllByTestId("resCardId");
    expect(cardAfterFilter.length).toBe(7)

})