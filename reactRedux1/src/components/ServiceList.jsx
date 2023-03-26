import { useSelector, useDispatch } from "react-redux";
import { removeService } from "../redux/actionCreator";

export default function ServiceList() {
  const items = useSelector((state) => state.serviceList);
  console.log(items);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeService(id));
  };
  return (
    <ul>
      {items.map((o) => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => handleRemove(o.id)}>✕</button>{" "}
        </li>
      ))}{" "}
    </ul>
  );
}
 