import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import appStore from "../../utils/appStore"
import Cart from "../Cart"
import Header from "../Header"
import data from "../mock/listItemMockData.json"
import RestaurantMenu from "../RestaurantMenu"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json : () => {
            return Promise.resolve(data);
        }
    })
})


it("should load reataurant menu Component", async () => {
    await act(async () => {
        render(
            <Provider store={appStore}>
                <BrowserRouter>
                    <Header/>
                    <RestaurantMenu/>
                    <Cart/>
                </BrowserRouter>
            </Provider>
        )
    })

    const accordianHeader = screen.getByText("Cakes(3)");

    fireEvent.click(accordianHeader);

    const foodItem = screen.getAllByTestId("foodItems");

    expect(foodItem.length).toBe(4);

    const addBtn = screen.getAllByRole("button", {name : "Add +"})
    fireEvent.click(addBtn[0])

    const noItem = screen.getByText("cart(1)");
    expect(noItem).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(5);

    fireEvent.click(screen.getByRole("button",{name: "clearcart"}));
    expect(screen.getAllByTestId("foodItems").length).toBe(4)


})