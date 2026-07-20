import './legend.css'
import React from 'react';
const MapLegend = () => {
  const items = [
    {
      label: "High (20+)",
      color: "#16a34a",
    },
    {
      label: "Good (10 - 19)",
      color: "#2563eb",
    },
    {
      label: "Medium (5 - 9)",
      color: "#f97316",
    },
    {
      label: "Low (1 - 4)",
      color: "#eab308",
    },
    {
      label: "No Projects",
      color: "#d1d5db",
    },
  ];

  return (
    <div className='legend-container'>

      <h4>
        Projects
      </h4>

      <div className='legend-items'>
      {items.map((item) => (
        <div className='legend-content'
          key={item.label}>

          <span className='legend-icon'
            style={{
              background:item.color
            }}
          />

          {item.label}

        </div>
      ))}
      </div>

    </div>
  );
};


export default MapLegend;