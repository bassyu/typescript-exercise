type Category = "한식" | "중식" | "일식" | "양식";

type Restaurant = {
  category: Category;
  name: string;
  menu: string[];
  distance?: number;
};

interface Restaurants {
  restaurantList: Restaurant[];
  add: (restaurant: Restaurant) => void;
  filterByCategory: (category: Category) => Restaurant[];
}
