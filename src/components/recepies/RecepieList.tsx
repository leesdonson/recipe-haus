import { useEffect, useState } from "react";
import { getRecepies } from "../../lib/getRecepie";
import styles from "./recepieList.module.css";
import { Link } from "react-router-dom";
import RecepieCard from "./RecepieCard";
import Spinner from "../spinner/Spinner";
import { motion } from "framer-motion";

interface ItemProps {
  name: string;
  cuisine: string;
  id: number;
  image: string;
  rating: number;
  reviewCount: number;
}

const RecepieList = () => {
  const [recipes, setRecepie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(1);
  const [skip, setSkip] = useState<number>(6);

  let limit = 6;

  useEffect(() => {
    document.title = "Recipe List | Recipe Haus";
    setLoading(true);
    const getData = async () => {
      const result = await getRecepies(limit, skip, pageCount);
      setLoading(false);
      setRecepie(result.recipes);
    };

    getData();
  }, [pageCount, limit, skip]);

  const handleNext = () => {
    setPageCount(pageCount + 1);
    setSkip(skip + 6);
  };
  const handlePrev = () => {
    setPageCount(pageCount - 1);
    setSkip(skip - 6);
  };

  const content =
    recipes?.length == 0 ? (
      <p>No Recepies available</p>
    ) : (
      <motion.div
        initial={{
          x: -100,
        }}
        animate={{
          x: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 80,
        }}
        className={styles.card}
      >
        {recipes?.map((recipe: ItemProps) => (
          <Link key={recipe.name} to={`/recipe/details/${recipe.id}`}>
            <RecepieCard recipe={recipe} />
          </Link>
        ))}
      </motion.div>
    );

  if (loading) return <Spinner />;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>{content}</div>
      <div className={styles.pagination}>
        <button onClick={handlePrev} className={styles.button}>
          Prev...
        </button>
        <span className={styles.count}>{pageCount}</span>
        <button onClick={handleNext} className={styles.button}>
          Next
        </button>
      </div>
    </div>
  );
};

export default RecepieList;
