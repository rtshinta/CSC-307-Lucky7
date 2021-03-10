import Categories from './Categories';
import { render, fireEvent } from '@testing-library/react';


test('test Clothing/Apparel category button', () => {
  const sortCategories = jest.fn();
  const categories = render(<Categories sortCategories={sortCategories}/>);
  const togglebutton = categories.queryAllByText('Clothing/Apparel');
  fireEvent.click(togglebutton[0]);
  expect(sortCategories).toHaveBeenCalledTimes(1);
}
);

test('test checked state for clothing', () => {
  const sortCategories = jest.fn();
  const categories = render(<Categories sortCategories={sortCategories}/>);
  const togglebutton = categories.queryAllByText('Clothing/Apparel');
  //fireEvent.click(togglebutton[0]);
  //expect(sortCategories).toHaveBeenCalledTimes(1);
  fireEvent.click(togglebutton[0], {target: {checked: true}});
  expect(togglebutton[0].checked).toBe(true);
}
);

test('test Farmers Market category button', () => {
  const sortCategories = jest.fn();
  const categories = render(<Categories sortCategories={sortCategories}/>);
  const togglebutton = categories.queryAllByText('Farmers Market');
  fireEvent.click(togglebutton[0]);
  fireEvent.click(togglebutton[0]);
  expect(sortCategories).toHaveBeenCalledTimes(2);
}
);

test('test checked state for Farmers Market', () => {
  const sortCategories = jest.fn();
  const categories = render(<Categories sortCategories={sortCategories}/>);
  const togglebutton = categories.queryAllByText('Farmers Market');
  //fireEvent.click(togglebutton[0]);
  //expect(sortCategories).toHaveBeenCalledTimes(1);
  fireEvent.click(togglebutton[0], {target: {checked: true}});
  fireEvent.click(togglebutton[0], {target: {checked: false}});
  expect(togglebutton[0].checked).toBe(false);
}
);

test('test Farmers Market category button three clicks', () => {
  const sortCategories = jest.fn();
  const categories = render(<Categories sortCategories={sortCategories}/>);
  const togglebutton = categories.queryAllByText('Farmers Market');
  fireEvent.click(togglebutton[0]);
  fireEvent.click(togglebutton[0]);
  fireEvent.click(togglebutton[0]);
  expect(sortCategories).toHaveBeenCalledTimes(3);
}
);

test('test Food Truck category button', () => {
  const sortCategories = jest.fn();
  const categories = render(<Categories sortCategories={sortCategories}/>);
  const togglebutton = categories.queryAllByText('Food Truck');
  fireEvent.click(togglebutton[0]);
  expect(sortCategories).toHaveBeenCalledTimes(1);
}
);

test('test checked state for Farmers Market', () => {
  const sortCategories = jest.fn();
  const categories = render(<Categories sortCategories={sortCategories}/>);
  const togglebutton = categories.queryAllByText('Food Truck');
  const leftClick = { button: 2};
  fireEvent.click(togglebutton[0], {target: {checked: true}});
  fireEvent.click(togglebutton[0], {target: {checked: false}});
  fireEvent.click(togglebutton[0], {target: {checked: true}});
  expect(togglebutton[0].checked).toBe(true);
}
);

test('test Concerts category button', () => {
  const sortCategories = jest.fn();
  const categories = render(<Categories sortCategories={sortCategories}/>);
  const togglebutton = categories.queryAllByText('Concert');
  fireEvent.click(togglebutton[0]);
  fireEvent.click(togglebutton[0]);
  expect(sortCategories).toHaveBeenCalledTimes(2);
}
);

test('test Immersive Experience category button', () => {
  const sortCategories = jest.fn();
  const categories = render(<Categories sortCategories={sortCategories}/>);
  const togglebutton = categories.queryAllByText('Immersive Experience');
  fireEvent.click(togglebutton[0]);
  expect(sortCategories).toHaveBeenCalledTimes(1);
}
);

