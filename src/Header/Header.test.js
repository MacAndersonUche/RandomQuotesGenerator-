import '@testing-library/jest-dom';


import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe('returns header component', () => {
    test('renders Macs Quote Generator as a text', () => {

        //Arrange
        render(<Header />)

        //Act (Nothing)

        //Assert 
        const mac = screen.getByText('Mac', { exact: false });
        expect(mac).toBeInTheDocument();

    })
})