export const createRestaurant = `mutation CreateRestaurant($input: CreateRestaurantInput!) {
  createRestaurant(input: $input) {
    name
    description
    city
  }
}
`;
export const updateRestaurant = `mutation UpdateRestaurant($input: UpdateRestaurantInput!) {
  updateRestaurant(input: $input) {
    name
    description
    city
  }
}
`;
export const deleteRestaurant = `mutation DeleteRestaurant($input: DeleteRestaurantInput!) {
  deleteRestaurant(input: $input) {
    name
    description
    city
  }
}
`;
