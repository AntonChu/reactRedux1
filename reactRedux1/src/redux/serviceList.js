import { ADD_SERVICE, REMOVE_SERVICE } from "./action";

const initialState = [
  { name: "Замена стекла", price: 21000 },
];
const serviceListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SERVICE:
      const { name, price } = action.payload;
      console.log(name, price);
      console.log(action);
      return [...state, { name: name, price: Number(price) }];
    case REMOVE_SERVICE:
      console.log(action);
      const { id } = action.payload;
      return state.filter((service) => service.id !== id);
    default:
      return state;
  }
}

export default serviceListReducer;