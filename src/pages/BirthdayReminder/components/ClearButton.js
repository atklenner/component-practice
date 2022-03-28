export default function ClearButton({ handleClick }) {
  return (
    <button
      onClick={handleClick}
      className="button card-footer is-danger is-light is-fullwidth"
    >
      Clear All
    </button>
  );
}
