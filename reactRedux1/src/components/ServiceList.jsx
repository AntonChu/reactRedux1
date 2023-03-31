import { useSelector, useDispatch } from "react-redux";
import { removeService, fixService, changeService } from "../redux/actionCreator";

export default function ServiceList() {
  const items = useSelector((state) => state.serviceList);

  const dispatch = useDispatch();

  const handleFix = (id) => {
    console.log(items);
  
    console.log(id);
    const item = items.find(el => el.id === id);
    dispatch(changeService('name', item.name));
    dispatch(changeService('price', item.price));
    dispatch(fixService(id));
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
  