import { useSelector, useDispatch } from "react-redux";
import { removeService, fixService, changeService, addService } from "../redux/actionCreator";

export default function ServiceList() {
  const items = useSelector((state) => state.serviceList);
  const item2 = useSelector((state) => state.serviceAdd);
  console.log(items);
  console.log(item2);

  const dispatch = useDispatch();

  const handleFix = (key) => {
    console.log(key)
    const item = items.find(el => el.id === key);
    console.log(item)
    dispatch(changeService('name', item.name));
    dispatch(changeService('price', item.price));
    // dispatch(addService(key));
  }

  const handleRemove = (id) => {
    dispatch(removeService(id));
  };

  return (
    <ul>
      {items.map((o) => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => handleFix(o.id)}>fix</button>{" "}
          <button onClick={() => handleRemove(o.id)}>✕</button>{" "}
        </li>
      ))}
    </ul>
  );
}
  