import React from 'react';

const Stats = () => {
  const statsData = [
    { emoji: '🎁', number: '985+', label: 'Donation Received' },
    { emoji: '💰', number: '$10 M', label: 'Money Donated' },
    { emoji: '📢', number: '12+', label: 'Active Campaigns' },
    { emoji: '❤️', number: '$60 M', label: 'Charity in last Year' }
  ];

  return (
    <section className="stats pattern">
      <div className="container stats-grid">
        {statsData.map((stat, index) => (
          <div key={index} className="stat">
            <span className="stat-emoji">{stat.emoji}</span>
            <div className="stat-content">
              <span className="stat-num">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
