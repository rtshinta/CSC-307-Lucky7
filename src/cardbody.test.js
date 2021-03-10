import CardBody from './CardBody';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";

test('check render CardBody city', () => {
    const CardInfo = [{date: "2021-02-28",
    description: "A food truck event with tasty food",
    event: "Food Truck",
    latitude: 32.677286,
    location: "San Diego, CA",
    longitude: -117.05241,
    name: "Ryan",
    photo: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fbrewmastersinvitational.com%2Fwp-content%2Fuploads%2F2017%2F02%2Ffood-truck-stock.jpg&f=1&nofb=1",
    rating: 1131,
    tags: "Food Truck",
    zipcode: "92139",
    _id: "602751f0c861c54ab5acf9db"}];
    const like = render(<Router><CardBody characterData={CardInfo} removeCharacter={null} setInfo={null} /></Router>);
    const loc = like.getByText(/san diego, ca/i);
    expect(loc.innerHTML).toBe('San Diego, CA');
});

test('check CardBody date', () => {
    const CardInfo = [{date: "2021-12-28",
    description: "A food truck event with tasty food",
    event: "Food Truck",
    latitude: 32.677286,
    location: "San Diego, CA",
    longitude: -117.05241,
    name: "Ryan",
    photo: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fbrewmastersinvitational.com" +
    "%2Fwp-content%2Fuploads%2F2017%2F02%2Ffood-truck-stock.jpg&f=1&nofb=1",
    rating: 1131,
    tags: "Food Truck",
    zipcode: "92139",
    _id: "602751f0c861c54ab5acf9db"}];
    const like = render(<Router><CardBody characterData={CardInfo} removeCharacter={null} setInfo={null} /></Router>);
    const date = like.getByText("12/28/2021");
    expect(date.innerHTML).toBe("12/28/2021");
});
