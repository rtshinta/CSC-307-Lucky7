import Searchbar from './SearchBar'
import App from './App'
import SearchBar from './SearchBar';
import { screen,render, fireEvent } from '@testing-library/react';




test('tests to see if search textbox renders correctly', () => 
{
    const searchFunction = jest.fn();
    const searchbar = render(<SearchBar searchFunction={searchFunction} />);
    const textInput = searchbar.getByRole('textbox');
    expect(textInput.placeholder).toBe("Search");

});

test('tests to see if search button renders and clicks correctly', () => 
{
    const searchFunction = jest.fn();
    const searchbar = render(<SearchBar searchFunction={searchFunction} />);
    const textInput = searchbar.getByRole('textbox');
    const srchBtn = searchbar.getByRole('button', {name: /srchBtn/i})
    
    fireEvent.click(srchBtn);
    expect(searchFunction).toHaveBeenCalledTimes(1)

});

test('tests to see if search text box updates as text is typed in', () => 
{
    const searchFunction = jest.fn();

    const searchbar = render(<SearchBar searchFunction={searchFunction} />);
    const textInput = searchbar.getByRole('textbox');
    
    fireEvent.change(textInput, {target: {value: /Jaime/i}})

    expect(textInput.value).toMatch(/Jaime/i)

});