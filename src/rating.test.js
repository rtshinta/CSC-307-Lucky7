import LikeRating from './Rating';
import { render, fireEvent } from '@testing-library/react';

test('check LikeRating handlePatch called once', () => {
    const handlePatch = jest.fn();
    const CardInfo = [{date: "2021-02-28",
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
    _id: "602751f0c861c54ab5acf9db"}];
    const like = render(<LikeRating CardInfo={CardInfo} handlePatch={handlePatch} />);
    const button = like.queryByRole('button');
    fireEvent.click(button);
    expect(handlePatch).toBeCalledTimes(1);
});
