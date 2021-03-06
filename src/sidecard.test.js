import Sidecard from './Sidecard';
import { screen,render, fireEvent } from '@testing-library/react';

test('test Newest to Oldest dropdown option', () => {
    const sortAscending = jest.fn();
    const sortDescending = jest.fn();
    const sortRatingAsc = jest.fn();
    const sortRatingDesc = jest.fn();
    const sortCategories = jest.fn();
    const sidecard = render(<Sidecard />);
    const dropdown = sidecard.getByText("Sort by Date");
    expect(dropdown.innerHTML).toBe("Sort by Date");
});

test('test Most to Least Liked dropdown option', () => {
    const sortAscending = jest.fn();
    const sortDescending = jest.fn();
    const sortRatingAsc = jest.fn();
    const sortRatingDesc = jest.fn();
    const sortCategories = jest.fn();
    const sidecard = render(<Sidecard />);
    const dropdown = sidecard.getByText("Sort by Likes");
    expect(dropdown.innerHTML).toBe("Sort by Likes");
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
    const dropdown = sidecard.getByText("Sort by Date");
    fireEvent.click(dropdown);
    const oldToNew = sidecard.queryAllByRole('button', {
        name: "Oldest to Newest"
      });
    expect(oldToNew[0].innerHTML).toBe('Oldest to Newest');
});

test('test oldest to newest dropdown button appears after being clicked and click the dropdown button', () => {
    const sortAscending = jest.fn();
    const sortDescending = jest.fn();
    const sortRatingAsc = jest.fn();
    const sortRatingDesc = jest.fn();
    const sortCategories = jest.fn();
    const sidecard = render(<Sidecard sortAscending={sortAscending} sortDescending={sortDescending} sortRatingAsc={sortRatingAsc}
        sortRatingDesc={sortRatingDesc} sortCategories={sortCategories} />);
    const dropdown = sidecard.getByText("Sort by Date");
    fireEvent.click(dropdown);
    const oldToNew = sidecard.queryAllByRole('button', {
        name: "Oldest to Newest"
      });
    fireEvent.click(oldToNew[0]);
    expect(sortDescending).toHaveBeenCalledTimes(1);
});

test('test newest to oldest dropdown button appears after being clicked', () => {
    const sortAscending = jest.fn();
    const sortDescending = jest.fn();
    const sortRatingAsc = jest.fn();
    const sortRatingDesc = jest.fn();
    const sortCategories = jest.fn();
    const sidecard = render(<Sidecard />);
    const dropdown = sidecard.getByText("Sort by Date");
    fireEvent.click(dropdown);
    const newToOld = sidecard.queryAllByRole('button', {
        name: 'Newest to Oldest'
      });
    expect(newToOld[0].innerHTML).toBe('Newest to Oldest');
});

test('test newest to oldest dropdown button appears after being clicked and click newest to oldest dropdown', () => {
    const sortAscending = jest.fn();
    const sortDescending = jest.fn();
    const sortRatingAsc = jest.fn();
    const sortRatingDesc = jest.fn();
    const sortCategories = jest.fn();
    const sidecard = render(<Sidecard sortAscending={sortAscending} sortDescending={sortDescending} sortRatingAsc={sortRatingAsc}
        sortRatingDesc={sortRatingDesc} sortCategories={sortCategories} />);
    const dropdown = sidecard.getByText("Sort by Date");
    fireEvent.click(dropdown);
    const newToOld = sidecard.queryAllByRole('button', {
        name: 'Newest to Oldest'
      });
    fireEvent.click(newToOld[0]);
    expect(sortAscending).toHaveBeenCalledTimes(1);
});

test('test Most to Least Liked dropdown button appears after being clicked', () => {
    const sortAscending = jest.fn();
    const sortDescending = jest.fn();
    const sortRatingAsc = jest.fn();
    const sortRatingDesc = jest.fn();
    const sortCategories = jest.fn();
    const sidecard = render(<Sidecard />);
    const dropdown = sidecard.getByText("Sort by Likes");
    fireEvent.click(dropdown);
    const highToLow = sidecard.queryAllByRole('button', {
        name: 'Most to Least Liked'
      });
    expect(highToLow[0].innerHTML).toBe('Most to Least Liked');
});

test('test Most to Least Liked dropdown button appears after being clicked and click button', () => {
    const sortAscending = jest.fn();
    const sortDescending = jest.fn();
    const sortRatingAsc = jest.fn();
    const sortRatingDesc = jest.fn();
    const sortCategories = jest.fn();
    const sidecard = render(<Sidecard sortAscending={sortAscending} sortDescending={sortDescending} sortRatingAsc={sortRatingAsc}
        sortRatingDesc={sortRatingDesc} sortCategories={sortCategories} />);
    const dropdown = sidecard.getByText("Sort by Likes");
    fireEvent.click(dropdown);
    const highToLow = sidecard.queryAllByRole('button', {
        name: 'Most to Least Liked'
      });
    fireEvent.click(highToLow[0]);
    expect(sortRatingDesc).toHaveBeenCalledTimes(1);
});


test('test Least to Most Liked rating dropdown button appears after being clicked', () => {
    const sortAscending = jest.fn();
    const sortDescending = jest.fn();
    const sortRatingAsc = jest.fn();
    const sortRatingDesc = jest.fn();
    const sortCategories = jest.fn();
    const sidecard = render(<Sidecard />);
    const dropdown = sidecard.getByText("Sort by Likes");
    fireEvent.click(dropdown);
    const oldToNew = sidecard.getByRole('button', {
        name: 'Least to Most Liked'
      });
    expect(oldToNew.innerHTML).toBe('Least to Most Liked');
});

test('test Least to Most Liked dropdown button appears after being clicked and click button', () => {
    const sortAscending = jest.fn();
    const sortDescending = jest.fn();
    const sortRatingAsc = jest.fn();
    const sortRatingDesc = jest.fn();
    const sortCategories = jest.fn();
    const sidecard = render(<Sidecard sortAscending={sortAscending} sortDescending={sortDescending} sortRatingAsc={sortRatingAsc}
        sortRatingDesc={sortRatingDesc} sortCategories={sortCategories} />);
    const dropdown = sidecard.getByText("Sort by Likes");
    fireEvent.click(dropdown);
    const lowToHigh = sidecard.getByRole('button', {
        name: 'Least to Most Liked'
      });
    fireEvent.click(lowToHigh);
    expect(sortRatingAsc).toHaveBeenCalledTimes(1);
});