import EventExpand from './EventExpand';
import { render, fireEvent } from '@testing-library/react';

test('test EventExpand location', () => {
    const handlePatch = jest.fn();
    const CardInfo = {date: "2021-02-28",
    description: "A food truck event with tasty food",
    event: "Food Truck",
    job: "Zookeeper",
    latitude: 32.677286,
    location: "San Diego, CA",
    longitude: -117.05241,
    name: "Ryan",
    photo: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fbrewmastersinvitational.com%2Fwp-content%2Fuploads%2F2017%2F02%2Ffood-truck-stock.jpg&f=1&nofb=1",
    rating: 1131,
    tags: "Food Truck",
    zipcode: "92139",
    _id: "602751f0c861c54ab5acf9db"};
    const event = render(<EventExpand CardInfo={CardInfo} handlePatch={handlePatch} />);
    const location = event.getByText("San Diego, CA");
    expect(location.innerHTML).toBe("San Diego, CA");
  }
  );

  test('test EventExpand description', () => {
    const handlePatch = jest.fn();
    const CardInfo = {date: "2021-02-28",
    description: "A food truck event with tasty food",
    event: "Food Truck",
    job: "Zookeeper",
    latitude: 32.677286,
    location: "San Diego, CA",
    longitude: -117.05241,
    name: "Ryan",
    photo: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fbrewmastersinvitational.com%2Fwp-content%2Fuploads%2F2017%2F02%2Ffood-truck-stock.jpg&f=1&nofb=1",
    rating: 1131,
    tags: "Food Truck",
    zipcode: "92139",
    _id: "602751f0c861c54ab5acf9db"};
    const event = render(<EventExpand CardInfo={CardInfo} handlePatch={handlePatch} />);
    const desc = event.getByText("A food truck event with tasty food");
    expect(desc.innerHTML).toBe("A food truck event with tasty food");
  }
  );