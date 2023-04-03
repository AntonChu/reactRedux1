import { CHANGE_SERVICE_FIELD, FIX_SERVICE_FIELD } from "./action";

const initialState = {key: "", name: "", price: "" };

const serviceAddReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    case FIX_SERVICE_FIELD:
      const { key } = action.payload;
      return { ...state, key}
    default:
      return state;
  }
}

export default serviceAddReducer;