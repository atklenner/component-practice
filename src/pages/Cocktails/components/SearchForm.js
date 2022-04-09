export default function SearchForm({ handleChange }) {
  return (
    <form>
      <h2>Search Your Favorite Cocktail</h2>
      <input type="text" onChange={handleChange} />
    </form>
  );
}
