import { useSelector, useDispatch } from "react-redux";
import { changeService, addService } from "../redux/actionCreator";

export default function ServiceAdd() {
  const item = useSelector((state) => state.serviceAdd);
//   console.log(item);
  const dispatch = useDispatch();
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    // console.log(name, value);
    dispatch(changeService(name, value));
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(item)
    dispatch(addService(item.name, item.price));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} value={item.name} />
      <input name="price" onChange={handleChange} value={item.price} />
      <button type="submit">Save</button>
    </form>
  );
}
