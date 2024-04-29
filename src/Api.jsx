import batase from "./images/batase.jpg";
import burger from "./images/burger.jpg";
import pizza from "./images/pizza.jpg";
import icecream from "./images/icecream.jpg";
import samosa from "./images/samosa.jpg";
import tea from "./images/tea.jpg";
import coffee from "./images/coffee.jpg";
import lassi from "./images/lassi.jpg";
import chole from "./images/chole.jpg";
import rajma from "./images/rajma.jpg";
import momos from "./images/momos.jpg";
import sandwich from "./images/sandwich.jpg";
import noddles from "./images/noddles.jpg";
import khichadi from "./images/khichadi.jpg";
import fruits from "./images/fruits.jpg";
import frenchfries from "./images/frenchfries.jpg";
import bread from "./images/bread.jpg";
import roti from "./images/roti.jpg";
import paneer from "./images/paneer.jpg";
import fullthali from "./images/fullthali.jpg";

const Api = [
  {
    image:batase,
    title: "PANI PURI",
    disc: "Pani puri is a popular street food of India, where crisp fried dough balls are stuffed with potatoes, sprouts, spicy tangy water or sweet chutney.",
    cost: "10 Rs.",
    offers: "10% OFF",
    link1: "4.5",
    category: "evening",
  },
  {
    image: burger,
    title: "BURGER",
    disc: "A hamburger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.",
    cost: "50 Rs.",
    offers: "5% OFF",
    link1: "4.5",
    category: "lunch",
  },
  {
    image: pizza,
    title: "PIZZA",
    disc: "Pizza is a savory dish of Italian origin , flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients.",
    cost: "100 Rs.",
    offers: "20% OFF",
    link1: "4.5",
    category: "lunch",
  },
  {
    image: icecream,
    title: "ICE CREAM",
    disc: "Ice cream is a sweetened frozen food typically eaten as a snack or dessert. It may be made from dairy milk or cream and is flavored with a sweetener, either sugar or an alternative.",
    cost: "20 Rs.",
    offers: "20% OFF",
    link1: "4.5",
    category: "breakfast",
  },
  {
    image: samosa ,
    title: "SAMOSA",
    disc: "A samosa is a fried or baked pastry with a savory filling, such as spiced potatoes, onions, peas, cheese and other ingredients. It may take different forms, including triangular, cone, or half-moon shapes",
    cost: "10 Rs.",
    offers: "10% OFF",
    link1: "4.5",
    category: "evening",
  },
  {
    image: tea,
    title: "TEA",
    disc: "Tea is an aromatic beverage commonly prepared by pouring hot or boiling water over cured or fresh leaves of the Camellia sinensis, an evergreen shrub native to East Asia.",
    cost: "10 Rs.",
    offers: "10% OFF",
    link1: "4.5",
    category: "breakfast",
  },
  {
    image: coffee,
    title: "COFFEE",
    disc: "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. coffee berries are bright red in color ",
    cost: "20 Rs.",
    offers: "10% OFF",
    link1: "4.5",
    category: "breakfast",
  },
  {
    image: lassi,
    title: "LASSI",
    disc: "Lassi is a popular traditional dahi-based drink that originated in the Indian subcontinent. Lassi is a blend of yogurt, water and spices ",
    cost: "20 Rs.",
    offers: "10% OFF",
    link1: "4.5",
    category: "breakfast",
  },
  {
    image: chole,
    title: "CHOLE CHAWAL",
    disc: "Chole bhature is a food dish popular in the Northern areas of the Indian subcontinent. Chole stands for a spiced tangy chickpea curry and bhatura is a fried leavened bread.",
    cost: "20 Rs.",
    offers: "10% OFF",
    link1: "4.5",
    category: "lunch",
  },
  {
    image: rajma,
    title: "RAJMA CHAWAL",
    disc: "Rajma is a popular North Indian vegetarian dish consisting of red kidney beans in a thick gravy with many Indian whole spices and usually served with rice.",
    cost: "20 Rs.",
    offers: "10% OFF",
    link1: "4.5",
    category: "lunch",
  },

  {
    image: momos,
    title: "MOMOS",
    disc: "Momo is a type of South Asian dumpling, popular across the Indian subcontinent and the Himalayan regions of broader South Asia.",
    cost: "20 Rs.",
    offers: "10% OFF",
    link1: "4.5",
    category: "evening",
  },
  {
    image: sandwich,
    title: "SANDWICH",
    disc: "A sandwich is a food typically consisting of vegetables, sliced cheese , placed on or between slices of bread, or more generally any dish wherein bread serves as a container.",
    cost: "20 Rs.",
    offers: "10% OFF",
    link1: "4.5",
    category: "breakfast",
  },

  {
    image: noddles,
    title: "CHOWMEIN",
    disc: "Chow mein are Chinese stir-fried noodles with vegetables and sometimes meat or tofu; the name is a romanization of the Taishanese chāu-mèing.",
    cost: "20 Rs.",
    offers: "10% OFF",
    link1: "4.5",
    category: "evening",
  },
  {
    image: khichadi,
    title: "KHICHDI",
    disc: "Khichdi is a comforting and nutritious Indian dish made from rice and lentils cooked together with aromatic spices. It's often served with yogurt, pickles, or papadum.",
    cost: "25 Rs.",
    offers: "Special Combo Offer Available",
    link1: "4.4",
    category: "dinner",
  },
  {
    image: fruits,
    title: "FRUIT PLATTER",
    disc: "Our fruit platter features a colorful assortment of fresh, seasonal fruits, including juicy watermelon, sweet strawberries, crisp apples, succulent grapes, and more.",
    cost: "60 Rs.",
    offers: "Customizable Selection Available",
    link1: "4.7",
    category: "breakfast",
  },
  {
    image: frenchfries,
    title: "FRENCH FRIES",
    disc: "Our French fries are crispy on the outside and fluffy on the inside, perfectly seasoned with salt. .",
    cost: "25 Rs.",
    offers: "Add-ons available (cheese, chili, etc.)",
    link1: "4.8",
    category: "evening",
  },
  {
    image: bread,
    title: "BREAD",
    disc: "We offer a variety of fresh, soft, and delicious bread, including white, wheat, multigrain, and more. Perfect for sandwiches, toast, and more.",
    cost: "10 Rs.",
    offers: "10% OFF",
    link1: "4.5",
    category: "breakfast",
  },
  {
    image: roti,
    title: "PARATHA",
    disc: "Paratha is a layered Indian flatbread made from whole wheat flour. It's flaky, crispy, and delicious, perfect for breakfast, lunch, or dinner.",
    cost: "20 Rs.",
    offers: "10% OFF",
    link1: "4.5",
    category: "dinner",
  },
  {
    image: paneer,
    title: "PANEER",
    disc: "Paneer is a fresh cheese common in the Indian subcontinent. It is an unaged, non-melting farmer cheese made by curdling milk with a fruit- or vegetable.",
    cost: "40 Rs.",
    offers: "10% OFF",
    link1: "4.5",
    category: "dinner",
  },
  {
    image: fullthali,
    title: "INDIAN THALI",
    disc: "Our Indian thali features a variety of delicious and authentic Indian dishes, including rice, dal, sabzi, roti, raita, and more. Perfect for a complete and satisfying meal.",
    cost: "100 Rs.",
    offers: "Special Combo Offer Available",
    link1: "4.5",
    categoryL: "dinner",
  },
];

export default Api;
