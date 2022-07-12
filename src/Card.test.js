import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

test('it renders', () => {
    render(<Card/>)
})

test('snapshot matches', () => {
    const {asFragment} = render(<Card caption='test' src='image1' currNum={1} total={3} />)
    expect(asFragment()).toMatchSnapshot()
})