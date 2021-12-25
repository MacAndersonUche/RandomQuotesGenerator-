import '@testing-library/jest-dom';



import { render, screen, fireEvent } from '@testing-library/react'
import ButtonNext from './ButtonNext';



test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn()
    render(<ButtonNext onClick={handleClick} />)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
})