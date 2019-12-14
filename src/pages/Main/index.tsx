import React, { useState } from 'react';
import api from '../../services/api';

import logo from '../../assets/logo.svg';
import './styles.css';

export default function Main({ history }) {
  const [newBox, setNewBox] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    const response = await api.post('boxes', {
      title: newBox,
    });

    history.push(`/box/${response.data._id}`);
  };

  const handleInputChange = e => setNewBox(e.target.value);

  return (
    <div id="main-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="" />
        <input
          placeholder="Criar um box"
          value={newBox}
          onChange={handleInputChange}
        />
        <button type="submit">Criar</button>
      </form>
    </div>
  );
}
