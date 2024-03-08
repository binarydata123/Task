"use client";
import React, { useEffect, useState } from 'react';

const AdminPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/data');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Admin Page</h1>
      <ul>
        {data.map(item => (
          <li key={item._id}>
            {/* Render your data here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
