import { useEffect, useState } from "react";
import styles from "./recipeDetails.module.css";
import { getRecepie } from "../../lib/getRecepie";
import Spinner from "../spinner/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { motion } from "framer-motion";

interface ItemProps {
  name: string;
  cuisine: string;
  id: number;
  image: string;
  rating: number;
  reviewCount: number;
}

const initialState: ItemProps = {
  name: "",
  cuisine: "",
  id: 0,
  image: "",
  rating: 0,
  reviewCount: 0,
};

// fetch all rcipes and filter them based on the id and display all details below

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  if (!id) throw new Error("Id is missing.");

  useEffect(() => {
    setLoading(true);

    const getData = async (id: number) => {
      const result = await getRecepie(id);

      setLoading(false);
      setRecipe(result);
    };

    const recipeId = parseInt(id);

    getData(recipeId);
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <FaArrowAltCircleLeft
          onClick={() => navigate(-1)}
          className={styles.icon}
        />
        <h1 className={styles.name}>Recipe Details</h1>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.img}>
            <motion.img
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 80 }}
              className={styles.image}
              src={recipe.image}
              alt={recipe.name}
            />
          </div>
        </div>
        <div className={styles.right}>
          <motion.h3
            initial={{ y: -300 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 80 }}
            className={styles.item_name}
          >
            {recipe.name}
          </motion.h3>
          <div className={styles.info}>
            <p className={styles.cuisine}>{recipe.cuisine}</p>
            <div className={styles.content}>
              <p className={styles.label}>Rating:</p>
              <p className={styles.details}>{recipe.rating}</p>
            </div>
            <div className={styles.content}>
              <p className={styles.label}>Review Count:</p>
              <p className={styles.details}>{recipe.reviewCount}</p>
            </div>
            <div className={styles.desc}>
              <p className={styles.label}>Description:</p>
              <motion.p
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={styles.details}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                ab tempore eaque ullam et doloribus repellat placeat rem
                praesentium quam quidem, veniam iure aliquam, recusandae vitae
                dolore laborum aspernatur? Aut.
              </motion.p>
            </div>
            <div className={styles.customer}>
              <div className={styles.c_details}>
                <h3 className={styles.initial}>JD</h3>
                <p className={styles.fullName}>Jane Doe</p>
              </div>
              <motion.p
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={styles.customer_review}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
                animi ipsa explicabo sed alias corporis aliquam sit optio.
              </motion.p>
              <small className={styles.date}>12 May, 2024</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
