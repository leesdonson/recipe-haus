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

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const result = await getRecepies();
      setLoading(false);
      setRecepie(result.recipes);
    };

    getData();
  }, []);

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
    </div>
  );
};

export default RecepieList;
