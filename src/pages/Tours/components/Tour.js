import { useState } from "react";

export default function Tour({ id, image, name, info, price, handleClick }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img src={image} alt="You could be here instead" />
        </figure>
      </div>
      <div className="card-header">
        <div className="card-header-title">
          {name}
          <span className="ml-auto">{price}</span>
        </div>
      </div>
      <div className="card-content">
        <div className="content">
          {readMore ? info : `${info.substring(0, 200)}...`}
        </div>
        <button onClick={() => setReadMore(!readMore)} className="button">
          {readMore ? "show less" : "read more"}
        </button>
      </div>
      <button onClick={() => handleClick(id)} className="button">
        Not Interested
      </button>
    </div>
  );
}
