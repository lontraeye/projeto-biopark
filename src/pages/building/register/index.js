import React, { useState } from 'react';
import { BUILDING } from '../../../constants/url';
import { post } from '../../../utils/restUtils';


function BuildingForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    await post(BUILDING, {name, description})
    // You can replace the console.log statement with your own implementation
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Descrição:
        <textarea value={description} onChange={handleDescriptionChange} />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default BuildingForm;