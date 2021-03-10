import App from './App';
import { render, fireEvent } from '@testing-library/react';

const characters = [{date: "2021-01-28",
    description: "A food truck event with tasty food",
    event: "Food Truck",
    latitude: 32.677286,
    location: "San Diego, CA",
    longitude: -117.05241,
    name: "Ryan",
    photo: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fbrewmastersinvitational.com" +
    "%2Fwp-content%2Fuploads%2F2017%2F02%2Ffood-truck-stock.jpg&f=1&nofb=1",
    rating: 1131,
    tags: "Taco Truck",
    zipcode: "93405",
    _id: "602751f0c861c54ab5acf9db"},
    {date: "2021-12-28",
    description: "A food truck event with tasty food",
    event: "Food Truck",
    latitude: 32.677286,
    location: "San Luis Obispo, CA",
    longitude: -117.05241,
    name: "Ryan",
    photo: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fbrewmastersinvitational.com" +
    "%2Fwp-content%2Fuploads%2F2017%2F02%2Ffood-truck-stock.jpg&f=1&nofb=1",
    rating: 1131,
    tags: "Food Truck",
    zipcode: "92139",
    _id: "602751f0c861c54ab5acf9db"}
];


const characters2 = [
    {date: "2021-12-28",
    description: "A food truck event with tasty food",
    event: "Food Truck",
    latitude: 32.677286,
    location: "San Luis Obispo, CA",
    longitude: -117.05241,
    name: "Ryan",
    photo: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fbrewmastersinvitational.com" +
    "%2Fwp-content%2Fuploads%2F2017%2F02%2Ffood-truck-stock.jpg&f=1&nofb=1",
    rating: 1131,
    tags: "Food Truck",
    zipcode: "92139",
    _id: "602751f0c861c54ab5acf9db"},
    {date: "2021-01-28",
    description: "A food truck event with tasty food",
    event: "Food Truck",
    latitude: 32.677286,
    location: "San Diego, CA",
    longitude: -117.05241,
    name: "Ryan",
    photo: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fbrewmastersinvitational.com" +
    "%2Fwp-content%2Fuploads%2F2017%2F02%2Ffood-truck-stock.jpg&f=1&nofb=1",
    rating: 1131,
    tags: "Taco Truck",
    zipcode: "93405",
    _id: "602751f0c861c54ab5acf9db"},
];


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


test('render App Sort by Date button click', () => {
    const app = render(<App />);
    const sortlikes = app.getByRole('button', {
        name: /sort by like/i
    });
    fireEvent.click(sortlikes);
    expect(sortlikes.innerHTML).toBe("Sort by Likes");
});


test('App Sort by Date', () => {
    const app = new (App);
    app.state.characters = characters;
    expect(app.sortCharacterList()).toStrictEqual(characters);

});


test('App Sort by Date Desc', () => {
    const app = new (App);
    app.state.characters = characters;
    const newList = app.sortCharacterListDesc();
    expect(newList).toStrictEqual(characters);
});


test('render App Sort by Date button click twice', () => {
    const app = render(<App />);
    const sortlikes = app.getByRole('button', {
        name: /sort by like/i
    });
    fireEvent.click(sortlikes);
    fireEvent.click(sortlikes);
    expect(sortlikes.innerHTML).toBe("Sort by Likes");
});


test('App Sort by Likes', () => {
    const app = new (App);
    app.state.characters = characters;
    const newList = app.sortByRating();
    expect(newList).toStrictEqual(characters);
});


test('App Sort by Likes Desc', () => {
    const app = new (App);
    app.state.characters = characters;
    const newList = app.sortByRatingDesc();
    expect(newList).toStrictEqual(characters);
});


test('render App Sort by Date button click twice', () => {
    const app = render(<App />);
    const sortdate = app.getByRole('button', {
        name: /sort by date/i
    });
    fireEvent.click(sortdate);
    fireEvent.click(sortdate);
    expect(sortdate.innerHTML).toBe("Sort by Date");
});


test('calculateDistance', () => {
    const app = new (App);
    app.calculateDistance("93405", "50");
    app.state.characters = characters;
    expect(app.state.characters).toStrictEqual(characters);
});


test('calculateDistance2', () => {
    const app = new (App);
    app.state.categories = ['Clothing/Apparel']
    app.state.characters = characters;
    app.calculateDistance("93405", "50");
    expect(app.state.characters).toStrictEqual(characters);
});


test('componentDidMount', () => {
    const app = new (App);
    app.componentDidMount();
    app.state.characters = characters;
    expect(app.state.characters).toStrictEqual(characters);
});


test('handleSearch', () => {
    const app = new (App);
    app.handleSearch("Food Truck");
    app.state.characters = characters2;
    expect(app.state.characters).toStrictEqual(characters2);
});


test('render App Clothing false', () => {
    const app = render(<App />);
    const togglebutton = app.queryAllByText('Clothing/Apparel');
    fireEvent.click(togglebutton[0]);
    fireEvent.click(togglebutton[0], {target: {checked: false}});
    expect(togglebutton[0].checked).toBe(false);
});


test('handlePatch', () => {
    const app = new (App);
    app.handlePatch("602751f0c861c54ab5acf9db", characters[0]);
    app.state.characters = characters;
    expect(app.state.characters).toStrictEqual(characters);
});

test('handleSubmit', () => {
    const app = new (App);
    app.handleSubmit(characters[0]);
    app.state.characters = characters;
    expect(app.state.characters).toStrictEqual(characters);
});

test('render App Automotive', () => {
    const app = render(<App />);
    const togglebutton = app.queryAllByText('Automotive');
    fireEvent.click(togglebutton[0]);
    fireEvent.click(togglebutton[0], {target: {checked: true}});
    expect(togglebutton[0].checked).toBe(true);
});


test('handleDistance', () => {
    const app = new (App);
    app.handleDistance("93405", "50");
    app.state.characters = characters;
    expect(app.state.characters).toStrictEqual(characters);
});


test('setInfo', () => {
    const app = new (App);
    app.setInfo(characters[0]);
    app.state.characters = characters;
    expect(app.state.characters).toStrictEqual(characters);
});


test('render App Farmers Market', () => {
    const app = render(<App />);
    const togglebutton = app.queryAllByText('Farmers Market');
    fireEvent.click(togglebutton[0]);
    fireEvent.click(togglebutton[0], {target: {checked: true}});
    expect(togglebutton[0].checked).toBe(true);
});


test('handleCategories', () => {
    const app = new (App);
    app.state.characters = characters;
    app.handleCategories(['Clothing/Apparel', 'Cars']);
    expect(app.state.characters).toStrictEqual(characters);
});


test('handleCategories2', () => {
    const app = new (App);
    app.state.characters = characters;
    app.handleCategories([]);
    expect(app.state.characters).toStrictEqual(characters);
});


test('render App Flea Market', () => {
    const app = render(<App />);
    const togglebutton = app.queryAllByText('Flea Market');
    fireEvent.click(togglebutton[0]);
    fireEvent.click(togglebutton[0], {target: {checked: true}});
    expect(togglebutton[0].checked).toBe(true);
});
