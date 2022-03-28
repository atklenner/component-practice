export default function Person({ person }) {
  return (
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <figure className="image is-64x64">
            <img
              src={"https://bulma.io/images/placeholders/64x64.png"}
              alt="what an ugly person"
              className="is-rounded"
            />
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-6">{person.name}</p>
          <p className="subtitle is-6">{person.age} years</p>
        </div>
      </div>
    </div>
  );
}
