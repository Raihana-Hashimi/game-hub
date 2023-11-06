import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { geners } = useGenres();
  return (
    <ul>
      {geners.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
