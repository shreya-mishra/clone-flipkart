import faker from "faker";
faker.seed(100);
export const productsArray = [...Array(9)].map((item) => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  image: faker.random.image(),
  price: faker.commerce.price(),
  brand: faker.lorem.word(),
  ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  assured: faker.datatype.boolean(),
  offer: faker.random.arrayElement(["50%", "70%", "69%", "65%"]),
  size: faker.random.arrayElement([
    ["S", "M", "L", "XL"],
    ["S", "M", "L"],
    ["M", "L", "XL"],
    ["L", "XXL"],
    ["S", "M", "XL"],
    ["M", "L", "XXL"],
  ]),
  idealFor: faker.random.arrayElement([
    "Men",
    "Women",
    "Girl",
    "Boy",
    "Senior",
  ]),
  category: faker.random.arrayElement([
    "Grocery",
    "Automotive",
    "Fashion",
    "Home",
    "Appliances",
  ]),
}));

export const sortBy = [
  {
    id: 1,
    name: "Price -- Low to High",
    type: -1,
  },
  {
    id: 2,
    name: "Price -- High to Low",
    type: 1,
  },
];
export const categoryName = [
  {
    id: 1,
    name: "Grocery",
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
  },
  {
    id: 2,
    name: "Automotive",
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
  },
  {
    id: 3,
    name: "Fashion",
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100",
  },
  {
    id: 4,
    name: "Home",
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100",
  },
  {
    id: 5,
    name: "Appliances",
    image:
      "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
  },
];
