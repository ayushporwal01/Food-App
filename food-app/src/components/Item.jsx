import { useDispatch } from "react-redux";
import styles from "./item.module.css";
import { addItem } from "../utils/cartSlice";

export default function Item({ item }) {
  const info = item?.card?.info;

  const price = (info?.price ?? info?.defaultPrice ?? 0) / 100;
  const imageId = info?.imageId;

  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(addItem(item));
  }

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemLeft}>
        <h4 className={styles.itemName}>{info?.name}</h4>
        <p className={styles.cost}>&#8377; {price}</p>
        {info?.ratings?.aggregatedRating?.rating && (
          <p className={styles.rating}>
            &#9733; {info.ratings.aggregatedRating.rating}
          </p>
        )}
        <p className={styles.description}>{info?.description}</p>
      </div>
      <div className={styles.itemRight}>
        {imageId && (
          <img
            className={styles.itemImg}
            src={`https://media-assets.swiggy.com/swiggy/image/upload/${imageId}`}
            alt={info?.name}
          />
        )}
        <button className={styles.addBtn} onClick={() => handleClick(item)}>Add</button>
      </div>
    </div>
  );
}