test('test Immersive Experience category button', () => {
  const sortCategories = jest.fn();
  const categories = render(<Categories sortCategories={sortCategories}/>);
  const togglebutton = categories.queryAllByText('Art');
  fireEvent.click(togglebutton[0]);
  expect(sortCategories).toHaveBeenCalledTimes(1);
  
}
);

test('test Flea Market category button', () => {
  const sortCategories = jest.fn();
  const categories = render(<Categories sortCategories={sortCategories}/>);
  const togglebutton = categories.queryAllByText('Flea Market');
  fireEvent.click(togglebutton[0]);
  expect(sortCategories).toHaveBeenCalledTimes(1);
  
}
);

test('test Educational category button', () => {
  const sortCategories = jest.fn();
  const categories = render(<Categories sortCategories={sortCategories}/>);
  const togglebutton = categories.queryAllByText('Educational');
  fireEvent.click(togglebutton[0]);
  expect(sortCategories).toHaveBeenCalledTimes(1);
}
);

test('test Athletic/Sports category button', () => {
  const sortCategories = jest.fn();
  const categories = render(<Categories sortCategories={sortCategories}/>);
  const togglebutton = categories.queryAllByText('Athletic/Sports');
  fireEvent.click(togglebutton[0]);
  expect(sortCategories).toHaveBeenCalledTimes(1);
  
}
);

test('test Automotive category button', () => {
  const sortCategories = jest.fn();
  const categories = render(<Categories sortCategories={sortCategories}/>);
  const togglebutton = categories.queryAllByText('Automotive');
  fireEvent.click(togglebutton[0]);
  expect(sortCategories).toHaveBeenCalledTimes(1);
  
}
);

test('test Gaming category button', () => {
  const sortCategories = jest.fn();
  const categories = render(<Categories sortCategories={sortCategories}/>);
  const togglebutton = categories.queryAllByText('Gaming');
  fireEvent.click(togglebutton[0]);
  expect(sortCategories).toHaveBeenCalledTimes(1);
  
}
);

test('test Jewelry category button', () => {
  const sortCategories = jest.fn();
  const categories = render(<Categories sortCategories={sortCategories}/>);
  const togglebutton = categories.queryAllByText('Jewelry');
  fireEvent.click(togglebutton[0]);
  expect(sortCategories).toHaveBeenCalledTimes(1);
  
}
);

test('test For Kids category button', () => {
  const sortCategories = jest.fn();
  const categories = render(<Categories sortCategories={sortCategories}/>);
  const togglebutton = categories.queryAllByText('For Kids');
  fireEvent.click(togglebutton[0]);
  expect(sortCategories).toHaveBeenCalledTimes(1);
  
}
);

test('test Cultural Festivals category button', () => {
  const sortCategories = jest.fn();
  const categories = render(<Categories sortCategories={sortCategories}/>);
  const togglebutton = categories.queryAllByText('Cultural Festivals');
  fireEvent.click(togglebutton[0]);
  expect(sortCategories).toHaveBeenCalledTimes(1);
  
}
);

test('test Favorites category button', () => {
  const sortCategories = jest.fn();
  const categories = render(<Categories sortCategories={sortCategories}/>);
  const togglebutton = categories.queryAllByText('Favorites');
  fireEvent.click(togglebutton[0]);
  expect(sortCategories).toHaveBeenCalledTimes(1);
}
);

test('test Movies/Plays category button', () => {
  const sortCategories = jest.fn();
  const categories = render(<Categories sortCategories={sortCategories}/>);
  const togglebutton = categories.queryAllByText('Movies/Plays');
  fireEvent.click(togglebutton[0]);
  expect(sortCategories).toHaveBeenCalledTimes(1);
  
}
);

test('test Movies/Plays category button with 0 clicks', () => {
  const sortCategories = jest.fn();
  const categories = render(<Categories sortCategories={sortCategories}/>);
  const togglebutton = categories.queryAllByText('Movies/Plays');
  //fireEvent.click(togglebutton[0]);
  expect(sortCategories).toHaveBeenCalledTimes(0);
  
}
);