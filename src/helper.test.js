import CardBody from './CardBody'

test('2 + 2 should return 4', () => 
{
  expect(2 + 2).toBe(4);
});

test('tests description field of cardbody', () => 
{
  let character = {
    "_id": {
        "$oid": "60233179aba6d37fafe9fae1"
    },
    "photo": "https://i.imgur.com/wBk6SwF.jpg",
    "description": "Burger Consumer",
    "event": "Blood Man",
    "date": "2/12/2021",
    "location": "San Luis Obispo, CA",
    "tags": "food truck",
    "rating": "1"
};
  const wrapper = (<CardBody characterData={character} removeCharacter={null} />);
  const value = wrapper.props.characterData.description
  expect(value).toMatch(/Burger Consumer/);
});

test('tests date field of cardbody component', () => 
{
  let character = {
    "_id": {
        "$oid": "60233179aba6d37fafe9fae1"
    },
    "photo": "https://i.imgur.com/wBk6SwF.jpg",
    "description": "Burger Consumer",
    "event": "Blood Man",
    "date": "2/12/2021",
    "location": "San Luis Obispo, CA",
    "tags": "food truck",
    "rating": "1"
};
  const wrapper = (<CardBody characterData={character} removeCharacter={null} />);
  const value = wrapper.props.characterData.date
  expect(value).toMatch("2/12/2021");
});