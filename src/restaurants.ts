interface Restaurant {
  category: string;
  name: string;
  distance?: number;
  menu: string;
}

const restaurants = {
  add(restaurant: Restaurant) {},
  filterByCategory(category: string) {},
};
