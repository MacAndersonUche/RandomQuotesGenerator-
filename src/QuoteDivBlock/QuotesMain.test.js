import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Quotes from './Quotes';



describe('Quotes component', () => {
    test('renders quotes if request succeeds', async () => {

        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ id: 'p1', content: 'First post' }],
        });


        //Arrange
        render(<Quotes />)

        //Act (Nothing)

        //Assert
        const listItemElements = await screen.findByRole('paragraph');
        expect(listItemElements).not.toHaveLength(0);



    })
})