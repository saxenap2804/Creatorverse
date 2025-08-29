import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../client';

const ViewCreator = () => {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    const fetchCreator = async () => {
      const { data } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single();
      setCreator(data);
    };
    fetchCreator();
  }, [id]);

  if (!creator) {
    return <div>Loading...</div>;
  }

  return (
    <div className="view-creator">
      <h1>{creator.name}</h1>
      {creator.imageURL && <img src={creator.imageURL} alt={creator.name} />}
      <p>{creator.description}</p>
      <div className="view-creator-buttons">
        <a href={creator.url} target="_blank" rel="noopener noreferrer">
          Visit Channel
        </a>
        <Link to={`/edit/${creator.id}`}>
          <button>Edit Creator</button>
        </Link>
        <Link to="/">
          <button>Back to All Creators</button>
        </Link>
      </div>
    </div>
  );
};

export default ViewCreator;