import React, { useState } from 'react';
import { supabase } from '../client';

const AddCreator = () => {
  const [creator, setCreator] = useState({
    name: '',
    url: '',
    description: '',
    imageURL: ''
  });

  const handleChange = (e) => {
    setCreator({
      ...creator,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await supabase.from('creators').insert([creator]);
    alert('Creator added successfully!');
    // Reset form
    setCreator({ name: '', url: '', description: '', imageURL: '' });
  };

  return (
    <div>
      <h1>Add New Creator</h1>
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
        <button type="submit">Add Creator</button>
      </form>
    </div>
  );
};

export default AddCreator;