interface Restaurant {
  category: string;
  name: string;
  distance?: number;
  menu: string;
}

interface Restaurants {
  restaurantList: Restaurant[];
  add: (restaurant: Restaurant) => void;
  filterByCategory: (category: string) => Restaurant[];
}

const restaurants: Restaurants = {
  restaurantList: [],

  add(restaurant: Restaurant): void {
    this.restaurantList.push(restaurant);
  },

  filterByCategory(category: string): Restaurant[] {
    return this.restaurantList.filter(
      (restaurants: Restaurant) => restaurants.category === category
    );
  },
};

restaurants.add({
  name: "hoho",
  category: "한식",
  distance: 1,
  menu: "메뉴",
});

console.log(restaurants.filterByCategory("한식"));

/**
 * restaurantList 필드가 없었던 이유?
 * 함수 리턴값을 선언하지 않은 이유?
 * 메뉴는 string[] 가 되지 않은 이유?
 */
