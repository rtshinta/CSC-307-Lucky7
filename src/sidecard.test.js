import Sidecard from './Sidecard';
import { screen,render, fireEvent } from '@testing-library/react';

test('test Newest to Oldest dropdown option', () => {
    const sortAscending = jest.fn();
    const sortDescending = jest.fn();
    const sortRatingAsc = jest.fn();
    const sortRatingDesc = jest.fn();
    const sortCategories = jest.fn();
    const sidecard = render(<Sidecard />);
    const dropdown = sidecard.getByText("Newest to Oldest ▽");
    expect(dropdown.innerHTML).toBe("Newest to Oldest ▽");
});

test('test Highest to Lowest dropdown option', () => {
    const sortAscending = jest.fn();
    const sortDescending = jest.fn();
    const sortRatingAsc = jest.fn();
    const sortRatingDesc = jest.fn();
    const sortCategories = jest.fn();
    const sidecard = render(<Sidecard />);
    const dropdown = sidecard.getByText("Highest to Lowest Rating ▽");
    expect(dropdown.innerHTML).toBe("Highest to Lowest Rating ▽");
});

test('test Sidecard sorting 0 times', () => {
    const sortAscending = jest.fn();
    const sortDescending = jest.fn();
    const sortRatingAsc = jest.fn();
    const sortRatingDesc = jest.fn();
    const sortCategories = jest.fn();
    const sidecard = render(<Sidecard sortAscending={sortAscending} sortDescending={sortDescending} sortRatingAsc={sortRatingAsc}
        sortRatingDesc={sortRatingDesc} sortCategories={sortCategories} />);
    expect(sortAscending).toHaveBeenCalledTimes(0);
    expect(sortDescending).toHaveBeenCalledTimes(0);
    expect(sortRatingAsc).toHaveBeenCalledTimes(0);
    expect(sortRatingDesc).toHaveBeenCalledTimes(0);
    expect(sortCategories).toHaveBeenCalledTimes(0);
});

test('test Sidecard categories sorting 1 times', () => {
    const sortAscending = jest.fn();
    const sortDescending = jest.fn();
    const sortRatingAsc = jest.fn();
    const sortRatingDesc = jest.fn();
    const sortCategories = jest.fn();
    const sidecard = render(<Sidecard sortAscending={sortAscending} sortDescending={sortDescending} sortRatingAsc={sortRatingAsc}
        sortRatingDesc={sortRatingDesc} sortCategories={sortCategories} />);
    const clothing = sidecard.queryAllByText('Clothing/Apparel');
    fireEvent.click(clothing[0]);
    expect(sortCategories).toHaveBeenCalledTimes(1);
});

test('test Sidecard categories sorting called 2 times', () => {
    const sortAscending = jest.fn();
    const sortDescending = jest.fn();
    const sortRatingAsc = jest.fn();
    const sortRatingDesc = jest.fn();
    const sortCategories = jest.fn();
    const sidecard = render(<Sidecard sortAscending={sortAscending} sortDescending={sortDescending} sortRatingAsc={sortRatingAsc}
        sortRatingDesc={sortRatingDesc} sortCategories={sortCategories} />);
    const clothing = sidecard.queryAllByText('Clothing/Apparel');
    fireEvent.click(clothing[0]);
    fireEvent.click(clothing[0]);
    expect(sortCategories).toHaveBeenCalledTimes(2);
});

test('test Sidecard categories sorting called with multiple categories', () => {
    const sortAscending = jest.fn();
    const sortDescending = jest.fn();
    const sortRatingAsc = jest.fn();
    const sortRatingDesc = jest.fn();
    const sortCategories = jest.fn();
    const sidecard = render(<Sidecard sortAscending={sortAscending} sortDescending={sortDescending} sortRatingAsc={sortRatingAsc}
        sortRatingDesc={sortRatingDesc} sortCategories={sortCategories} />);
    const clothing = sidecard.queryAllByText('Clothing/Apparel');
    const jewelry = sidecard.queryAllByText('Jewelry');
    const foodtruck = sidecard.queryAllByText('Food Truck');
    fireEvent.click(clothing[0]);
    fireEvent.click(jewelry[0]);
    fireEvent.click(foodtruck[0]);
    expect(sortCategories).toHaveBeenCalledTimes(3);
});

test('test oldest to newest dropdown button appears after being clicked', () => {
    const sortAscending = jest.fn();
    const sortDescending = jest.fn();
    const sortRatingAsc = jest.fn();
    const sortRatingDesc = jest.fn();
    const sortCategories = jest.fn();
    const sidecard = render(<Sidecard />);
    const dropdown = sidecard.getByText("Newest to Oldest ▽");
    fireEvent.click(dropdown);
    const oldToNew = sidecard.getByRole('button', {
        name: /oldest to newest/i
      })
    expect(oldToNew.innerHTML).toBe('Oldest to Newest');
});

