import styles from "./recepieCard.module.css";

interface Props {
  name: string;
  cuisine: string;
  id: number;
  image: string;
  rating: number;
  reviewCount: number;
}

const RecepieCard = ({ recipe }: { recipe: Props }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.img}>
          <img className={styles.image} src={recipe.image} alt={recipe.name} />
        </div>
        <div className={styles.info}>
          <h3 className={styles.name}>{recipe.name}</h3>
          <p className={styles.cuisine}>{recipe.cuisine}</p>
        </div>
        <div className={styles.rating}>
          <p>Rating: {recipe.rating}</p>
          <p>Review Count: {recipe.reviewCount}</p>
        </div>
      </div>
    </div>
  );
};

export default RecepieCard;
