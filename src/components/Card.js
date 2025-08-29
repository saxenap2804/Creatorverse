import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ creator }) => {
  return (
    <div className="creator-card">
      <h3>{creator.name}</h3>
      {creator.imageURL && <img src={creator.imageURL} alt={creator.name} />}
      <p>{creator.description}</p>
      <div className="card-buttons">
        <a href={creator.url} target="_blank" rel="noopener noreferrer">
          Visit Channel
        </a>
        <Link to={`/view/${creator.id}`}>
          <button>View Details</button>
        </Link>
        <Link to={`/edit/${creator.id}`}>
          <button>Edit</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;