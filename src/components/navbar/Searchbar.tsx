import { useEffect, useState } from "react";
import styles from "./searchBar.module.css";
import { IoSearch } from "react-icons/io5";
import { getRecepies } from "../../lib/getRecepie";
import { Link } from "react-router-dom";

interface ItemProps {
  name: string;
  id: number;
  image: string;
}

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const getDate = async () => {
      const result = await getRecepies();
      if (result.recipes) {
        setShow(true);
        setItems(result.recipes);
      }
    };
    getDate();
  }, [searchTerm, show]);

  const allItems = items.filter((item: ItemProps) => {
    return (
      searchTerm && item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  const filteredItem = allItems.slice(0, 30);
  return (
    <section className={styles.container}>
      <form className={styles.form}>
        <input
          className={styles.input}
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          type="text"
          placeholder="Search here..."
        />
        <button className={styles.searchBtn} type="submit">
          <IoSearch className={styles.icon} />
        </button>
      </form>
      {show && searchTerm && (
        <div className={styles.searchResults}>
          {filteredItem.map((r: ItemProps) => (
            <Link
              to={`/recipe/details/${r.id}`}
              onClick={() => setSearchTerm("")}
              className={styles.results}
              key={r.name}
            >
              {r.name}

              <img
                className={styles.resImg}
                width={30}
                height={30}
                src={r.image}
                alt={r.name}
              />
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default SearchBar;
