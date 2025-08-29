import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client';
import Card from '../components/Card';

const ShowCreators = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data } = await supabase
        .from('creators')
        .select('*');
      setCreators(data);
    };
    fetchCreators();
  }, []);

  return (
    <div>
      <h1>💫 Creatorverse</h1>
      <Link to="/add" className="add-creator-btn">
        ✨ Add New Creator
      </Link>
      <div className="creators-grid">
        {creators.length > 0 ? (
          creators.map((creator) => (
            <Card key={creator.id} creator={creator} />
          ))
        ) : (
          <div className="no-creators">
            <p>No content creators found!</p>
            <p>Click "Add New Creator" to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowCreators;