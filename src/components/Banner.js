import React, { useEffect, useState } from 'react';
import { fetchBanner, updateBanner } from '../api';
import './Banner.css';

const Banner = () => {
  const [banner, setBanner] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const getBanner = async () => {
      try {
        const data = await fetchBanner();
        setBanner(data);
        if (data.visible) {
          setTimeLeft(data.timer);
          const interval = setInterval(() => {
            setTimeLeft((prev) => {
              if (prev <= 1) {
                clearInterval(interval);
                // Update banner visibility when time ends
                updateBanner({ ...data, visible: false });
                return 0;
              }
              return prev - 1;
            });
          }, 1000);
        }
      } catch (error) {
        console.error('Error fetching banner:', error);
      }
    };

    getBanner();
  }, []);

  if (!banner) return <div>Loading...</div>;

  return (
    banner.visible && (
      <div style={{ backgroundColor: 'lightblue', padding: '20px' }}>
        <h1>{banner.description}</h1>
        <a href={banner.link} target="_blank" rel="noopener noreferrer">Learn More</a>
        <div>
          <h2>Time Left: {timeLeft} seconds</h2>
        </div>
      </div>
    )
  );
};

export default Banner;
