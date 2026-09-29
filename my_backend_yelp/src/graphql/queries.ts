export const getRestaurant = `query GetRestaurant($name: String!) {
  getRestaurant(name: $name) {
    name
    description
    city
  }
}
`;
export const listRestaurants = `query ListRestaurants($filter: TableRestaurantFilterInput, $limit: Int, $nextToken: String) {
  listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      name
      description
      city
    }
    nextToken
  }
}
`;
