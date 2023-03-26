import { CHANGE_SERVICE_FIELD } from "./action";

const initialState = { name: "", price: "" };
const serviceAddReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      // console.log(action);
      // console.log(action.payload);
      const { name, value } = action.payload;
      // console.log( value);
      return { ...state, [name]: value };
    default:
      return state;
  }
}

export default serviceAddReducer;