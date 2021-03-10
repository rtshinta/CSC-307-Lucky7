import App from './App';
import { render, fireEvent } from '@testing-library/react';



test('render App Clothing', () => {
    const app = render(<App />);
    const togglebutton = app.queryAllByText('Clothing/Apparel');
    fireEvent.click(togglebutton[0]);
    fireEvent.click(togglebutton[0], {target: {checked: true}});
    expect(togglebutton[0].checked).toBe(true);
});

test('render App Sort by Date button', () => {
    const app = render(<App />);
    const sortdate = app.getByRole('button', {
        name: /sort by date/i
    });
    expect(sortdate.innerHTML).toBe("Sort by Date");
});


test('render App Sort by Date button click', () => {
    const app = render(<App />);
    const sortdate = app.getByRole('button', {
        name: /sort by date/i
    });
    fireEvent.click(sortdate);
    expect(sortdate.innerHTML).toBe("Sort by Date");
});