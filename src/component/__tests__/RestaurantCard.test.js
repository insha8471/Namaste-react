const { render, screen } = require("@testing-library/react")
import "@testing-library/jest-dom"
import RestaurantCard from "../RestaurantCard"
import mockData from "../mock/rescard.json"

it("should render the restaurant Component with the props",() => {
    render(<RestaurantCard resData={mockData}/>)

    //Querying
    const name = screen.getByText("Home Plate by EatFit");

    //Assertion 
    expect(name).toBeInTheDocument();


})