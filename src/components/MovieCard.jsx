import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
import { getMovieImg } from "../utils/getMovieImg";

export function MovieCard({ movie }) {
  const imageUrl = getMovieImg(movie.show.image.medium, 300);
  return (
    <li className={styles.movieCard}>
      <Link to={"/movies/" + movie.show.id}>
        <img
          width={230}
          height={345}
          className={styles.movieImage}
          src={imageUrl}
          alt={movie.show.name}
        />
        <div>{movie.show.name}</div>
      </Link>
    </li>
  );
}
