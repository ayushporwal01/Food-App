import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import styles from "./resMenu.module.css";
import Category from "./Category";
import useRestaurantMenu from "../utils/useRestaurantMenu";

export default function RestaurantMenu() {
  const [openCategoryIndex, setOpenCategoryIndex] = useState(null);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const categoryCards = resInfo?.cards?.find((c) => c?.groupedCard)?.groupedCard
    ?.cardGroupMap?.REGULAR?.cards;

  let cardsWithTitle = categoryCards.filter((card) => card?.card?.card?.title);

  if (cardsWithTitle[0]?.card?.card?.title?.toLowerCase() !== "recommended") {
    cardsWithTitle = cardsWithTitle.slice(1);
  }

  const subCategoryCards = categoryCards.filter(
    (card) => card?.card?.card?.categories,
  );

  const infoCard = resInfo?.cards?.find((card) => card?.card?.card?.info);

  const { name, cuisines, cloudinaryImageId, avgRating, costForTwoMessage } =
    infoCard?.card?.card?.info || {};

  return (
    <div className={styles.menuContainer}>
      <div className={styles.menu}>
        <div className={styles.menuDetails}>
          <h1>{name}</h1>

          <span className={styles.extraDetails}>
            <span className={styles.starIcon}>&#9733;</span>
            <span className={styles.rating}>{avgRating}</span> &bull;
            <span className={styles.cost}> {costForTwoMessage}</span>
          </span>

          <p className={styles.cuisine}>{cuisines?.join(", ")}</p>
        </div>

        <h4 className={styles.menuText}>Menu</h4>

        {/* Menu Sections */}
        <div className={styles.menuCategories}>
          {cardsWithTitle?.map((section, index) => {
            return (
              <Category
                key={index}
                section={section}
                index={index}
                openCategoryIndex={openCategoryIndex}
                setOpenCategoryIndex={setOpenCategoryIndex}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