test('test oldest to newest dropdown button appears after being clicked and click the dropdown button', () => {
    const sortAscending = jest.fn();
    const sortDescending = jest.fn();
    const sortRatingAsc = jest.fn();
    const sortRatingDesc = jest.fn();
    const sortCategories = jest.fn();
    const sidecard = render(<Sidecard sortAscending={sortAscending} sortDescending={sortDescending} sortRatingAsc={sortRatingAsc}
        sortRatingDesc={sortRatingDesc} sortCategories={sortCategories} />);
    const dropdown = sidecard.getByText("Newest to Oldest ▽");
    fireEvent.click(dropdown);
    const oldToNew = sidecard.getByRole('button', {
        name: /oldest to newest/i
      })
    fireEvent.click(oldToNew);
    expect(sortDescending).toHaveBeenCalledTimes(1);
});

test('test newest to oldest dropdown button appears after being clicked', () => {
    const sortAscending = jest.fn();
    const sortDescending = jest.fn();
    const sortRatingAsc = jest.fn();
    const sortRatingDesc = jest.fn();
    const sortCategories = jest.fn();
    const sidecard = render(<Sidecard />);
    const dropdown = sidecard.getByText("Newest to Oldest ▽");
    fireEvent.click(dropdown);
    const newToOld = sidecard.getByRole('button', {
        name: 'Newest to Oldest'
      });
    expect(newToOld.innerHTML).toBe('Newest to Oldest');
});

test('test newest to oldest dropdown button appears after being clicked and click newest to oldest dropdown', () => {
    const sortAscending = jest.fn();
    const sortDescending = jest.fn();
    const sortRatingAsc = jest.fn();
    const sortRatingDesc = jest.fn();
    const sortCategories = jest.fn();
    const sidecard = render(<Sidecard sortAscending={sortAscending} sortDescending={sortDescending} sortRatingAsc={sortRatingAsc}
        sortRatingDesc={sortRatingDesc} sortCategories={sortCategories} />);
    const dropdown = sidecard.getByText("Newest to Oldest ▽");
    fireEvent.click(dropdown);
    const newToOld = sidecard.getByRole('button', {
        name: 'Newest to Oldest'
      });
    fireEvent.click(newToOld);
    expect(sortAscending).toHaveBeenCalledTimes(1);
});

test('test highest to lowest rating dropdown button appears after being clicked', () => {
    const sortAscending = jest.fn();
    const sortDescending = jest.fn();
    const sortRatingAsc = jest.fn();
    const sortRatingDesc = jest.fn();
    const sortCategories = jest.fn();
    const sidecard = render(<Sidecard />);
    const dropdown = sidecard.getByText("Highest to Lowest Rating ▽");
    fireEvent.click(dropdown);
    const highToLow = sidecard.getByRole('button', {
        name: 'Highest to Lowest Rating'
      });
    expect(highToLow.innerHTML).toBe('Highest to Lowest Rating');
});

test('test highest to lowest rating dropdown button appears after being clicked and click button', () => {
    const sortAscending = jest.fn();
    const sortDescending = jest.fn();
    const sortRatingAsc = jest.fn();
    const sortRatingDesc = jest.fn();
    const sortCategories = jest.fn();
    const sidecard = render(<Sidecard sortAscending={sortAscending} sortDescending={sortDescending} sortRatingAsc={sortRatingAsc}
        sortRatingDesc={sortRatingDesc} sortCategories={sortCategories} />);
    const dropdown = sidecard.getByText("Highest to Lowest Rating ▽");
    fireEvent.click(dropdown);
    const highToLow = sidecard.getByRole('button', {
        name: 'Highest to Lowest Rating'
      });
    fireEvent.click(highToLow);
    expect(sortRatingDesc).toHaveBeenCalledTimes(1);
});


test('test lowest to highest rating dropdown button appears after being clicked', () => {
    const sortAscending = jest.fn();
    const sortDescending = jest.fn();
    const sortRatingAsc = jest.fn();
    const sortRatingDesc = jest.fn();
    const sortCategories = jest.fn();
    const sidecard = render(<Sidecard />);
    const dropdown = sidecard.getByText("Highest to Lowest Rating ▽");
    fireEvent.click(dropdown);
    const oldToNew = sidecard.getByRole('button', {
        name: 'Lowest to Highest Rating'
      });
    expect(oldToNew.innerHTML).toBe('Lowest to Highest Rating');
});

test('test lowest to highest rating dropdown button appears after being clicked and click button', () => {
    const sortAscending = jest.fn();
    const sortDescending = jest.fn();
    const sortRatingAsc = jest.fn();
    const sortRatingDesc = jest.fn();
    const sortCategories = jest.fn();
    const sidecard = render(<Sidecard sortAscending={sortAscending} sortDescending={sortDescending} sortRatingAsc={sortRatingAsc}
        sortRatingDesc={sortRatingDesc} sortCategories={sortCategories} />);
    const dropdown = sidecard.getByText("Highest to Lowest Rating ▽");
    fireEvent.click(dropdown);
    const lowToHigh = sidecard.getByRole('button', {
        name: 'Lowest to Highest Rating'
      });
    fireEvent.click(lowToHigh);
    expect(sortRatingAsc).toHaveBeenCalledTimes(1);
});