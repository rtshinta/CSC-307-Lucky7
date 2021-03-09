import App from './App';
import { render, fireEvent } from '@testing-library/react';


test('2 + 2 should return 4', () => 
{
  expect(2 + 2).toBe(4);
});

test('render App', () => {
    const app = render(<App />);
    const togglebutton = app.queryAllByText('Clothing/Apparel');
    fireEvent.click(togglebutton[0]);
    fireEvent.click(togglebutton[0], {target: {checked: true}});
    expect(togglebutton[0].checked).toBe(true);
});