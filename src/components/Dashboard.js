import React, { useState } from 'react';
import { updateBanner } from '../api';
import './Dashboard.css'; // Import the CSS file for styling

const Dashboard = () => {
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [timer, setTimer] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const banner = { description, link, timer, visible };
      await updateBanner(banner);
      alert('Banner updated successfully!');
    } catch (error) {
      console.error('Error updating banner:', error);
      alert('Failed to update banner.');
    }
  };

  return (
    <div className="dashboard">
      <h1>Banner Dashboard</h1>
      <form onSubmit={handleSubmit} className="dashboard-form">
        <div className="form-group">
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Link:</label>
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Timer (seconds):</label>
          <input
            type="number"
            value={timer}
            onChange={(e) => setTimer(Number(e.target.value))}
            required
          />
        </div>
        <div className="form-group">
          <label>Visible:</label>
          <input
            type="checkbox"
            checked={visible}
            onChange={(e) => setVisible(e.target.checked)}
          />
        </div>
        <button type="submit" className="submit-btn">Update Banner</button>
      </form>
    </div>
  );
};

export default Dashboard;
