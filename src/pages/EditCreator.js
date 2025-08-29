import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';

const EditCreator = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: ''
  });

  useEffect(() => {
    const fetchCreator = async () => {
      const { data } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single();
      if (data) {
        setCreator(data);
      }
    };
    fetchCreator();
  }, [id]);

  const handleChange = (e) => {
    setCreator({
      ...creator,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await supabase
      .from('creators')
      .update(creator)
      .eq('id', id);
    alert('Creator updated successfully!');
    navigate('/');
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this creator?')) {
      await supabase
        .from('creators')
        .delete()
        .eq('id', id);
      alert('Creator deleted successfully!');
      navigate('/');
    }
  };

  return (
    <div>
      <h1>Edit Creator</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Creator Name"
          value={creator.name}
          onChange={handleChange}
          required
        />
        <input
          name="url"
          placeholder="Creator URL"
          value={creator.url}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={creator.description}
          onChange={handleChange}
          required
        />
        <input
          name="imageURL"
          placeholder="Image URL (optional)"
          value={creator.imageURL}
          onChange={handleChange}
        />
        <button type="submit">Update Creator</button>
        <button type="button" onClick={handleDelete}>
          Delete Creator
        </button>
      </form>
    </div>
  );
};

export default EditCreator;